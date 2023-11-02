import React from 'react'
import Rodal from "rodal";

import '../styles/bookingInfo.css'
import 'rodal/lib/rodal.css';





function BookingInfo({open, setOpen, content}) {
  return (
    <Rodal 
        className='rodal'
        height={600} 
        width={700}
        visible={open} 
        onClose={() => setOpen(!open)}>
          <div className='main'>
            <h1>{content?.heading}</h1>
            <h2>{content?.secondHeading}</h2>
            <div className='booking__container'>
                {
                    content?.arte.map(way => (
                        <div key={way?.text} className='booking__item'>
                            <img src={way?.icon}/>
                            <a href={way?.link}>
                              <h3>{way?.text}</h3>
                            </a>
                            <p>{way?.description}</p>
                        </div>
                    ))
                }
            </div>

          </div>
    </Rodal>
  )
}




export default BookingInfo