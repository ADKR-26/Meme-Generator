import React, { useState, useEffect } from 'react';
import axios from 'axios';
import countapi from "countapi-js";

import './floatbutton.css';
import VisitCount from './VisitCount';

function MemeGenerator() {

  const [meme, setMeme] = useState();
  const [render, setRender] = useState(false);
  const [count, setCount] = useState(0);

  // const fetchCount = async () => {
  //   const response = await axios.get('https://api.countapi.xyz/update/http://192.168.29.188/Freedom/test/?amount=1');
  //   setCount(response.data.value);
  // };

  // axios.get('https://api.countapi.xyz/update/http://192.168.29.188/Freedom/test/?amount=1')
  //   .then((result) => {
  //     const data = result;
  //     console.log("DATA",data);
  //   });

  async function getMemeData() {
    try {
      const response = await axios.get('https://meme-api.com/gimme');
      setMeme(response.data.preview[1]);
      console.log(response.data.preview[1]);
    }
    catch (error) {
      console.log("ERROR", error);
    }
  }

  // useEffect(() => {
  //   fetchCount();
  // }, []);

  useEffect(() => {
    getMemeData();
  }, [render]);

  return (
    <div>
      <div className='name'>
        Meme Generator !!
        {/* <p>Count: {count}</p> */}
        <VisitCount />
      </div>
      <div className='meme-button'>
        <button onClick={() => setRender(!render)}>New Meme</button>
      </div>
      <div>
        <img src={meme} alt='API FAILED' width={500} />
      </div>
    </div>
  );
}

export default MemeGenerator;
