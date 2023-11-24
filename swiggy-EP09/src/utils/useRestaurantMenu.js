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

const menu= await json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards

console.log(menu)

setRestMenu(menu)
setRestroDetails(json?.data?.cards[0]?.card?.card?.info)

}

//sending  updated data
return restMenu
}

export default useResturantMenu