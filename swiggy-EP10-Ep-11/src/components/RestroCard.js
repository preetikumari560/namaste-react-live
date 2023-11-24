
import { IMG_URL } from "../utils/config"

// using spread operator (RestroCard):
const RestroCard=({name,cloudinaryImageId,cuisines,sla,avgRating,costForTwo})=>{


return(
<div className='w-64 p-2  h-[380px]  '  >

{/* {console.log(cloudinaryImageId)} */}
<img  className="w-[100%] h-[150px] "src={IMG_URL+cloudinaryImageId} alt="not-available"></img>
<h3>{name}</h3>
<p>Price: {costForTwo} </p>

<p>Cuisines : {cuisines.join(" , ")}</p>
<p>Rating : {avgRating}</p>
<p>Delivery Time : {sla.deliveryTime} minute </p>

</div>

)

}

export default RestroCard


//Higher order component:
//step 1:creating HOC
//availableRestroCard() is HOC , which takes a component as an I/p and return a component.
//it's a enhance version of Restrocard component
//HOC is a normal js func:
export const availableRestroCard=(RestroCard) => {
//availableRestroCard returns a componet:
            return (props) => {
           //this component return a peace of jsx
          return  (<div>
            
            {/* {console.log(props)} */}
            <RestroCard  {...props}/>
            <label>🟢</label>
            
           </div>)
            }

}



// another way to get data in props.
// const RestroCard=(props)=>{

// const {name,feeDetails,cloudinaryImageId,cuisines,sla,avgRating}= props.restData.info

// }