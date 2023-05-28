import Styles from '../styles/carousel.module.css'
import "../styles/global.css"

const UseOverlay = () => {
  
  
  const OverlayComponent = ({handleCloseOverlay, condition, sourceImage}) => (

    <>
        <div className={`menu ${condition && 'showMenu'}`} onClick={handleCloseOverlay}>
        <img className={`${Styles.overlay__Image}`} src={`./${sourceImage}`} alt={'This is a item image on big screen'}></img>

        </div>
    
    </>
  )


  return [OverlayComponent]
}

export default UseOverlay