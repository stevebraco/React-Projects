import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className="section search">
      <form className="search__form" onSubmit={handleSubmit} >
        <input
          type="text"
          className="search__input"
          id="name"
          ref={searchValue}
          onChange={searchCocktail}
          placeholder="Search Your Favorite Cocktail"
        />
      </form>
    </section>
  );
};

export default SearchForm;
