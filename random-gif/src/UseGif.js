import { useEffect, useState } from "react";
import axios from "axios";
import '../App.css'

const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}`;

// COMPONENT DID MOUNT ... first render
const UseGif = (tag) => {
  const [gif, setGif] = useState("");

  const fetchGif = async (tag) => {
      //if we have a tag ?
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url ); // promise
    const imageSrc = data.data.images.downsized_large.url;

    setGif(imageSrc);
  };

  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  const handleClick = () => {
      fetchGif(tag);
  };

  return {gif, fetchGif};
  
};

export default UseGif;
