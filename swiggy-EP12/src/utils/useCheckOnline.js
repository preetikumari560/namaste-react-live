import { useState,useEffect } from "react";

const useCheckOnline=()=>{
const [isOnline,setIsOnline] =useState(true)

useEffect(()=>{

const handleOnEvent=() => {
  console.log("online");
  setIsOnline(true)
}

const handleOffEvent=() => {
  console.log("offline");
  setIsOnline(false)
}


window.addEventListener("offline", handleOffEvent);

window.addEventListener("online", handleOnEvent);

// for unmounting :
return()=>{

//clearing event:
window.removeEventListener("offline", handleOffEvent);

window.removeEventListener("online", handleOnEvent);
}

},[])


return isOnline
}


export default useCheckOnline