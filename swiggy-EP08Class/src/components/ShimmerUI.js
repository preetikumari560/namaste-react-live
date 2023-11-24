
import React from 'react';

const Shimmer = () => {

   //one way :
  // const divArray = [];
  // for (let i = 0; i < 20; i++) {
  //   divArray.push(<div key={i} className='shimmer-restroCard'></div>);
  // }

  return (
    <div  className='shimmer-body'>
      {/* {divArray} */}
      
      {/*second way :*/}
      {Array(20).fill("").map((e,index)=>(
      <div key={index} className='shimmer-restroCard'></div>
      ))}
    </div>
  );
}

export default Shimmer;
