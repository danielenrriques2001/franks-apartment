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
          <div className="hero-container">


            <div className="hero__container">
            <h1 className="heading__hero"  dangerouslySetInnerHTML={{__html: content.title}}></h1>
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
            <a target="_blank" href="https://www.airbnb.de/rooms/267951?adults=1&children=0&enable_m3_private_room=true&infants=0&pets=0&check_in=2023-07-30&check_out=2023-08-04&federated_search_id=ef7ac761-8ee3-437d-ba0e-02b9eaada7c8&source_impression_id=p3_1683204831_lmxtMCzJF6dLWSdK">{content.button}</a>
          </button>

            </div>
          </div>
        </div>
      );
    }
    
    
    export default HeroTwo;