import React from "react";

const SearchBar = ({onSubmit}) => {
  return (
    <header>
      <form>
        <input
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button type="submit" onSubmit={onSubmit}>Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
