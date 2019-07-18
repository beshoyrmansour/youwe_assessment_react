import React, { createContext, useState } from "react";
export const AccordionContext = createContext();

const AccordionContextProvider = props => {
  const [activeItemId, setActiveItemId] = useState(null);
  const setActiveItem = activeId => {
      // console.log('activeId',activeId);
      
    setActiveItemId(activeId);
  };

  return <AccordionContext.Provider value={{ activeItemId, setActiveItem }}>{props.children}</AccordionContext.Provider>;
};
export default AccordionContextProvider;
