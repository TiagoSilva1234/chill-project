import React, { useState, useLayoutEffect, useEffect, Suspense } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './gallery.scss'
const Gallery = () => {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    fetch("https://shouldyoudoit.herokuapp.com/all")
      .then((res) => res.json())
      .then((res) => {
        setImgs(res);
      });
  }, []);

  return (
    <div>
      <div className="images"> 
        {imgs.map((e) => 
    <LazyLoadImage  effect="blur" height="540px" width="548px" src={e.img}/>
   )} 
      </div>
    </div>
  );
};
export default Gallery;
