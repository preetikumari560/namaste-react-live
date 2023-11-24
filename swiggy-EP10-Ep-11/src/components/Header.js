
import { Link } from "react-router-dom"
import Logo from "../assets/images/logo.png"
import useCheckOnline from "../utils/useCheckOnline"
import userContext from "../utils/userContext"
import { useContext } from "react"

export const HeaderLogo=()=>(<img className='w-14 m-7 ml-10 border-4 border-solid border-[#E3DFFD]  shadow-lg shadow-blue-400/60 hover:shadow-indigo-500/40 bg-gradient-to-r   border-y-indigo-500/40  hover:from-blue-200/40 hover:to-indigo-900/40'  src={Logo} alt='header-logo'/>)

const Header=()=>{
const onlineStatus= useCheckOnline()
const {name}= useContext(userContext)

return(<div className='flex justify-between shadow-md bg-indigo-50'>
<Link to="/"><HeaderLogo  /></Link>
<ul className='flex items-center text-violet-800/75 font-medium ' >
<li className="pr-7 ">{onlineStatus?"🟢":"🔴"}</li>
<li className="pr-7 hover:text-fuchsia-900/50"><Link to="/about">About Us</Link></li>
<li className="pr-7 hover:text-fuchsia-900/50"><Link to="/contact">Contact US</Link></li>
<li className="pr-7 hover:text-fuchsia-900/50"><Link to="/lazyloading">Cart</Link></li>
<li className="font-bold text-2xl">{name}</li>
</ul>

</div>
)

}

export default Header

