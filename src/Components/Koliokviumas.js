import React, { useState } from "react";
import Navbar from "./Navbar";
import "./KoliokviumasStyles.css";

export default function VideoPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [gifs, setGifs] = useState([]);

  // Update search term
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  }

  // Search and display GIFs using Giphy API and submit to DbConnect.php
  const searchGifs = async () => {
    const apiKey = "hobpsjJ3wtDM38hGOarltltU2X76nqwe";

    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=10`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      // Update gifs state
      setGifs(data.data);

      // Submit data to DbConnect.php
      const formData = new FormData();
      formData.append("history", searchTerm);

      await fetch("DbConnect.php", {
        method: "POST",
        body: formData
      });

    } catch (error) {
      console.error("Failed to fetch GIFs and submit to DbConnect.php:", error);
    }
  };

  return (
    <div>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999 }}>
        <Navbar />
      </div>
      <div style={{ marginTop: "100px" }}>
        <iframe
          src="https://www.youtube.com/embed/NsUWXo8M7UA"
          title="YouTube video"
          allowFullScreen
          style={{ width: "100%", height: "75vh" }}
        ></iframe>
      </div>
      <h1>Search and Display GIFs</h1>
      <form>
        <input name="history" type="text" id="search-input" placeholder="Enter search term" value={searchTerm} onChange={handleSearchTermChange}/>
        <button type="button" onClick={searchGifs}>Search GIFs</button>
      </form>
      <div id="gifs-output">
        {gifs.map(gif => (
          <img key={gif.id} src={gif.images.fixed_width.url} alt={gif.title} />
        ))}
      </div>
    </div>
  );
}
