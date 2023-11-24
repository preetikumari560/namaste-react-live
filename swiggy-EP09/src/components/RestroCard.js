
import { IMG_URL } from "../utils/config"

// using spread operator (RestroCard):
const RestroCard=({name,feeDetails,cloudinaryImageId,cuisines,sla,avgRating})=>{
return(
<div className='card'  >

{/* {console.log(cloudinaryImageId)} */}
<img src={IMG_URL+cloudinaryImageId} alt="not-available"></img>
<h3>{name}</h3>
<p>Price: {feeDetails.totalFee} Rs.</p>
<p>Cuisines : {cuisines.join(" , ")}</p>
<p>Rating : {avgRating}</p>
<p>Delivery Time : {sla.deliveryTime} minute </p>

</div>

)

}

export default RestroCard


// another way to get data in props.
// const RestroCard=(props)=>{

// const {name,feeDetails,cloudinaryImageId,cuisines,sla,avgRating}= props.restData.info

// }