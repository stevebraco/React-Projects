import React from "react";
import {Link} from 'react-router-dom'

const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <article className="cocktail__container">
              <Link to={`/cocktail/${id}`}>
      <div className="img-container ">
        <img className='img-medium' src={image} alt={name} />
      </div>
      </Link>

      <div className="cocktail__footer">
        <h3 className="cocktail__name"> {name} </h3>
        <h4 className="cocktail__glass"> {glass} </h4>
        <p className="cocktail__info"> {info} </p>
        <Link to={`/cocktail/${id}`} className='btn btn-primary'>Details</Link>
      </div>
    </article>
  );
};

export default Cocktail;
