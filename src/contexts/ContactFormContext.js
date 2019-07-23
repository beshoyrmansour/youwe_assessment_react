import React, { createContext, useState } from "react";
export const AccordionContext = createContext();

const ContactFormContextProvider = props => {
  const [activeItemId, setActiveItemId] = useState(null);
  const setActiveItem = activeId => {
      // console.log('activeId',activeId);
      
    setActiveItemId(activeId);
  };

  return <ContactFormContext.Provider value={{ activeItemId, setActiveItem }}>{props.children}</ContactFormContext.Provider>;
};
export default ContactFormContextProvider;
