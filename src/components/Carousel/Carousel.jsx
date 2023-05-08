import React, { useState } from 'react'
import Styles from './Carousel.module.css'
const Carousel = () => {

  const arrayImages = ['franks-1', 'franks-2', 'franks-3', 'franks-4', 'franks-5', 'franks-6', 'franks-7', 'franks-8', 'franks-9', 'franks-10'];

  const [ImageSrc, SetImageSrc] = useState('');

  const [Overlay, SetOverlay] = useState(false);


  const handleOverlay = (event) => {
    SetImageSrc(event.currentTarget.alt)
    SetOverlay(true)
  };

  const handleCloseOverlay = (event) => {
   
    SetOverlay(false)

    setTimeout(() => {
        SetImageSrc('')
    }, 500);
  };

  return (
    <>
   
    <div className={`${Styles.mediaScroller} ${Styles.snapsInline}`}>
      {arrayImages.map((image, key) => (
        <div key={key} className={Styles.mediaElement} >
           <img className={Styles.mediaImage} src={'./' + image + '.webp'} alt={image + '.webp'} onClick={(e) => {handleOverlay(e)}}></img>
        </div>
      ))}

       <div className={`menu ${Overlay && 'showMenu'}`}>
          <img className={Styles.OverlayImage} src={'./' + ImageSrc} alt={'This is a item image on big screen'}></img>
          <button onClick={handleCloseOverlay} className='button'>X</button>
       </div>
       
    </div>


    </>
  );
};

export default Carousel; 
