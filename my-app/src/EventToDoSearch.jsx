import { useState } from "react";
import "./EventToDoSearch.css";

export default function EventToDoSearch() {
  const [search, setSearch] = useState("");
  const name = ["Demis", "Richa", "anuj", "naman"];

  const student = name.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="search-container">
      <h2 className="search-title">Demo to Show Search</h2>

      <input
        type="text"
        className="search-input"
        placeholder="Enter key to search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="search-list">
        {student.map((item, index) => (
          <li key={index} className="search-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
