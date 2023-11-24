import { useState } from "react"

const Section =({title,description})=>{

const [isToggle,setIsToggle]=useState(false)
// const [prevState, setPrevState]=useState(isToggle)


const handleToggle=()=>{

if(!isToggle)
{
    setIsToggle(true)
    
    return
}
else
{
setIsToggle(false)
return
}
}

return(
<div className="m-5 p-2 border border-black">

<button  className="underline cursor-pointer" onClick={handleToggle}>toggle</button>
<h2 className="text-4xl ">{title}</h2>

{isToggle?(<h3>{description}</h3>):null}

</div>
)

}


const Instamart=()=>{

return(
<div>
<h1 className="text-5xl m-5 my-8">Instamart</h1>

{/* //here each section has its own state and props */}
<Section title={"about"} description={"Sed a massa non nulla bibendum feugiat. Integer vel dolor eu neque commodo tincidunt. Duis luctus arcu ut semper feugiat. Morbi pellentesque nisl ac augue egestas, sit amet pretium nulla lacinia. Aliquam lectus sem, pharetra vitae consequat quis, imperdiet sit amet diam. Vivamus cursus rutrum arcu. Phasellus faucibus Morbi pellentesque nisl ac augue egestas, sit amet pretium nulla lacinia. Aliquam lectus sem, pharetra vitae consequat quis, imperdie hendrerit tortor, quis aliquet mauris vulputate ac. Vestibulum faucibus ut felis vitae vestibulum."} />

<Section title={"contact"} description={"Sed a massa non nulla bibendum feugiat. Integer vel dolor eu neque commodo tincidunt. Duis luctus arcu ut semper feugiat. Morbi pellentesque nisl ac a Morbi pellentesque nisl ac augue egestas, sit amet pretium nulla lacinia. Aliquam lectus sem, pharetra vitae consequat quis, imperdieugue egestas, sit amet pretium nulla lacinia. Aliquam lectus sem, pharetra vitae consequat quis, imperdiet sit amet diam. Vivamus cursus rutrum arcu. Phasellus faucibus hendrerit tortor, quis aliquet mauris vulputate ac. Vestibulum faucibus ut felis vitae vestibulum."} />

<Section title={"career"} description={"Sed a massa non nulla bibendum feugiat. Integer vel dolor eu neque commodo tincidunt. Duis luctus arcu ut semper feugiat. Morbi pellentesque nisl ac augue egestas, sit amet pretium nulla lacinia. Aliquam lectus sem, pharetra Morbi pellentesque nisl ac augue egestas, sit amet pretium nulla lacinia. Aliquam lectus sem, pharetra vitae consequat quis, imperdie vitae consequat quis, imperdiet sit amet diam. Vivamus cursus rutrum arcu. Phasellus faucibus hendrerit tortor, quis aliquet mauris vulputate ac. Vestibulum faucibus ut felis vitae vestibulum. Duis ut elit rhoncus, tristique purus at, posuere elit. Mauris ornare tortor ligula"} />

</div>
)
}


export default Instamart