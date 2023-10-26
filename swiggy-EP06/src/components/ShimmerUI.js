
import React from 'react';

const Shimmer = () => {
  const divArray = [];

  for (let i = 0; i < 20; i++) {
    divArray.push(<div key={i} className='shimmer-restroCard'></div>);
  }

  return (
    <div  className='shimmer-body'>
      {divArray}
    </div>
  );
}

export default Shimmer;
