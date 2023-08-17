import React, { useEffect } from 'react';
import "./Mediaphoto.css";

export default function Mediaphoto() {
  useEffect(() => {
    const images = document.getElementsByClassName("image");

    const largerImageContainer = document.getElementById("largerImageContainer");
    const largerImage = document.getElementById("largerImage");

    const openImage = (event) => {
      const imgSrc = event.target.src;
      largerImage.src = imgSrc;
      largerImageContainer.style.display = "block"; 
    };

    for (let i = 0; i < images.length; i++) {
      images[i].addEventListener('click', openImage);
    }

    largerImage.onclick = function () {
      largerImageContainer.style.display = "none"; 
    };

    window.onclick = function (event) {
      if (event.target === largerImageContainer) {
        largerImageContainer.style.display = "none"; 
      }
    };

    return () => {
      for (let i = 0; i < images.length; i++) {
        images[i].removeEventListener('click', openImage);
      }
    };
  }, []);

  return (
    <div className='main'>
      <p className='pinsp'><b>"Inspiring Change"</b></p>
      <p className='punvel'><b>Unveiling the Aarambh Organization's Impact</b></p>
      <div className='mediaphoto'>
        <div className='mediaphoto1'>
          <img className="image" src={require("./image/mediaphoto1.jpg")} alt=""/>
        </div>
        <div className='mediaphoto1'>
          <img className="image" src={require("./image/mediaphoto2.jpg")} alt=""/>
        </div>
        <div className='mediaphoto1'>
          <img className="image" src={require("./image/mediaphoto3.jpg")} alt=""/>
        </div>
        <div className='mediaphoto1'>
          <img className="image" src={require("./image/mediaphoto4.jpg")} alt=""/>
        </div>
        <div className='mediaphoto1'>
          <img className="image" src={require("./image/mediaphoto5.jpg")} alt=""/>
        </div>
        <div className='mediaphoto1'>
          <img className="image" src={require("./image/mediaphoto6.jpg")} alt=""/>
        </div>
        <div className='mediaphoto1'>
          <img className="image" src={require("./image/mediaphoto7.jpg")} alt=""/>
        </div>
        <div className='mediaphoto1'>
          <img className="image" src={require("./image/mediaphoto8.jpg")} alt=""/>
        </div>
        <div className='mediaphoto1'>
          <img className="image" src={require("./image/mediaphoto9.jpg")} alt=""/>
        </div>
        <div className='mediaphoto1'>
          <img className="image" src={require("./image/mediaphoto10.jpg")} alt=""/>
        </div>
        <div className='mediaphoto1'>
          <img className="image" src={require("./image/mediaphoto11.jpg")} alt=""/>
        </div>
        <div className='mediaphoto1'>
          <img className="image" src={require("./image/mediaphoto12.jpg")} alt=""/>
        </div>
        <div className='mediaphoto1'>
          <img className="image" src={require("./image/mediaphoto13.jpg")} alt=""/>
        </div>
        <div className='mediaphoto1'>
          <img className="image" src={require("./image/mediaphoto14.jpg")} alt=""/>
        </div>
        <div className='mediaphoto1'>
          <img className="image" src={require("./image/mediaphoto15.jpg")} alt=""/>
        </div>
      </div>


      <div id="largerImageContainer" className="larger-image-container">
        <img id="largerImage" src="" alt=""/>
      </div>

    </div>
  );
}
