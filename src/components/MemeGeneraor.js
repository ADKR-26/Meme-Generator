import React, { useState, useEffect } from 'react'
import axios from 'axios';
import countapi from "countapi-js";

import './floatbutton.css';

function MemeGeneraor() {

  const [meme, setMeme] = useState();
  const [render, setRender] = useState();

  axios.get('https://api.countapi.xyz/update/florin-popcom/ADKR/?amount=1')
    .then((result) => {
      const data = result;
      console.log(data)
    });

  async function getMemeData() {
    try {
      
      const response = await axios.get('https://meme-api.com/gimme');
      setMeme(response.data.preview[1]);
      
      console.log(response.data.preview[1]);
    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getMemeData();
  }, [render]);

  return (
    <div>
      <div className='name'>
        Meme Generator !!
        {/* <h2>{name}</h2> */}
      </div>
      <div classname='meme-button'>
        <button classname='meme-button' onClick={setRender}>New Meme</button>
      </div>
      <div>
        <img src={meme} alt='API FAILED' width={500}></img>
      </div>
    </div>
  )
}

export default MemeGeneraor
