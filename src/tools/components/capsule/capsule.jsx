import React from "react";

const Capsule = ({capsule, onView}) => {
  return (
    <div data-testid="capsule-div" className="relative flex flex-col justify-end rounded-md pl-5 py-5 pr-16 space-y-3 border bg-hero-background h-80">
      <span className="absolute bg-white rounded-lg px-2 right-2 top-2">{capsule.capsule_serial}</span>
      <h3 className="text-white">{capsule.details ? capsule.details : "No details found"}</h3>
      <button data-testid="view-button" onClick={onView} className="bg-white w-fit py-1 px-3 rounded-lg text-sm hover:bg-slate-200">View Capsule</button>
    </div>
  );
}

export default Capsule;