import React from "react";
import { useState } from "react";

const CapsuleContext = React.createContext(undefined);
const CapsuleProvider = ({ children }) => {
  const [range, setRange] = useState([]);
  const [filterMenu, setFilterMenu] = useState(false);

  return (
    <CapsuleContext.Provider
      value={{
        range,
        setRange,
        filterMenu,
        setFilterMenu,
      }}
    >
      {children}
    </CapsuleContext.Provider>
  );
};
export const useCapsuleServices = () => React.useContext(CapsuleContext);
export default CapsuleProvider;
