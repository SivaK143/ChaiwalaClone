
import logo from "../Assets/logo.png"
import {BsMouse} from "react-icons/bs"

const Info = () => {
  return (
    <>

    <div className="cursor"></div>
    <a href="/" className="logo">
        <img src={logo} alt="logo" data-cursorpointer={true}/>
    </a>

    <a href="/franchise" className="franchiseBtn" data-cursorpointer={true}>
        GET A FRANCHISE
    </a>

    <BsMouse className="scrollBtn" data-cursorpointer={true} />


    
    
    </>
  )
}

export default Info
