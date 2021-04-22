import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }

    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      console.log(newIndex);
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      console.log(newIndex);
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
   let randomNumber =  Math.floor(Math.random() * people.length);
   // si égale, on ne veut pas afficher la meme image alors on affiche la suivante avec index + 1
   if(randomNumber === index) {
       randomNumber = index + 1 
   }
   setIndex(checkNumber(randomNumber))

  }

  return (
    <article className="review">
      <figure className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </figure>
      <div>
        <h4 className="author"> {name} </h4>
        <p className="job"> {job} </p>
        <p className="info"> {text} </p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
      </div>
      <button className="random-btn" onClick={randomPerson}>Surprise Me</button>
    </article>
  );
};

export default Review;
