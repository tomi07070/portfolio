import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AnimatedLetters } from '../animatedLetters/AnimatedLetters';
import image1 from './images/html-5.png';
import image2 from './images/css-3.png';
import image3 from './images/js.png';
import image4 from './images/react.png'
import image5 from './images/tailwind.png'
import image6 from './images/docusaurus.png'
import image7 from './images/git.png'
import image8 from './images/boots.png'
import image9 from './images/vscode.png'
import Loader from 'react-loaders';

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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
  };

  return (
    <>
      <div className='absolute top-10 left-[200px]'>
        <h1 className={`text-white text-[50px] ${letterClass}`}>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['M','y','', 'S','k','i','l','l','s']}
            idx={15}
          />
        </h1>
        <div className='w-[500px] mb-[50px] mt[30px]'>
          <p className={`text-white text-[20px] ${letterClass}`}>
            A skilled frontend developer is adept at crafting visually appealing and interactive web interfaces.
             Strong soft skills, including effective communication and collaboration, complement technical expertise,
              while continuous learning and a user-centric mindset drive the creation of successful web applications.</p>
        </div>
        <div className='w-[500px]'>
          <p className={`text-white text-[20px] ${letterClass}`}>
          I am proficient in <span className='text-[#ffd700]'>HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap, Docusaurus, Git, and VS Code</span>. I am also eager to learn additional technologies as needed.
          </p>
        </div>
      </div>
      <div className='absolute top-[200px] left-[900px] w-[400px]'>
        <Slider {...sliderSettings}>
          <div className='ml-20'>
            <img src={image1} alt="HTML5" />
          </div>
          <div className='ml-20'>
            <img src={image2} alt="CSS3" />
          </div>
          <div className='ml-20'>
            <img src={image3} alt="JavaScript" />
          </div>
          <div className='ml-20'>
            <img src={image4} alt="React" />
          </div>
          <div className='ml-20'>
            <img src={image5} alt="JavaScript" />
          </div>
          <div className='ml-20'>
            <img src={image6} alt="JavaScript" />
          </div>
          <div className='ml-20'>
            <img src={image7} alt="JavaScript" />
          </div>
          <div className='ml-20'>
            <img src={image8} alt="JavaScript" />
          </div>
          <div className='ml-20'>
            <img src={image9} alt="JavaScript" />
          </div>
        </Slider>
      </div>
      <div className='absolute top-10 left-[200px]'>
      </div>
      <Loader type="pacman" />
    </>
  );
};






