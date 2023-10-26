import RestroCard from "./RestroCard"
import { useEffect, useState } from "react";
import Shimmer from "./ShimmerUI";


const filterName = (searchRestro, Restro)=>{
const data= Restro.filter((data)=>data.info.name.toLowerCase().includes(searchRestro.toLowerCase()))
 return data;
}

const filterRating =(Restro)=>{
const data = Restro.filter((data)=>  data.info.avgRating>4 )
return data
}

// By using spread operator (Body):
const Body=()=>{

//local state variable : superpowerful variable
const [searchRestro, setSearchRestro] = useState()
const [filterRestro, setFilterRestro]=useState([])
const [Restro, setRestro]=useState([])

// Api calling using hook 'useEffect()' and js Fetch function:
useEffect(()=>{
fetchData()

},[])

async function fetchData()
{
      const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.67003492726483&lng=77.11469986756225&page_type=DESKTOP_WEB_LISTING")

      const json = await data.json()
        console.log(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setRestro(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilterRestro(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

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
   else
    {
    setRestro(Restro)
    }
}

//avoid component re-rendering, 
//also called Early Return:
// if(!Restro)
// { 
// return null;
// }

return (
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
                <RestroCard {...RestroData.info} key={RestroData.info.id} />
              );
            })
          )}

</div>
</>)
)

}

export default Body

