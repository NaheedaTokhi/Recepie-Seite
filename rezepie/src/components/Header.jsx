import "../styles/Header.css"
import logo from "../assets/logo.avif"
export const Header=()=>{
    return(
        <div className="title">
        <img src={logo} alt="Logo" className="image"/>
        <h1>Recepie Master</h1>
        </div>
    )
}