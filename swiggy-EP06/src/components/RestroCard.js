import { IMG_URL } from "../utils/config"


// using spread operator (RestroCard):
const RestroCard=({name,feeDetails,cloudinaryImageId,cuisines,sla,avgRating})=>{

return(
<div className='card'  >

{/* {console.log(cloudinaryImageId)} */}
<img src={IMG_URL+cloudinaryImageId} alt="not-available"></img>
<h3>{name}</h3>
<h5>Price: {feeDetails.totalFee} Rs.</h5>
<h5>Cuisines : {cuisines.join(" , ")}</h5>
<h5>Rating : {avgRating}</h5>
<h5>Delivery Time : {sla.deliveryTime} minute </h5>
</div>
)

}

export default RestroCard


