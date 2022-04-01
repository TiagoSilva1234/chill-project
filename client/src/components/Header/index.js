import React from "react";
import './header.scss'
import { Link } from 'react-router-dom'
const Header = () => {
    
    const poxa = ['Home', 'Test','login']


    return (
        <div className="header">
            {poxa.map((e) => e !== "Home" 
            ?
            <Link className="navLinks" to={e}>{e} </Link> 
            :
            <Link className="navLinks" to="/">{e}</Link>)}
        </div>
    )


}

export default Header;