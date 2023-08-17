import React from 'react'
import "./Team.css"
export default function Team() {
  return (
    <div>
      <div className='Team-lines'>
        <p className='ptag'><b>"Together we can achieve greatness"</b></p>  
        <p className='ptag1'><b>Individually, we are one drop. Together, we are an ocean.</b></p>
        <p className='ptag1'><b>Coming together is a beginning. Keeping together is progress. Working together is success.</b></p>
      </div>

      <p className='Board-Members'><b>Board Members</b></p>
      <div className='Boardphoto'>
        <div className="Boardphotoitem1">
          <img className='img' src={require("./image/Rahul.png")} alt=""/>
        </div>
        <div className="Boardphotoitem">
          <img className="img" src={require("./image/Nikki.png")} alt=""/>      
        </div>
        <div className="Boardphotoitem">
          <img className="img" src={require("./image/jittu.png")} alt=""/>
        </div>
        <div className="Boardphotoitem">
          <img className="img" src={require("./image/Kaushal.png")} alt=""/>
        </div>
        <div className="Boardphotoitem">
          <img className="img" src={require("./image/debu.png")} alt=""/>
        </div>
        <div className="Boardphotoitem">
          <img className="img" src={require("./image/Nanu.png")} alt=""/>
        </div>
        <div className="Boardphotoitem">
            <img className="img" src={require("./image/karan_badhani.jpg")} alt=""/>
        </div>
        <div className="Boardphotoitem">
            <img className="img" src={require("./image/brejesh.jpg")} alt=""/>
        </div>
        <div className="Boardphotoitem">
            <img className="img" src={require("./image/rahulpandey.jpeg")} alt=""/>
        </div>
        <div className="Boardphotoitem">
        <img className="img" src={require("./image/vivek_badhani.jpg")} alt=""/>
        </div>
        <div className="Boardphotoitem">
            <img className="img" src={require("./image/pawan.jpg")} alt=""/>
        </div>
        <div className="Boardphotoitem">
            <img className="img" src={require("./image/mohit.png")} alt=""/>
        </div>
        <div className="Boardphotoitem">
            <img className="img" src={require("./image/amit_jina.jpg")} alt=""/>
        </div>
      </div>
      
      <p className='Patron'><b>Patron</b></p>
      <div className="Patronphoto">
        <div className="Patronphotoitem">
          <img className="img" src={require("./image/mahesh.png")} alt=""/>
        </div>
        <div className="Patronphotoitem">
          <img className="img" src={require("./image/chandrashekhar.jpg")} alt=""/>
        </div>
      </div>

      <p className='Volunteers'><b>Volunteers</b></p>
      <div className="volunteersphoto">
        <div className="volunteersphotoitem">
        <img className="img" src={require("./image/pankaj_sah.jpg")} alt=""/>
        </div>
        <div className="volunteersphotoitem">
          <img className="img" src={require("./image/mukul_goswami.jpg")} alt=""/>
        </div>
        <div className="volunteersphotoitem">
          <img className="img" src={require("./image/nitin_kumar.jpg")} alt=""/>
        </div>
        <div className="volunteersphotoitem">
          <img className="img" src={require("./image/manish_bisht.jpg")} alt=""/> 
        </div>
        <div className="volunteersphotoitem">
          <img className="img" src={require("./image/ravi_joshi.jpg")} alt=""/>
        </div>
        <div className="volunteersphotoitem">
          <img className="img" src={require("./image/gaurav_garjola.jpg")} alt=""/>
        </div>
        <div className="volunteersphotoitem">
          <img className="img" src={require("./image/Neeraj.png")} alt=""/>
        </div>
        <div className="volunteersphotoitem">
          <img className="img" src={require("./image/rajkumar.jpg")} alt=""/>        
        </div>
        
      </div>
    </div> 
    )}