import { useState } from "react";
import { MENU_IMG_URL } from "../utils/config";
import NotAvailable from "../assets/images/foodBox.jpg"
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import Rating from '@mui/material/Rating';
import CartButton from "./CartButton";
import MenuVariation  from "./MenuVariation";


const RestaurantMenusCard=(props)=>{

const i = props.value

const {name,itemAttribute,price,defaultPrice,description,id,imageId}=i?.card?.info

const {rating,ratingCountV2}=i?.card?.info?.ratings?.aggregatedRating

const [itemCount, setItemCount]=useState(null)

const [isClick,setIsClick]=useState(false)

const dispatch= useDispatch()

const cartQuantitySub=(item)=>{
       const i=itemCount-1
                       if(i>0){
                      setItemCount(i)               
                      }
                      else{
                    setItemCount(null)
}
  dispatch(removeItem(item))
}


const cartQuantityAdd=(item)=>{
                      const i=itemCount+1              
                      setItemCount(i),
                      
                      dispatch(addItem(item)),
                      console.log(item)
                      setIsClick(true)
                      }


return(
<>
 {(name)?(<> <div className="flex justify-between m-11"><div className="flex flex-col w-8/12"> <span className="text-violet-900/75 text-lg">{name}</span>
                    <span>{(itemAttribute?.vegClassifier === "NONVEG")?"🟥":"🟩"}</span>
                   <span> ₹ {(price)?(price/100):(defaultPrice/100)}
                    </span>
                 
                    {rating?(<div className=" flex align-middle">
                    <span className=''>{rating}</span>
                    <Rating className='' name="half-rating-read" defaultValue={rating} precision={0.1} readOnly />
                    <span >({ratingCountV2})</span>    
                    </div>  )
                    :null}
                 
                  <span className="text-sm text-gray-400">{description}</span>
                    </div>
                    <div className="w-1/5 h-48 flex flex-col ">
                      <img className=" w-full h-40 border-4  border-solid border-grey-500  shadow-xl shadow-blue-500/40 hover:shadow-indigo-500/40 " src={(imageId)?(MENU_IMG_URL+imageId):NotAvailable} alt="not-available"/>
                      <div className=" text-center  flex justify-center">
                      
                      <CartButton style="my-1  w-1/6 mx-2 relative bottom-1" name="+" onClick={()=>cartQuantityAdd(i?.card?.info)}/>

                     {isClick?(<MenuVariation   value={...i?.card?.info} closeButton={()=>setIsClick(false)} /> ):null}

                      <span className="text-lg mx-2 my-1  shadow-indigo-500/40">{itemCount} </span>

                      <CartButton style="my-1   w-1/6 mx-2 relative bottom-1" name="-" onClick={()=>cartQuantitySub(i?.card?.info.id)}/>
                      </div></div>
                      </div>
                      <hr className="w-11/12 mx-auto "/>
                   
                      </>):null} 

                      
                      
                        </>

)

}

export default RestaurantMenusCard
