//normal JS fucntions:

export const filterName = (searchRestro, Restro)=>{
const data= Restro.filter((data)=>data.info.name.toLowerCase().includes(searchRestro.toLowerCase()))
 return data;
}



export const filterRating =(Restro)=>{
const data = Restro.filter((data)=>  data.info.avgRating>4 )
return data
}
