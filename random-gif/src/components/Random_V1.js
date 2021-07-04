import React, { useEffect, useState } from "react";
import axios from "axios";
import '../App.css'

const API_KEY = process.env.REACT_APP_API_KEY;

// COMPONENT DID MOUNT ... first render
const Random = () => {
  const [gif, setGif] = useState("");

  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url); // promise
    const imageSrc = data.data.images.downsized_large.url;

    setGif(imageSrc);
  };

  useEffect(() => {
    fetchGif();
  }, []);

  const handleClick = () => {
      fetchGif();
  };
  return (
    <div className='container'>
      <h1> Random Gif </h1>
      <img width="500" src={gif} alt="Random Gif" />
      <button onClick={handleClick}>Click For New</button>
    </div>
  );
};

export default Random;
