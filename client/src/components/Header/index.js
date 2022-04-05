import React,{useContext} from "react";
import './header.scss'
import { Link } from 'react-router-dom'
import UserContext  from '../../components/Context/Context.js'
const Header = () => {

    const poxa = ['Home', 'Gallery','About','Contact']
    const Register =['Register','Login']
    const {logged, setLogged} = useContext(UserContext)

    return (
        <>
        {!logged ?
        <div className="header">
            <div className="firstSection">
                
            {poxa.map((e,i) => e !== "Home" 
            ?
            <Link key={e+i} className="navLinks" to="/Register">{e} </Link> 
            :
            <Link key={e+i} className="navLinks" to="/Register">{e}</Link>)}
            </div>
            <div className="secondSection">
            
             {Register.map((e,i) => e !== "Home" 
            ?
            <Link key={e+i} className="JoinButtons" to={e}>{e} </Link> 
            :
            <Link key={e+i} className="JoinButtons" to="/">{e}</Link>)}
            </div>
        </div>:
         <div className="header">
         <div className="firstSection">
             
         {poxa.map((e,i) => e !== "Home" 
         ?
         <Link key={e+i} className="navLinks" to={e}>{e} </Link> 
         :
         <Link key={e+i} className="navLinks" to="/">{e}</Link>)}
         </div>
         <div className="secondSection">
         
          {Register.map((e,i) => e !== "Home" 
         ?
         <Link key={e+i} className="JoinButtons" to={e}>{e} </Link> 
         :
         <Link key={e+i} className="JoinButtons" to="/">{e}</Link>)}
         </div>
     </div>
}
        </>
    )


}

export default Header;