import { createContext, useContext, useState, useRef, useEffect } from "react";

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
const [activeIndex, setActiveIndex] = useState(0)
  const contextValues = {
   activeIndex, setActiveIndex
  };

  return (
    <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
