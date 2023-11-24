import { useState,useEffect } from "react";
import {MENU_CARD_URL} from '../utils/config'


const useResturantMenu =(id,setRestroDetails)=>{
const [restMenu, setRestMenu]= useState({})
useEffect(()=>{
getData();
},[])

//API calling
const getData = async()=>{
console.log(id)
const data = await fetch(MENU_CARD_URL+id)

const json= await data.json()

//filtering item-cards:
const menu= await json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(i=>i?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || i?.card?.card?.["@type"]===
"type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")

// console.log(menu)

setRestMenu(menu)
setRestroDetails(json?.data?.cards[0]?.card?.card?.info)

}

//sending  updated data
return restMenu
}

export default useResturantMenu


