import React from 'react' 
import "./Footer.css"
import {FaFacebookSquare,FaPhoneAlt,FaWhatsapp} from 'react-icons/fa'

export default function Footer() {
  return (
    <div id="Footer_container">

      <div className="Footer">

        {/* <div className="Footeritem">
          <p className="aboutus">About us</p>
          <p>Here you can</p>
        </div> */}
 
        <div className="Footeritem">
          <p className="socialmedia">Social Media</p>
            <a id="facebook" href="https://www.facebook.com/Aarambhekpahal2021?mibextid=ZbWKwL" rel="noreferrer" target="_blank"><FaFacebookSquare size={38}/></a>
            <a id="whatsapp" href="https://chat.whatsapp.com/EQSslDOlwra5zdrOCXZHMo" rel="noreferrer" target="_blank"><FaWhatsapp size={38} style={{color:'green'}}/></a>
        </div>
        <div className="Footeritem">
          <p className="contactus">Contact us</p>
            <ul>
              <li>
                <p className='pclass'>Kotabagh Nainital Uttarakhand</p>
              </li>
              <li>
                <p className='pclass1'><FaPhoneAlt size={15}/> +91-8755357887 </p>     
              </li>
            </ul>  
        </div>

        <div className="Footeritem1">
          <p className="Copyright">© 2023 Copyright : Aarambh Ek Pahal Sanstha</p>
        </div>  

      </div>
    </div>
  )
}
