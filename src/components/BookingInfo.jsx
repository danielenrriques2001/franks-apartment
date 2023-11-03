import '../styles/bookingInfo.css'
import { Modal } from '@mui/material';


const BookingInfo = ({open, setOpen, content}) => {
  return (
    <Modal 
      open = {open.visible}
      onClose={() => setOpen({visible: false})}

    >
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
    </Modal>
  )
}




export default BookingInfo;