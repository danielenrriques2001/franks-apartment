import { useState } from 'react'
import UseOverlay from '../../hooks/UseOverlay'
import Styles from '../../styles/carousel.module.css'
import '../../styles/global.css'
import {arrayImages} from '../../data/ImagesSrc'



const Carousel = () => {




  const [ImageSrc, SetImageSrc] = useState('');

  const [Overlay, SetOverlay] = useState(false);

  const [OverlayComponent] = UseOverlay();


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
   
    <div className={`${Styles.media__scroller} ${Styles.snaps__Inline}`}>

      {arrayImages.map((image, key) => (

        <div 
          key={key} 
          className={Styles.media__Element}>
           <img 
              className={`${Styles.media__Image}`} 
              src={`./${image}.webp`} 
              alt={`this is a image from ${image}`} 
              onClick={handleOverlay}
              id={`${image}.webp`}
              >
              
          </img>
        </div>
      ))}

     
       
    </div>
      
      {
        Overlay &&  <OverlayComponent 
        handleCloseOverlay={handleCloseOverlay}
        condition={Overlay}
        sourceImage={ImageSrc}
      />
      }
   


    </div>
  );
};

export default Carousel; 
