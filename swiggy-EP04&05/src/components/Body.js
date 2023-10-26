import RestroCard from "./RestroCard"
import { swiggyData,restroDetails, styling } from "../utils/config"
import { useState } from "react";



const filterName = (searchRestro, Restro)=>{
const data= Restro.filter((data)=>data.info.name.toLowerCase().includes(searchRestro.toLowerCase()))
 return data;
}

const filterRating =(Restro)=>{
const data = Restro.filter((data)=>  data.info.avgRating>4 )
return data
}



//*a> using spread operator (Body):
const Body=()=>{


// const a="hello";  // normal js function

//local state variable : superpowerful variable
const [searchRestro, setSearchRestro] = useState()

const [Restro, setRestro]=useState(swiggyData)

const ratingClick =()=>{
const filteredRating =filterRating(Restro)
setRestro(filteredRating)

}

const handleSearch = ()=>{

if(searchRestro)
{
const filteredData= filterName(searchRestro,Restro)
setRestro(filteredData)
}
else
{
setRestro(swiggyData)
}
}

return (<>
<div className="searchBar">
{/* <h2>{searchRestro}</h2> */}
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
setRestro(swiggyData)
}
}}>
</input>
{/* <button  className="search-btn" type="submit" onClick={handleSearch}>submit</button> */}
</div>
<div className="top-rated"><button onClick={ratingClick}>Top-Rated Resturant</button> 
</div>
<div className="cardBody">
{Restro.map((RestroData)=>{
return(
<RestroCard {...RestroData.info}  key={RestroData.info.id} />
)
{/* spread operator: {...RestroData.info} */}
})
}

</div>
</>)

}

export default Body


//! b> another way :
// const Body=()=>{
// return (<>
// {console.log(swiggyData[0].info.imageId)}
// {/* <RestroCard  restData={swiggyData[0]}/>
// <RestroCard restData={swiggyData[1]} />
// <RestroCard restData={swiggyData[2]}/> */}

// {swiggyData.map((data)=>{
// return(
// <RestroCard restData={data}  key={data.info.id} />)
// })
// }
// </>)

// }



//! c > another way :
// const Body=()=>{

// return(

 //! inline css: 
/*  inline css: <div className="cardBody"  style={{backgroundColor:"#f0f0f0"}}>*/


// <div className="cardBody"  >
//! <RestroCard style={{backgroundColor:"#d4cfcf"}}   name={restroDetails[0].name} img={restroDetails[0].img} star={restroDetails[0].star}  />

//! <RestroCard name={restroDetails[1].name} img={restroDetails[1].img} star={restroDetails[1].star}  style={styling}/>

// <RestroCard name={restroDetails[2].name} img={restroDetails[2].img} star={restroDetails[2].star} />

// <RestroCard name={restroDetails[3].name} img={restroDetails[3].img} star={restroDetails[3].star} />

// <RestroCard name={restroDetails[4].name} img={restroDetails[4].img} star={restroDetails[4].star} />

// </div>

// )

// }
