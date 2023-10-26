
 export const Logo=()=>(<img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSCWdeWtl6cP3iW6zf-r91qeAZOaVZf9sn2A&usqp=CAU' alt='header-logo'/>)


const Header=()=>{
return(<div className='heading'>
<Logo/>
<ul>
<li>About Us</li>
<li>Contact US</li>
<li>Cart</li>
</ul>
</div>
)

}

export default Header

