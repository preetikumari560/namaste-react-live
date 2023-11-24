
import React from 'react';

const ShimmerMenu = () => {
 return(<>
 <div className="flex  ">

<div className=" flex flex-col w-1/4  ">
<div className="h-1 mx-11 my-12 w-3/4  bg-stone-100 " />
<div className='flex justify-center'>
<div className="h-10 w-1/3 my-5 mx-auto bg-stone-100  rounded"></div>
<div className="h-10 w-1/3 my-5 mx-auto bg-stone-100 "></div></div>
<div className=" h-6 w-1/2  mx-8 bg-stone-100 my-5 "></div>
<div className=" w-4/5 h-52 m-8 bg-stone-100 " ></div>


</div>


<div className="w-3/4">


 {Array(7).fill("").map((e,index)=>(
      <div key={index} className='h-14 my-10 shadow-md bg-gray-100/60 w-3/4 mx-auto  shadow-blue-500/40 hover:shadow-indigo-500/40'></div>
      
      ))}


 </div>

</div>
</>);
}

export default ShimmerMenu;










              
    

