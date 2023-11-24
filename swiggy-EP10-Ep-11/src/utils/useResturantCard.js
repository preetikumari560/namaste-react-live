//custom hooks :just normal js function, i.e a fubction with some logic

import { useState,useEffect } from "react";
import { RESTRO_URL } from "./config";


 const useResturantCard=(setFilterRestro)=>{

const [Restro, setRestro]=useState([])

// Api calling using hook 'useEffect()' and  Fetch() provided by browser:
useEffect(()=>{
fetchData();

},[])

const fetchData= async()=>
{
      const data = await fetch(RESTRO_URL)

      const json = await data.json()
      console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

      const restroJsonData = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants

      if(restroJsonData)
      {
         setRestro(restroJsonData)
         setFilterRestro(restroJsonData)
         console.log("fetch called")
      }
      else 
      {
         console.log("Error fetching data:");
      }
}

return Restro
}

export default useResturantCard