import React, { useState } from 'react';
import axios from 'axios';
import "./Image.css"

const ImageDisplay = () => {
  const [imageUrl, setImageUrl] = useState('');

  const fetchImage = async () => {
    const accessKey = 'DgXjBz2VuDMCXf7aPsln3OEvr9ampTk8UYVSPRJ8NsQ';
    const response = await axios.get(`https://api.unsplash.com/photos/random?client_id=${accessKey}`);
    setImageUrl(response.data.urls.regular);
    console.log(imageUrl)
  };

  return (
    <div className='main'>
      <h1 className='header'>ImageOverLay App</h1>
      <button onClick={fetchImage} className='img-button'>Fetch Image</button>
      {imageUrl && <img src={imageUrl} alt="Fetched" className='img'/>}
    </div>
  );
};

export default ImageDisplay;
