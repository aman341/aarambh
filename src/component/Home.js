import React from "react";
import "./Home.css";
import Slider from "./Slider";

export default function Home() {
  return (
       
    <div>

      <div className="slider">
        <Slider/>      
      </div>  

      <div className="Humanity_Above_Religion">
        <div className="Humanity_Above_Religion_text">
          <div className="heading">
            <p>
              <b className="btag">Humanity Above Religion</b>
            </p>
          </div>
          <div className="heading1">  
            <p className="ptag">
              <b>People is a humanitarian platform that carries tha concept of sharing
              for fellow human beings.</b>
            </p>
            <p className="ptag">
            <b>Through Aarambh Orgnization you can donate to people in need.</b></p>
            <p className="ptag"><b>So Let's start donationg!</b></p>
            {/* <button type="button" className="btn btn-primary"><a style={{color:'white',textDecoration:'none'}} href="/Donate">Donate Now</a></button> */}
            <a href="/Donate" className="btn btn-primary">Donate</a>
          </div>
        </div>
      </div>


      <div className="We_stand_to_help">
        <div className="helpitemtext">
          <h3>
            <b>We stand to help</b>
          </h3>
          <h3>
            <b>fellow human beings</b>
          </h3>
          <br/>
            <p>
            <b className="btag">That's a wonderful sentiment! Helping others is a great way to make a positive impact on the world and build stronger communities.</b>
            <br/>
            <b className="btag">There are many ways to help fellow human beings, such as volunteering your time and skills, donating to charities or causes you care about, or simply being kind and supportive to those around you.</b>
            <br/>
            <b className="btag">No matter how you choose to help, the important thing is to do what you can, where you can, and with a spirit of kindness and generosity.</b>
            </p>
          </div>

          <div className="helpitemphoto">
            <img src={require("./image/card-5.jpg")} className="card-img-top" alt=""/>
          </div>
        </div>


      <div className="row latestrow">
        <div className="latest text-center my-3">
          <h3 className="H3class"><b>Latest Works</b></h3>
        </div>
      </div>

      <div className="row Artical_card">

          <div className="Artical_card_item">
            <div className="card">
              <div className="imgbox">
                <img src={require("./image/food aid distribution.jpg")} alt=""/>
              </div>
              <div className="content">
                <h4>Food Aid Distribution</h4>
              </div>
            </div>
          </div>

          <div className="Artical_card_item">
            <div className="card">
              <div className="imgbox">
                <img src={require("./image/clothing distribution.jpg")} alt=""/>
              </div>
              <div className="content">
                <h4>Clothing Distribution</h4>
              </div>
            </div>
          </div>

          <div className="Artical_card_item">
            <div className="card">
              <div className="imgbox">
                <img src={require("./image/Blood collection campaign.jpg")} alt=""/>
              </div>
              <div className="content">
                <h4>Blood Donation Camps</h4>
              </div>
            </div>
          </div>

          <div className="Artical_card_item">
            <div className="card">
              <div className="imgbox">
                <img src={require("./image/Charitable_Medical_Camps.jpg")} alt=""/>
              </div>
              <div className="content">
                <h4>Charitable Medical Camps</h4>
              </div>
            </div>
          </div>

          <div className="Artical_card_item">
            <div className="card">
              <div className="imgbox">
                <img src={require("./image/COVID-19 Relief kit distribution.jpg")} alt=""/>
              </div>
              <div className="content">
                <h4>COVID-19 Relief Kit Distribution</h4>
              </div>
            </div>
          </div>

          <div className="Artical_card_item">
            <div className="card">
              <div className="imgbox">
                <img src={require("./image/International Women's Day General Knowledge Quiz Competition.jpg")} alt=""/>
              </div>
              <div className="content">
                <h4>Quiz Competition</h4>
              </div>
            </div>
          </div>

          <div className="Artical_card_item">
            <div className="card">
              <div className="imgbox">
                <img src={require("./image/cluture_activity.jpg")} alt=""/>
              </div>
              <div className="content">
                <h4>Cultural Activites</h4>
              </div>
            </div>
          </div>

          <div className="Artical_card_item">
            <div className="card">
              <div className="imgbox">
                <img src={require("./image/Distribution of Educational Mate.jpg")} alt=""/>
              </div>
              <div className="content">
                <h4>Distribution of Educational Materials</h4>
              </div>
            </div>
          </div>

          <div className="Artical_card_item">
            <div className="card">
              <div className="imgbox">
                <img src={require("./image/Marathon Against Drugs.jpg")} alt=""/>
              </div>
              <div className="content">
                <h4>Marathon Against Drugs</h4>
              </div>
            </div>
          </div>
         
      </div>

      <p className="storiesinmotion"><b>STORIES IN MOTION</b></p>
        <div className="stories">
          <div className="storiesitem">
            <img src={require("./image/STORIES6.jpg")} className = "itemclass" style={{ width: "16rem"}} alt=""/>
          </div>
          <div className="storiesitem">
            <img src={require("./image/STORIES2.jpg")} className = "itemclass" style={{width:"16rem"}} alt=""/>
          </div>
          <div className="storiesitem">
            <img src={require("./image/STORIES3.jpg")} className = "itemclass" style={{width:"16rem"}} alt=""/>
          </div>
          <div className="storiesitem">
            <img src={require("./image/STORIES4.jpg")} className = "itemclass" style={{width:"16rem"}} alt=""/>
          </div>
          <div className="storiesitem">
            < img src={require("./image/STORIES5.jpg")} className = "itemclass" style={{width:"16rem"}} alt=""/>
          </div>
          <div className="storiesitem">
            <img src={require("./image/STORIES1.jpg")} className = "itemclass" style={{width:"16rem"}} alt=""/>
          </div>
          <div className="storiesitem">
            <img src={require("./image/STORIES7.jpg")} className = "itemclass" style={{width:"16rem"}} alt=""/>
          </div>
          <div className="storiesitem">
            <img src={require("./image/STORIES8.jpg")} className = "itemclass" style={{width:"16rem"}} alt=""/>
          </div>
        </div>

      
      <div className="certificate">
        <div className="certificateitem2">
          <img src={require("./image/certificate.jpg")} style={{width:"8cm",height:"11cm"}} alt=""/>
        </div>
        <div className="certificateitem">
        <p className="certificate_header"><b>What we do</b></p>
          <ul className="ultag">
            <li>Through the organization, we can reach out to every needy person and help him.</li>
            <br/>
            <li>From time to time, the organization will run drug free campaign.</li>
            <br/>
            <li>The organization will try to distribute books and dress to the needy girl students.</li>
            <br/>
          </ul> 
        </div>
        <div className="certificateitem1">
          <img src={require("./image/33.jpg")} style={{width:"8cm",height:"11cm"}} alt=""/>
        </div>
      </div>

    </div> 
  );
}
