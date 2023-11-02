import { useState} from "react";


import '../styles/hero.css'
import Portrat from "./Portrat"
import BookingInfo from "./BookingInfo";

function Hero({content}) {

    const [open, setOpen] = useState(false)

    
    return (
      <div className="hero">
        <div className="hero__content">
          <h1 className="hero__heading" dangerouslySetInnerHTML={{
            __html: content?.title
          }}></h1>
            <Portrat/>
          <button 
            className="button"
            onClick={() => setOpen(true)}
            >
            <a>
              {content.button}
          </a>
          </button>

          <BookingInfo
            open={open}
            setOpen={setOpen}
            content = {content?.bookingInfo}
          />
          
        </div>
      </div>
    );
    }
    
    
    export default Hero;