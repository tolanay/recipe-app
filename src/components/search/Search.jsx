import React from "react";
import "./Search.scss";

export default function Search() {
  return (
    <section className="search">
      <input
        class="search_field"
        type="text"
        placeholder="Search for a recipe"
      />
      <button class="search_btn">Search</button>
    </section>
  );
}
