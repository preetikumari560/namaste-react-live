import RestroCard from "./RestroCard"
import { useEffect, useState } from "react";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom"

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
//whenever state variable update, react triggers reconciliation cycle(re-renders the component)
const [searchRestro, setSearchRestro] = useState()
const [filterRestro, setFilterRestro]=useState([])
const [Restro, setRestro]=useState([])

// Api calling using hook 'useEffect()' and  Fetch() provided by browser:
useEffect(()=>{
fetchData();

},[])

const fetchData= async()=>
{

      const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.516075917838982&lng=77.20135252922773&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

      const json = await data.json()
      console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      const restroJsonData = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      if(restroJsonData)
      {
         setRestro(restroJsonData)
         setFilterRestro(restroJsonData)
         console.log("fetch called")
      }
      else 
      {
         console.log("Error fetching data:");
      }
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
}

//avoid component re-rendering, 
//also called Early Return:
// if(!Restro)
// { 
// return null;
// }

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

// we can also pass RestroData in this way later we can destructure in RestroCard
  {/* <Link to={"/resturant/"+RestroData.info.id}  key={RestroData.info.id}> <RestroCard restData={RestroData}  /></Link> */}