import Rating from '@mui/material/Rating';
import { IMG_URL } from "../utils/config"

// using spread operator (RestroCard):
const RestroCard=({name,cloudinaryImageId,cuisines,sla,avgRating,costForTwo,totalRatingsString})=>{


return(
<div className='w-52 p-2  h-[300px] '  >

{/* {console.log(cloudinaryImageId)} */}
<img  className="w-[100%] h-[140px] "src={IMG_URL+cloudinaryImageId} alt="not-available"></img>
<h3 className='font-semibold mt-1'>{name}</h3>
<div className='flex align-middle'>
<span className=''>{avgRating}</span><Rating className='' name="half-rating-read" defaultValue={avgRating} precision={0.1} readOnly />
<span className=''>({totalRatingsString})</span>
</div>
<div className='flex flex-col mt-2 text-sm'>
<span><label className='font-medium'>Price : </label>{costForTwo} </span>

<span className='whitespace-nowrap overflow-hidden text-ellipses' ><label className='font-medium '>Cuisines :</label> {cuisines.join(" , ")}</span>

<span><label className='font-medium'>Delivery Time : </label>{sla.deliveryTime} minute </span>


</div>
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