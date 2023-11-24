import { useState } from "react";
import { MENU_IMG_URL } from "../utils/config";

const RestaurantMenusCard=(props)=>{

const i = props.value
const [itemCount, setItemCount]=useState(null)

const cartQuantitySub=()=>{
       const i=itemCount-1
                       if(i>0){
                      setItemCount(i)
                      }
                      else{
                    setItemCount(null)
}
}
const cartQuantityAdd=()=>{
                      const i=itemCount+1              
                      setItemCount(i)
                      }


return(
<>
 {(i?.card?.info?.name && i?.card?.info?.imageId)?(<> <div className="flex justify-between m-11"><div className="flex flex-col w-8/12"> <span className="text-violet-900/75 text-lg">{i?.card?.info?.name}</span>
                    <span>{(i?.card?.info?.itemAttribute?.vegClassifier === "NONVEG")?"🟥":"🟩"}</span>
                   <span> ₹ {(i?.card?.info?.price)?(i?.card?.info?.price/100):(i?.card?.info?.defaultPrice/100)}
 </span>
                    <span className="text-sm text-gray-400">{i?.card?.info?.description}</span>
                    </div>
                    <div className="w-1/5 h-48 flex flex-col ">
                      <img className=" w-full h-40 border-4  border-solid border-grey-500  shadow-xl shadow-blue-500/40 hover:shadow-indigo-500/40 " src={MENU_IMG_URL+i?.card?.info?.imageId} alt="not-available"/>
                      <div className=" text-center  flex justify-center">
                      <button className="text-lg text-center w-1/6 mx-2 my-1 relative bottom-1 border-2 border-solid border-[#E3DFFD]  shadow-lg shadow-blue-400/60 hover:shadow-indigo-500/40 bg-gradient-to-r   border-y-indigo-500/40  hover:from-blue-200/40 hover:to-indigo-900/40 " onClick={cartQuantityAdd}>+</button>
                      <span className="text-lg mx-2 my-1  shadow-indigo-500/40">{itemCount} </span>
                      <button className="my-1  text-lg text-center w-1/6 mx-2 relative bottom-1 border-2 border-solid border-[#E3DFFD]  shadow-lg shadow-blue-400/60 hover:shadow-indigo-500/40 bg-gradient-to-r   border-y-indigo-500/40  hover:from-blue-200/40 hover:to-indigo-900/40 " onClick={cartQuantitySub}>-</button></div></div>
                      </div>
                      <hr className="w-11/12 mx-auto "/>
                   
                      </>):null} 
                      
                        </>

)

}

export default RestaurantMenusCard
