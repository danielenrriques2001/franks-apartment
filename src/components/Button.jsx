import React, { useState } from 'react'
import BookingInfo from './BookingInfo'
function Button({text}) {

    const [open, setOpen] = useState({visible: false})

  return (
    <>
            <button 
                className="button"
                onClick={() => setOpen({visible: true})}
            >
            <a>
                {text.button}
            </a>
            </button>

          <BookingInfo
            open={open}
            setOpen={setOpen}
            content = {text?.bookingInfo}
          />
    </>
  )
}

export default Button