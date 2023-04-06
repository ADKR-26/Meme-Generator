import React, { useState, useEffect } from 'react'
import axios from 'axios';
import countapi from "countapi-js";

import './floatbutton.css';

function MemeGeneraor() {

  // const [name, setName] = useState();
  const [meme, setMeme] = useState();
  const [render, setRender] = useState();

  // countapi.visits().then((result) => {
  //   console.log(result);
  // });

  axios.get('https://api.countapi.xyz/update/florin-popcom/ADKR/?amount=1')
    .then((result) => {
      const data = result;
      console.log(data)
    });

  async function getMemeData() {
    // const num = Math.floor(Math.random() * 100);
    try {
      // const response = await axios.get('https://api.imgflip.com/get_memes');
      const response = await axios.get('https://meme-api.com/gimme');
      setMeme(response.data.preview[1]);
      // setMeme(response.data.data.memes[num].url);
      // setName(response.data.data.memes[num].name);
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
