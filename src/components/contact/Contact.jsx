import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import  {AnimatedLetters}  from '../animatedLetters/AnimatedLetters'
import './contact.scss'
import { MapView } from './MapView'

export const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  
    return () => {
      // Clear the timeout on component unmount or when the effect is re-run
      clearTimeout(timeoutId);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_juybqfr', 'template_epbjs7r', form.current, 'eyQV4IoF7qJM-9Uod')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <section className='section-c'>
      <div className="container contact-page">
        <div className="text-zone">
          <h1 className=' h1-c'>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p className='p-c'>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button cursor-pointer" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>      
      </div>
      <div className=' div-c'>
        <ul>
          <li className=' li-c'>Tomás Gandini</li>
          <li className=' li-c'>Argentina, Buenos Aires</li>
          <li className=' li-c'>tomasgandini11@gmail.com</li>
        </ul>
      </div>
      <MapView></MapView>
      </section>
      <Loader type="pacman" />

    </>
  )
}




