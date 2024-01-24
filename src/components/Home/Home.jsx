import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Loader from 'react-loaders';
import { AnimatedLetters } from '../animatedLetters/AnimatedLetters';
import image from './image.webp';
import './index.scss';
import 'react-loaders';
import 'loaders.css/loaders.css';

export const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  const nameArray = ['', 'T', 'o', 'm', 'á', 's'];
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const imageTimeoutId = setTimeout(() => {
      setImageLoaded(true);
      setLoading(false);
    }, 4000);

    // Clear the timeout if the component unmounts before the letter animation finishes
    return () => clearTimeout(imageTimeoutId);
  }, [letterClass]);

  return (
    <div className="home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>

          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>

        <h2>Front End Developer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>

      <CSSTransition
        in={imageLoaded}
        timeout={1000} // Duración de la transición en milisegundos
        classNames="image-fade"
        unmountOnExit
      >
        <div className=' img-div'>
          <img
            className="img"
            src={image}
            alt=""
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </CSSTransition>
      
      {loading && <Loader type='pacman' />}
    </div>
  );
};










