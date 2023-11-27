import { useState} from "react";


import '../styles/hero.css'
import Portrat from "./Portrat"
import BookingInfo from "./BookingInfo";
import Button from "./Button";

const Hero = ({content}) => {


    
    return (
      <div className="hero">
        <div className="hero__content">
          <h1 className="hero__heading" dangerouslySetInnerHTML={{
            __html: content?.title
          }}></h1>
            <Portrat/>

            <Button
              text={content}
              massage={false}
            />
        </div>
      </div>
    );
    }
    
    
    export default Hero;