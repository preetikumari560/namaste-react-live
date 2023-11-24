import { IMG_URL } from "../utils/config"


//*a> using spread operator (RestroCard):
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




//! b> another way :
// const RestroCard=(props)=>{
// const {restData}=props  //destructuring

// const {name, imageId,price}=restData?.info  //again destructuring

// return(<div className='card'  >
// {console.log(imageId)}
// <img src={IMG_URL+imageId}></img>
// <h3>{name}</h3>
// <h4>Price: {price} </h4>
// <h5>cuisines</h5>
// <h6>30 minutes</h6>
// </div>
// )
// }



// *props is an js object, similar to a js parameter where all data wrapped inside the object and passed as a argument from functional component to these functional component parameters/props .

//! const RestroCard=(props)=>{

// return(<div className='card'  style={props.style}>
// <img src={props.img}></img>
// <h3>{props.name}</h3>
// <h4>{props.star} star</h4>
// <h5>cuisines</h5>
// <h6>30 minutes</h6>
// </div>
// )
// }


//! destructuring  of props 1st way :
// const RestroCard=(props)=>{

// const {img,name, star,style}=props  //destructuring 
// return(<div className='card'  style={style}>
// <img src={img}></img>
// <h3>{name}</h3>
// <h4>{star} star</h4>
// <h5>cuisines</h5>
// <h6>30 minutes</h6>
// </div>
// )
// }



//! destructuring  of props 2nd way ,directly:
// const RestroCard=({name,img, star,style})=>{
// return(<div className='card'  style={style}>
// <img src={img}></img>
// <h3>{name}</h3>
// <h4>{star} star</h4>
// <h5>cuisines</h5>
// <h6>30 minutes</h6>
// </div>
// )
// }
