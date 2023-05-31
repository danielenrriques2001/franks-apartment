import Styles from '../styles/carousel.module.css'
import "../styles/global.css"

const Modal = ({handleCloseOverlay, condition, sourceImage}) => {
  
  
return ( 
    <>
        <div className={`menu ${condition && 'showMenu'}`} onClick={handleCloseOverlay}>
        <img className={`${Styles.overlay__Image}`} src={`.././${sourceImage}`} alt={'This is a item image on big screen'}></img>

        </div>
    
    </>
  )


}
export default Modal