import RestroCard from "./RestroCard"
import { useEffect, useState } from "react";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom"
import { filterName,filterRating } from "../utils/helper";
import  useResturantCard  from "../utils/useResturantCard";
import useCheckOnline from "../utils/useCheckOnline";


const Body=()=>{

//local state variable : superpowerful variable
//whenever state variable update, react triggers reconciliation cycle(re-renders the component)
const [searchRestro, setSearchRestro] = useState()
const [filterRestro, setFilterRestro]=useState([])


const Restro=useResturantCard(setFilterRestro)


const ratingClick =()=>{
    const filteredRating =filterRating(Restro)
    setFilterRestro(filteredRating)
}

const handleSearch = ()=>{
if(searchRestro)
{
    const filteredData= filterName(searchRestro,Restro)

    setFilterRestro(filteredData)
}
}

const isInternetOn = useCheckOnline()

if(!isInternetOn)
{
return <h1>🔴🔴🔴you are offline</h1>
}

console.log("body rendered")
return (
console.log("first render",Restro),
//conditional rendering :
Restro?.length===0?(<Shimmer/>):(<>
<div className="searchBar">
<input className="search-input" type="text" placeholder="search" value={searchRestro}
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
{/* <button  className="search-btn" type="submit" onClick={handleSearch}>submit</button> */}
</div>
<div className="top-rated"><button onClick={ratingClick}>Top-Rated Resturant</button> 
</div>
<div className="cardBody">


   {filterRestro?.length === 0 ? (
            <h1>No such Restaurant found</h1>
          ) : (
            filterRestro?.map((RestroData) => {
              return (
               <Link to={"/resturant/"+RestroData.info.id}  key={RestroData.info.id}> <RestroCard {...RestroData.info}  /></Link>
              );
            })
          )}

</div>
</>)
)

}

export default Body
