
import React from 'react';

const Shimmer = () => {

   //one way :
  // const divArray = [];
  // for (let i = 0; i < 20; i++) {
  //   divArray.push(<div key={i} className='shimmer-restroCard'></div>);
  // }

  return (<>
  <div  className="flex justify-center">
  <div  className="m-5 w-56 p-2 focus:outline-none   border-b-4 border-slate-100 " 
>
</div>
</div>
<div className="flex">
<div className=" ml-5 w-1/6 ">
<div className=" p-[7px] bg-stone-100   w-3/4 h-8 m-3" ></div>
<div className=" p-[7px] bg-stone-100   w-3/4 h-8 m-3" ></div>
<div className=" p-[7px] bg-stone-100  w-3/4 h-8 m-3" >  </div>
{/* <div className=" p-[7px] bg-stone-100 w-3/4 h-8 m-3" ></div> */}
</div>
<div className="flex flex-wrap my-10 justify-center w-10/12" >

     

      {Array(20).fill("").map((e,index)=>(
      <div key={index} className='m-4 bg-stone-100 border-[1px] w-56 p-2  h-[350px]   bg-color:red'></div>
      
      ))}

    </div>
</div>
</>
  );
}

export default Shimmer;










              
    

