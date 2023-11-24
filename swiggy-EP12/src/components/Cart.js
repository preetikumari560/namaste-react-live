import { useSelector } from "react-redux/es/hooks/useSelector"
import CartButton from "./CartButton"
import { useDispatch } from "react-redux"
import { removeItem } from "../utils/cartSlice"

const Cart = ()=>{

const dispatch=useDispatch()
const cartItem= useSelector(store=>store.cart.items)
const cartQuantitySub=(item)=>{
   
  dispatch(removeItem(item))
}

return(
<>
{cartItem.map((i,index) =>  (<>
<h2>{i.name}</h2>
<CartButton style="my-1   w-1/6 mx-2 relative bottom-1" name="-" onClick={()=>cartQuantitySub(i.id)}/>
</>)
)}


</>

)
}

export default Cart