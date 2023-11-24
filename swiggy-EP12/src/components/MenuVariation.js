import { useState } from "react";

const MenuVariation = (props) => {
  const { variantsV2 } = props.value;
  const [currentVariantIndex, setCurrentVariantIndex] = useState(0);

  const handleContinue = () => {
    if (currentVariantIndex < variantsV2?.variantGroups?.length - 1) {
      setCurrentVariantIndex(currentVariantIndex + 1);
    }
    //  else {
    //   setCurrentVariantIndex(0);
    // }
  };

  // Use map to extract the 'price' values into a new array
  const pricesArray = variantsV2?.pricingModels
    ?.map(item => item?.price) || []; // Handle the case where pricingModels is undefined

  // Use Math.min to find the minimum value from the pricesArray
  const minPrice = pricesArray.length > 0 ? Math.min(...pricesArray) : null;

  const maxPrice = pricesArray.length > 0 ? Math.max(...pricesArray) : null

  return ((variantsV2.pricingModels)?(<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white w-1/4 p-5">
        <button onClick={props.closeButton}>Close</button>
        {variantsV2?.variantGroups?.map((e, index) => (
          <div key={e.id} style={{ display: index === currentVariantIndex ? "block" : "none" }}>

            <span className="flex flex-col font-bold text-lg text-left my-2">Customize "{e?.name}" </span>
            <p className="text-left">just @ ₹{minPrice/100} - ₹{maxPrice/100}</p>
            <div className=" border-b border-dashed my-4"></div>
            {e?.variations?.map((k, variationIndex) => (
              <div className="flex " key={k.id}>
                {k.isVeg ? "🟩" : "🟥"}
              
                <label className="mx-2 text-left" htmlFor={k.name}>  {k.default?(<input className="my-2 mx-1" type="radio" id={k?.name} name={e?.name} value={k?.name} checked/>):(<input className="mx-1 my-2" type="radio" id={k?.name} name={e?.name} value={k?.name} />)}
             {k.name} <span className="text-sm text-gray-400 ">(₹{k.price})</span></label>
          
              </div>
            ))}
          </div>
        ))}
        <button onClick={handleContinue}>Continue</button>
        
      </div>
    </div>):null
    
  );
};

export default MenuVariation;
