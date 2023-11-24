//normal JS fucntions:

export const filterName = (searchRestro, Restro)=>{
const data= Restro.filter((data)=>data?.info?.name.toLowerCase()?.includes(searchRestro?.toLowerCase()))
 return data;
}



export const filterRating =(Restro)=>{
const data = Restro.filter((data)=>  data?.info?.avgRating>=4 )
return data
}


export const filterAvailable=(Restro)=>{
const data = Restro.filter((data)=> data.info?.availability?.opened===true)
return data
}


export const nonVegFilter = (restMenu,setItemToRender) => {
   const updatedMenu = restMenu.map((e, index) => {
    const filteredItemCards = e?.card?.card?.itemCards?.filter(
      (i) => i?.card?.info?.itemAttribute?.vegClassifier === "NONVEG"
    );
    return { ...e, card: { card: { itemCards: filteredItemCards, title:e?.card?.card?.title
 } } };
  });

  setItemToRender(updatedMenu);
  console.log("non", updatedMenu);
     
  };

 export const vegFilter = (restMenu,setItemToRender) => {
   const updatedMenu = restMenu.map((e, index) => {
    const filteredItemCards = e?.card?.card?.itemCards?.filter(
      (i) => i?.card?.info?.itemAttribute?.vegClassifier === "VEG" 
    );
    return { ...e, card: { card: { itemCards: filteredItemCards, title:e?.card?.card?.title
 } } };
  });

  setItemToRender(updatedMenu);
  console.log("veg", updatedMenu);
    
  };



export const searchMenuHandler = (restMenu,setItemToRender,searchMenu) => {
   const updatedMenu = restMenu.map((e, index) => {
    const filteredItemCards = e?.card?.card?.itemCards?.filter(
      (i) => i?.card?.info?.name?.toLowerCase()?.includes(searchMenu?.toLowerCase())
    );
    return { ...e, card: { card: { itemCards: filteredItemCards, title:e?.card?.card?.title
 } } };
  });

  setItemToRender(updatedMenu);
  console.log("search", updatedMenu);
     
  };