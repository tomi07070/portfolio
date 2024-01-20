import React from 'react'

export const Proyects = () => {
     const image = 'https://d33wubrfki0l68.cloudfront.net/65822a376f1cd60085d1a156/screenshot_2023-12-19-23-41-44-0000.png';
     const image1 = 'https://d33wubrfki0l68.cloudfront.net/65a44b57cd15adbee8b17c87/screenshot_2024-01-14-21-00-10-0000.webp';
     const image2 = 'https://d33wubrfki0l68.cloudfront.net/659edf2aee891d0e28763fa5/screenshot_2024-01-10-18-17-18-0000.webp';
     const image3 = 'https://d33wubrfki0l68.cloudfront.net/65a451ef389b9cc3039b52b9/screenshot_2024-01-14-21-28-18-0000.webp';
     const image4 = 'https://d33wubrfki0l68.cloudfront.net/659edcd7a7f2400c640817f8/screenshot_2024-01-10-18-07-22-0000.webp';
     const image5 = 'https://d33wubrfki0l68.cloudfront.net/659f324933609e00a823c58b/screenshot_2024-01-11-00-11-55-0000.webp;';
     const image6 = 'https://d33wubrfki0l68.cloudfront.net/659f33af14afdb02b33e9ce8/screenshot_2024-01-11-00-17-53-0000.webp';
     const image7 = 'https://d33wubrfki0l68.cloudfront.net/65a7d2351e24200b0356d51a/screenshot_2024-01-17-13-12-23-0000.webp';
  
  
  return (
    <>
    <section className='absolute top-0 left-[80px]'>
    <div className='grid grid-cols-4'>
      
      <div>
        <img className='w-[500px] h-[344px] opacity-40 hover:opacity-100' src={image} alt="" />
        <a href="https://sexto-sentido-0.netlify.app/" target="_blank" rel="noopener noreferrer">
          <button className='boto1 text-white absolute top-1 left-[300px] text-[30px] opacity-50 hover:opacity-100 animate-bounce'>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
          </a>
      </div>
      <div>
      <img className='w-[500px] h-[344px] opacity-40 hover:opacity-100' src={image1} alt="" />
      <a href="https://game-bro.netlify.app" target="_blank" rel="noopener noreferrer">
          <button className='boton2 text-white absolute top-1 left-[680px] text-[30px] opacity-50 hover:opacity-100 animate-bounce'>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
      </a>
      </div>
      <div>
        <img className='w-[500px] h-[344px] opacity-40 hover:opacity-100' src={image2} alt="" />
        <a href="https://e-commerce-react-0.netlify.app" target="_blank" rel="noopener noreferrer">
            <button className='boton3 text-white absolute top-1 left-[1000px] text-[30px] opacity-50 hover:opacity-100 animate-bounce'>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
        </a>
      </div>
      <div>
        <img className='w-[500px] h-[344px] opacity-40 hover:opacity-100' src={image3} alt="" />
        <a href="https://trivia-game-0.netlify.app" target="_blank" rel="noopener noreferrer">
            <button className='boton4 text-white absolute top-1 left-[1400px] text-[30px] opacity-50 hover:opacity-100 animate-bounce'>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
        </a>
      </div>
      <div>
        <img className='w-[500px] h-[344px] opacity-40 hover:opacity-100' src={image4} alt="" />
        <a href="https://web-react-0.netlify.app" target="_blank" rel="noopener noreferrer">
            <button className='boton5 text-white absolute top-[360px] left-[300px] text-[30px] opacity-50 hover:opacity-100 animate-bounce'>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
        </a>
      </div>
      <div>
        <img className='w-[500px] h-[344px] opacity-40 hover:opacity-100' src={image5} alt="" />
        <a href="https://new-years-eve-0.netlify.app" target="_blank" rel="noopener noreferrer">
            <button className='boton6 text-white absolute top-[360px] left-[680px] text-[30px] opacity-50 hover:opacity-100 animate-bounce'>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
        </a>
      </div>
      <div>
        <img className='w-[500px] h-[344px] opacity-40 hover:opacity-100' src={image6} alt="" />
        <a href="https://to-do-0.netlify.app" target="_blank" rel="noopener noreferrer">
            <button className='boton7 text-white absolute top-[360px] left-[1000px] text-[30px] opacity-50 hover:opacity-100 animate-bounce'>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
        </a>
      </div>
      <div>
      <img className='w-[500px] h-[344px] opacity-40 hover:opacity-100' src={image7} alt="" />
      <a href="https://currency-converter-0.netlify.app" target="_blank" rel="noopener noreferrer">
            <button className='boton8 text-white absolute top-[360px] left-[1400px] text-[30px] opacity-50 hover:opacity-100 animate-bounce'>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
        </a>
      </div>
    </div>
    </section>
    </>
  )
}
