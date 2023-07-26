import { useState } from 'react'
import {arrayImages} from '../../data/data'


import Styles from '../../styles/carousel.module.css'

import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


const Carousel = () => {

  return (
    
    
    <div>
   
    <LightGallery
            
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

     
    </div>
  );
};

export default Carousel; 
