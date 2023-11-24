import { useState } from "react"
import RestaurantMenusCard from "./RestaurantMenusCard"

const RestaurantCategories=(props)=>{

const e= props.value



/*

controlled by parent:
lifting state up:

const showList=props.state
const clickHandler=()=>{

//   setShowIndex(e?.card?.card?.title)

    props.setShowIndex(); 
  }

*/


    //controlled by child itself:
const [showList,setShowList]=useState(false)

  const clickHandler=()=>{
//   toggle feature
  setShowList(!showList)
  }



return(
<>

{(e?.card?.card?.itemCards?.length>0)?
(

<div className="shadow-md bg-gray-100/60 w-3/4 mx-auto  shadow-blue-500/40 hover:shadow-indigo-500/40">
<div className="flex justify-between mx-11 my-10 cursor-pointer " onClick={clickHandler}>
<h2 className=" text-2xl my-3 " >{(e?.card?.card?.title+" :")} ({e?.card?.card?.itemCards?.length}) </h2>
<span className="text-2xl my-3 shadow-lg shadow-gray-400/70 hover:shadow-indigo-500/40 bg-gradient-to-r    hover:from-blue-200/40 hover:to-indigo-900/40">🔰</span>
  
</div>

{ e?.card?.card?.itemCards?.map((i, itemIndex)=> {
  return (  <div  key={itemIndex}>
                      {/* {console.log(itemIndex,i)} */}
                   {/* {console.log("check",e?.card?.card?.itemCards)} */}
            
        {showList &&<RestaurantMenusCard  value={ i} />}
                         
            </div>
        )})}

 </div> 
 
 ) :null }

  
</>

)

}

export default RestaurantCategories