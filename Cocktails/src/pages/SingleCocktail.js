import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import {Link} from 'react-router-dom'

const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

const SingleCocktail = () => {
  const { id } = useParams(); // OU const id = props.match.params.id
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const fetchCocktail = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      const { drinks } = data;
      console.log(drinks[0]);
      if (drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
        } = drinks[0];

        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
        ];
        const newCocktail = {
            name, image, info, category, glass, instructions, ingredients
        }
        setCocktail(newCocktail)
      } else {
        setCocktail([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCocktail();
  }, [id]);

  if(loading) {
      return <Loading/>
  }

  if(!cocktail) {
      return <h2>No cocktail to display</h2>
  }
  const { name, image, info, category, glass, instructions, ingredients } = cocktail
  return <section className="section singleCocktail container">
      <Link to='/' className='btn btn-primary'>Back Home</Link>
      <h2 className='section__title'> {name} </h2>
      <div className="singleCocktail__img">
        <img className='cocktail__img' src={image} alt={name} />
      </div>
      <div className="singleCocktail__info">
          <p>
              <span className='singleCocktail__data'> name : </span>
              {name}
          </p>
          <p>
              <span className='singleCocktail__data'> category : </span>
              {category}
          </p>
          <p>
              <span className='singleCocktail__data'> info : </span>
              {info}
          </p>
          <p>
              <span className='singleCocktail__data'> glass : </span>
              {glass}
          </p>
          <p>
              <span className='singleCocktail__data'> instructions : </span>
              {instructions}
          </p>

           <p>
              <span className='singleCocktail__data'> ingredients :  </span>
              {ingredients.map((ingredient, index) => (
                  ingredient ? <span key={index}> {ingredient}, </span> : null
              ))}
          </p>
      </div>
      </section>;
};

export default SingleCocktail;
