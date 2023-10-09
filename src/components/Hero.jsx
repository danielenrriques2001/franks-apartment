import { useState, useEffect, useRef } from "react";
import '../styles/hero.css'

const images = [
    '/franks-1.jpg',
    '/franks-16.jpg',
    '/franks-11.jpg',
    '/franks-7.jpg',

];


function HeroTwo({content}) {
    const slidePresentationTime = 6000 // after how many ms slide will change - now 3s / 3000ms
    const [currentSlide, setCurrentSlide] = useState(0) // value and function to set currrent slide index
    let sliderInterval = useRef() // interval ref
    useEffect(() => {
       
      sliderInterval = setInterval(() => {
          setCurrentSlide((currentSlide + 1) % images.length); // change current slide to next slide after 'slidePresentationTime'
        }, slidePresentationTime);
    
        // cleanup interval when your component will unmount
        return () => {
          clearInterval(sliderInterval)
        }
    })
    
    return (
      <div className="hero">
        <div className="hero__content">
          <h1 className="hero__heading" dangerouslySetInnerHTML={{
            __html: content?.title
          }}></h1>
          <div className="image__container">
            {images.map((image, index) => (
              <img
                id={index}
                key={index}
                className={index === currentSlide ? 'image active' : 'image'}
                src={image}
                style={{
                  zIndex: `-${index + 1}`
                }}
              />
            ))}
          </div>

          <button className="button">
            <a href={content.linkButton}>
              {content.button}
          </a>
          </button>
        </div>
      </div>
    );
    }
    
    
    export default HeroTwo;