import React from 'react';
import './projects.scss'; // Import the Tailwind CSS styles
import image7 from './image7.png'

export const Projects = () => {
  const image = 'https://d33wubrfki0l68.cloudfront.net/65822a376f1cd60085d1a156/screenshot_2023-12-19-23-41-44-0000.png';
  const image1 = 'https://d33wubrfki0l68.cloudfront.net/65a44b57cd15adbee8b17c87/screenshot_2024-01-14-21-00-10-0000.webp';
  const image2 = 'https://d33wubrfki0l68.cloudfront.net/659edf2aee891d0e28763fa5/screenshot_2024-01-10-18-17-18-0000.webp';
  const image3 = 'https://d33wubrfki0l68.cloudfront.net/65a451ef389b9cc3039b52b9/screenshot_2024-01-14-21-28-18-0000.webp';
  const image4 = 'https://d33wubrfki0l68.cloudfront.net/659edcd7a7f2400c640817f8/screenshot_2024-01-10-18-07-22-0000.webp';
  const image5 = 'https://d33wubrfki0l68.cloudfront.net/659f324933609e00a823c58b/screenshot_2024-01-11-00-11-55-0000.webp';
  const image6 = 'https://d33wubrfki0l68.cloudfront.net/659f33af14afdb02b33e9ce8/screenshot_2024-01-11-00-17-53-0000.webp';

  return (
    <>
      <section className='section-p'>
        <div className='div-p'>
          <div>
            <a href="https://sexto-sentido-0.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img className='project-image' src={image} alt="" />
            </a>
          </div>
          <div>
            <a href="https://game-bro.netlify.app" target="_blank" rel="noopener noreferrer">
              <img className='project-image' src={image1} alt="" />
            </a>
          </div>
          <div>
            <a href="https://e-commerce-react-0.netlify.app" target="_blank" rel="noopener noreferrer">
              <img className='project-image' src={image2} alt="" />
            </a>
          </div>
          <div>
            <a href="https://trivia-game-0.netlify.app" target="_blank" rel="noopener noreferrer">
              <img className='project-image' src={image3} alt="" />
            </a>
          </div>
          <div>
            <a href="https://web-react-0.netlify.app" target="_blank" rel="noopener noreferrer">
              <img className='project-image' src={image4} alt="" />
            </a>
          </div>
          <div>
            <a href="https://new-years-eve-0.netlify.app" target="_blank" rel="noopener noreferrer">
              <img className='project-image' src={image5} alt="" />
            </a>
          </div>
          <div>
            <a href="https://to-do-0.netlify.app" target="_blank" rel="noopener noreferrer">
              <img className='project-image' src={image6} alt="" />
            </a>
          </div>
          <div>
            <a href="https://sss-landing-page.netlify.app" target="_blank" rel="noopener noreferrer">
              <img className='project-image' src={image7} alt="" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

