import {  useState } from "react"
import { useParams } from "react-router-dom"
import { MENU_IMG_URL } from "../utils/config"
import Shimmer from "./ShimmerUI"
import useResturantMenu from "../utils/useRestaurantMenu"

const ResturantMenu=()=>{
const [restroDetails, setRestroDetails]= useState({})

//dynamic value ,id, extracting from "routing path"(refer index.js) with the help of useParams:
const {id} = useParams()

const restMenu= useResturantMenu(id,setRestroDetails)

// console.log(Object.keys(restMenu).length)
return(Object.keys(restMenu).length===0?(<Shimmer/>):(<>
<h1>{restroDetails?.name}</h1>
<img src={MENU_IMG_URL+restroDetails?.cloudinaryImageId} alt="not-available"></img>

{/* {console.log(restMenu)} */}
<div>
<div className="menuHead">
{restMenu?.map((e, index)=>{
return (
<div key={index}>
{/* {console.log(e)} */}

<div><h2>{e?.card?.card?.title}</h2></div>
<div>
{ e?.card?.card?.itemCards?.map((i, itemIndex)=> {
  return (  <div key={itemIndex}>
                      {console.log(i)}
                    <div className="menuItem">  
                    <h3>{i?.card?.info?.name}</h3>
                      <img src={MENU_IMG_URL+i?.card?.info?.imageId}/>
                      </div>

            </div>
        )})}
</div>    
 </div>   
 )})}
     
</div>
</div>
</>))
}

export default ResturantMenu