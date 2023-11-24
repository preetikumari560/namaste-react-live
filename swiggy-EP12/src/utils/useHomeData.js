import { useEffect, useState } from "react"
import { RESTRO_URL } from "./config"

const useHomeData=()=>{

const [offer,setOffer]=useState()

useEffect(()=>{

fetchData()

},[])


const fetchData= async ()=>{

const data= await fetch(RESTRO_URL)

const json= await data?.json()

const offerData = json?.data

// console.log("json",offerData)

setOffer(offerData)



}
return offer
}

export default useHomeData