//step-2 HOC
import RestroCard ,{availableRestroCard}from "./RestroCard"
import { useContext, useEffect, useState } from "react";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom"
import { filterAvailable, filterName,filterRating } from "../utils/helper";
import  useResturantCard  from "../utils/useResturantCard";
import useCheckOnline from "../utils/useCheckOnline";

// importing created context data
import userContext from "../utils/userContext";
import Offer from "./Offer";
import Cusines from "./Cusine";






const Body=()=>{

const [searchRestro, setSearchRestro] = useState()
const [filterRestro, setFilterRestro]=useState([])
const [isAvailable, setIsAvailable]=useState(false)

//using context data by using useContext hook and passing userContext variable:
const user = useContext(userContext)
console.log(user.name)

const Restro=useResturantCard(setFilterRestro)

const AvailableReasturantCard= availableRestroCard(RestroCard)

const checkAvailability=()=>{
const filteredAvailable = filterAvailable(filterRestro)
setIsAvailable(true)
setFilterRestro(filteredAvailable)
}


const clearFilter=()=>{
setIsAvailable(false)
setFilterRestro(Restro)
}


const ratingClick =()=>{
    const filteredRating =filterRating(Restro)
    // setIsAvailable(false)
    setFilterRestro(filteredRating)
}

const handleSearch = ()=>{
if(searchRestro)
{
    const filteredData= filterName(searchRestro,Restro)
    // setIsAvailable(false)
    setFilterRestro(filteredData)
}
}

const isInternetOn = useCheckOnline()

if(!isInternetOn)
{
return <h1>You are offline, Please check your internet connection !</h1>
}

console.log("body rendered")

return (
console.log("first render",Restro),
//conditional rendering :
Restro?.length===0?(<Shimmer/>):(<>

<Offer/>
<Cusines/>
<div  className="flex justify-center">

<input  className="m-5 w-64 p-2 focus:outline-none  placeholder:italic placeholder:text-slate-400 text-center text-lg border-b-4 border-indigo-400 " type="text" placeholder=" search restaurant " value={searchRestro}
 onChange={(e)=>{
 const searchValue = e.target.value
 setSearchRestro(searchValue)
if(searchValue)
{
handleSearch()
}
else
{
setFilterRestro(Restro)
}
}}>
</input>

</div>
<div className="flex">
<div className=" ml-5 w-1/6 ">
<button className="bg-indigo-500/30 text-violet-900/75 p-[7px] rounded-sm shadow-lg shadow-blue-400/60 hover:shadow-indigo-500/40 bg-gradient-to-r hover:from-blue-500/40  hover:to-indigo-500/40 w-3/4 m-3 mt-14"  onClick={ratingClick}>Top-Rated Resturant</button> 


<button className="bg-indigo-500/30 text-violet-900/75 p-[7px] rounded-sm shadow-lg shadow-blue-400/60 hover:shadow-indigo-500/40 bg-gradient-to-r hover:from-blue-500/40  hover:to-indigo-500/40 w-3/4 m-3" onClick={checkAvailability} > 🔴 Availability</button>
<button className="bg-indigo-500/30 text-violet-900/75 p-[7px] rounded-sm shadow-lg shadow-blue-400/60 hover:shadow-indigo-500/40 bg-gradient-to-r hover:from-blue-500/40  hover:to-indigo-500/40 w-3/4 m-3"  onClick={clearFilter}>Clear Filter</button>
</div>
<div className="flex flex-wrap my-8 justify-center w-10/12" >


   {filterRestro?.length === 0 ? (
            <h1>No such Restaurant found</h1>
          ) : (
            filterRestro?.map((RestroData) => {
              return (
               <Link className="m-4  border-[1px] bg-stone-100 border-solid border-grey-500  shadow-xl shadow-blue-500/40 hover:shadow-indigo-500/40 " to={"/resturant/"+RestroData.info.id}  key={RestroData.info.id}> 

              { isAvailable?(<AvailableReasturantCard {...RestroData.info}/>):(<RestroCard  {...RestroData.info}  />)}
               </Link>
              );
            })
          )}

</div>
</div>
</>)
)

}

export default Body
