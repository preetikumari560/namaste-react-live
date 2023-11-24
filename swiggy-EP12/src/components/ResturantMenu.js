import {  useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { MENU_IMG_URL } from "../utils/config"
import ShimmerMenu from "./ShimmerMenu"
import useResturantMenu from "../utils/useRestaurantMenu"
import { nonVegFilter ,vegFilter,searchMenuHandler} from "../utils/helper"
import RestaurantCategories from "./RestaurantCategories"


  const ResturantMenu=()=>{
  const [restroDetails, setRestroDetails]= useState({})


  const [isNonVegClicked, setIsNonVegClicked]= useState(false)

  const [itemsToRender,setItemToRender]=useState([])
  const [isVegClicked, setIsVegClicked]= useState(false)

  const [showIndex,setShowIndex]=useState(null)
  const [toggle,setToggle]=useState(false)

  const [menuSearch,setMenuSearch]=useState()


//dynamic value ,id, extracting from "routing path"(refer index.js) with the help of useParams:
const {id} = useParams()

const restMenu= useResturantMenu(id,setRestroDetails)

const searchMenuHandle=(e)=>{
    const search = e.target.value
    setMenuSearch(search)
    if(search)
    {
    searchMenuHandler(restMenu,setItemToRender,menuSearch)
    }
    else
    {
      setItemToRender(restMenu)
    }
}

const nonfilter=()=>{
nonVegFilter(restMenu,setItemToRender)

setIsNonVegClicked(!isNonVegClicked)
setIsVegClicked(false)
}

const veggieFilter=()=>{
vegFilter(restMenu,setItemToRender) 

setIsVegClicked(!isVegClicked)

setIsNonVegClicked(false)
}

return(

Object.keys(restMenu).length===0?(<ShimmerMenu/>):(

<div className="flex ">

<div className="w-1/4 sticky ">
<input className="sticky top-4 mx-11 my-3 w-3/4 p-2 focus:outline-none  placeholder:italic placeholder:text-slate-400 text-center text-lg border-b-4 border-indigo-400 " type="text" placeholder="search food " value={menuSearch} onChange={
searchMenuHandle
}/>
<button className="sticky top-28 bg-indigo-500/30  w-32 m-11 text-violet-900/75 p-[7px] rounded-sm shadow-lg shadow-blue-400/60 hover:shadow-indigo-500/40 bg-gradient-to-r hover:from-blue-500/40  hover:to-indigo-500/40  " onClick={veggieFilter}>🟢 Veg</button>
<button className="sticky top-28 bg-indigo-500/30 w-32 my-11 text-violet-900/75 p-[7px] rounded-sm shadow-lg shadow-blue-400/60 hover:shadow-indigo-500/40 bg-gradient-to-r hover:from-blue-500/40  hover:to-indigo-500/40  " onClick={nonfilter}>🔴 NonVeg</button>
<h1 className="text-2xl mx-11 sticky top-48  text-center">{restroDetails?.name}</h1>
<img className="sticky top-72 w-4/5 h-52 m-11  border-8 border-solid border-grey-500  shadow-xl shadow-blue-500/40 hover:shadow-indigo-500/40 " src={MENU_IMG_URL+restroDetails?.cloudinaryImageId} alt="not-available"></img>
<h2 className="text-xl mx-11">Cuisines : {restroDetails?.cuisines?.join(" , ")}</h2>



</div>


<div className="w-3/4">

{((isNonVegClicked||isVegClicked||menuSearch)?itemsToRender:restMenu).map((e, index)=>
{
return (
<>

  <RestaurantCategories   key={e.card.card.title}  value={e}  state={index===showIndex?toggle:false}  setShowIndex={() => setShowIndex( prevIndex => {
        setToggle(!toggle);
        return index;
      })}/>

    {/* <RestaurantCategories   key={e.card.card.title}  value={e} indexValue={setShowIndex} state={e.card.card.title===showIndex?true:false} /> */}
</>
 )})}
 </div>

</div>

))
}

export default ResturantMenu