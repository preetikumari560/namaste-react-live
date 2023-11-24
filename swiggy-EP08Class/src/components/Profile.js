import { useEffect } from "react"

const Profile =()=>{

useEffect(()=>{

 const timer= setInterval(()=>{console.log("profile compDidMount")},1000)

//this return use for unmounting the func. component while changing page(precisely component as comp gets change in the same page) 
 return()=>{
        //before unmounting it's good to clear unnecessary thing which could make app slower and unscalable
        clearInterval(timer)
        console.log("unmounting functional comp")
 }

},[])


return(
<>
<h1>Functional component</h1>

{console.log("functional profile run")}
</>
)
}

export default Profile