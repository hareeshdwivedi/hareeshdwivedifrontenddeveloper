import React from "react";


const CapsuleData = ({name, data}) => {
  return (
    <div data-testid="capsule-data" className="border border-2">
      <div className="flex justify-center items-center bg-black text-white text-md text-center h-28 mb-2">{name}</div>
      <h3 className="text-center">{data}</h3>
    </div>
  );
}

export default CapsuleData;