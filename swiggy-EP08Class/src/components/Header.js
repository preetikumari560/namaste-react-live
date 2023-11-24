// import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "../assets/images/logo.png"

export const HeaderLogo=()=>(<img className='logo' src={Logo} alt='header-logo'/>)

const Header=()=>{
// console.log("header render")
// const [isLoggedin ,setIsLoggedIn]= useState(false)
return(<div className='heading'>
<HeaderLogo/>
<ul>
<li><Link to="/about">About Us</Link></li>
<li><Link to="/contact">Contact US</Link></li>
<li><Link to="/">Cart</Link></li>
</ul>

{/* {!isLoggedin?(<button onClick={()=>{ setIsLoggedIn(true)}}>Login</button>):(<button onClick={()=>{ setIsLoggedIn(false)}}>Logout</button>)} */}
</div>
)

}

export default Header

