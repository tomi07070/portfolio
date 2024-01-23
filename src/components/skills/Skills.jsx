import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AnimatedLetters } from '../animatedLetters/AnimatedLetters';
import image1 from './images/html-5.png';
import image2 from './images/css-3.png';
import image3 from './images/js.png';
import image4 from './images/react.png';
import image5 from './images/tailwind.png';
import image6 from './images/docusaurus.png';
import image7 from './images/git.png';
import image8 from './images/boots.png';
import image9 from './images/vscode.png';
import Loader from 'react-loaders';
import './skills.scss'; // Import the SCSS styles

export const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className='absolute-container-s'>
        <h1 className={`heading-s ${letterClass}`}>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['M','y','', 'S','k','i','l','l','s']}
            idx={15}
          />
        </h1>
        <div className='description-s'>
          <p className={` text-white ${letterClass}`}>
            A skilled frontend developer is adept at crafting visually appealing and interactive web interfaces.
             Strong soft skills, including effective communication and collaboration, complement technical expertise,
              while continuous learning and a user-centric mindset drive the creation of successful web applications.</p>
        </div>
        <div className='description-s'>
          <p className={`  text-white ${letterClass}`}>
          I am proficient in <span className='text-[#ffd700]'>HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap, Docusaurus, Git, and VS Code</span>. I am also eager to learn additional technologies as needed.
          </p>
        </div>
      </div>
      <div className='slider-container'>
        <Slider {...sliderSettings}>
          <div className='slick-slide'>
            <img className='img-s' src={image1} alt="HTML5" />
          </div>
          <div className='slick-slide'>
            <img className='img-s' src={image2} alt="CSS3" />
          </div>
          <div className='slick-slide'>
            <img className='img-s' src={image3} alt="JavaScript" />
          </div>
          <div className='slick-slide'>
            <img className='img-s' src={image4} alt="React" />
          </div>
          <div className='slick-slide'>
            <img className='img-s' src={image5} alt="Tailwind CSS" />
          </div>
          <div className='slick-slide'>
            <img className='img-s' src={image6} alt="Docusaurus" />
          </div>
          <div className='slick-slide'>
            <img className='img-s' src={image7} alt="Git" />
          </div>
          <div className='slick-slide'>
            <img className='img-s' src={image8} alt="Bootstrap" />
          </div>
          <div>
            <img className='img-s' src={image9} alt="VS Code" />
          </div>
        </Slider>
      </div>
      
      <Loader type="pacman" />
    </>
  );
};







