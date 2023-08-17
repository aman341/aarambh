import React from 'react';
import './Mediavideo.css';

export default function Mediavideo() {
  return (
    <div>
      
      <p className='pmediavideo'><b>"The Inspiring Videos of Aarambh Sanstha"</b></p>
      <div className='mediavideo'>
        
        <div className='mediavideo1'>
          <iframe
            width='300'
            height='202'
            src='https://www.youtube.com/embed/8rG1NpKxFL0'
            allowFullScreen
            title='YouTube Video'
          >
          </iframe>
        </div>

        <div className='mediavideo1'>
          <iframe
            width='300'
            height='202'
            src='https://www.youtube.com/embed/8rG1NpKxFL0'
            allowFullScreen
            title='YouTube Video'
          >
          </iframe>
        </div>

        <div className='mediavideo1'>
          <iframe
            width='300'
            height='202'
            src='https://www.youtube.com/embed/8rG1NpKxFL0'
            allowFullScreen
            title='YouTube Video'
          >
          </iframe>
        </div>

        <div className='mediavideo1'>
          <iframe
            width='300'
            height='202'
            src='https://www.youtube.com/embed/8rG1NpKxFL0'
            allowFullScreen
            title='YouTube Video'
          >
          </iframe>
        </div>

        {/* <div className='mediavideo1'>
          <video width='300' height='202' controls>
            <source src={require("./video/Untitled_83_720p.mp4")} type='video/mp4' />
          </video>
        </div> */}


      </div>
    </div>
  );
}
