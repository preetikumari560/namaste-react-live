import {  useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { MENU_IMG_URL } from "../utils/config"
import Shimmer from "./ShimmerUI"
import useResturantMenu from "../utils/useRestaurantMenu"
import { nonVegFilter ,vegFilter} from "../utils/helper"
import RestaurantCategories from "./RestaurantCategories"


  const ResturantMenu=()=>{
  const [restroDetails, setRestroDetails]= useState({})


  const [isNonVegClicked, setIsNonVegClicked]= useState(false)

  const [itemsToRender,setItemToRender]=useState([])
  const [isVegClicked, setIsVegClicked]= useState(false)

  const [showIndex,setShowIndex]=useState(null)
  const [toggle,setToggle]=useState(false)


//dynamic value ,id, extracting from "routing path"(refer index.js) with the help of useParams:
const {id} = useParams()

const restMenu= useResturantMenu(id,setRestroDetails)

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
  // console.log("item to render", itemsToRender)
  // console.log("restmenu",restMenu)

// console.log(Object.keys(restMenu).length)
return(

Object.keys(restMenu).length===0?(<Shimmer/>):(

<>
<div className="w-11/12 m-auto">
<button className="bg-indigo-500/30 w-28  m-11 text-violet-900/75 p-[7px] rounded-sm shadow-lg shadow-blue-400/60 hover:shadow-indigo-500/40 bg-gradient-to-r hover:from-blue-500/40  hover:to-indigo-500/40  " onClick={veggieFilter}>🟢 Veg</button>
<button className="bg-indigo-500/30 w-28 my-11 text-violet-900/75 p-[7px] rounded-sm shadow-lg shadow-blue-400/60 hover:shadow-indigo-500/40 bg-gradient-to-r hover:from-blue-500/40  hover:to-indigo-500/40  " onClick={nonfilter}>🔴 NonVeg</button>
<h1 className="text-3xl mx-11">{restroDetails?.name}</h1>
<img className="w-1/5 h-52 m-11  border-4 border-solid border-grey-500  shadow-xl shadow-blue-500/40 hover:shadow-indigo-500/40 " src={MENU_IMG_URL+restroDetails?.cloudinaryImageId} alt="not-available"></img></div>


{((isNonVegClicked||isVegClicked)?itemsToRender:restMenu).map((e, index)=>
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

</>

))
}

export default ResturantMenu