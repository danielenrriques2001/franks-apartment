import { useState } from 'react'
import Modal from '../Modal'
import {arrayImages} from '../../data/data'
import LightGallery from 'lightgallery/react';
import { LazyLoadImage } from "react-lazy-load-image-component";


import Styles from '../../styles/carousel.module.css'
import '../../styles/global.css'

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


const Carousel = () => {


  const [ImageSrc, SetImageSrc] = useState('');

  const [Overlay, SetOverlay] = useState(false);

  const onInit = () => {
    console.log('lightGallery has been initialized');
};



  function handleOverlay(event) {

    event.preventDefault();

    SetImageSrc(event?.target?.id)

    SetOverlay(true)  
  };

  function handleCloseOverlay(event) {
   
    SetOverlay(false)


  };







  return (
    <div>
   
    {/* */}

    <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames={`${Styles.media__scroller} ${Styles.snaps__Inline}`}
                
            >         
              {arrayImages.map((image, key) => (
                <a 
                  key={key} 
                  className={Styles.media__Element}
                  href={`../${image}.jpg`}
               
                  >
                  <img 
                      className={`${Styles.media__Image}`} 
                      src={`../${image}.jpg`} 
                      alt={`this is a image from ${image}`} 
                     
                      > 
                  </img>
                </a>

        
                ))}


    </LightGallery>

     



     
       
{/* 
      // <Modal 
        handleCloseOverlay={handleCloseOverlay}
        condition={Overlay}
        sourceImage={ImageSrc}
      />
       */}
   


    </div>
  );
};

export default Carousel; 
