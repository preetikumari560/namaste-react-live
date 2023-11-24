import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Menu_IMG_URL } from "../utils/config"
import Shimmer from "./ShimmerUI"

const ResturantMenu=()=>{
const [restroDetails, setRestroDetails]= useState({})
// const [menuItem, setMenuItem]= useState()
const [restMenu, setRestMenu]= useState({})

//dynamic value ,id, extracting from "routing path"(refer index.js) with the help of useParams:
const {id} = useParams()

useEffect(()=>{
getData();
},[])

const getData = async()=>{
console.log(id)
const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.516075917838982&lng=77.20135252922773&is-seo-homepage-enabled=true&restaurantId="+id)

const json= await data.json()

// console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card.info?.imageId
// )

const menu= await json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards

// const menuItem= await json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards

console.log(menu)

setRestMenu(menu)
setRestroDetails(json?.data?.cards[0]?.card?.card?.info)


}

// console.log(Object.keys(restMenu).length)
return(Object.keys(restMenu).length===0?(<Shimmer/>):(<>
<h1>{restroDetails?.name}</h1>
<img src={Menu_IMG_URL+restroDetails?.cloudinaryImageId} alt="not-available"></img>

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
                      <img src={Menu_IMG_URL+i?.card?.info?.imageId}/>
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