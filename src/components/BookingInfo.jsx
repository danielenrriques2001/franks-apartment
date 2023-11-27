import '../styles/bookingInfo.css'
import { Modal } from '@mui/material';
import {heroContent} from  '../data/data'

const BookingInfo = ({open, setOpen, content, massage}) => {

  const {de: {bookingInfo: {arte}}} = heroContent

  return (
    <Modal 
      open = {open.visible}
      onClose={() => setOpen({visible: false})}

    >
         { massage === false ? (
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
          ) : (
            <div className='main'>
              <div className='booking__container'>
                <div className='booking__item'>
                  <a href={arte[0].link}>
                    <img src={arte[0].icon}/>
                    <h1>{arte[0].text}</h1>
                  </a>
                 
                </div>

              </div>
            </div>
            
          )
          }
    </Modal>
  )
}




export default BookingInfo;