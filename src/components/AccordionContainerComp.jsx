import React, { useContext, useEffect, useState } from "react";
import AccordionContextProvider, { AccordionContext } from "../contexts/AccordionContext";
import closeImg from "../assets/close.png";

// import uuid from "uuid/v4";

const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
const innerKey = uuidv4();

const AccordionContainerComp = props => {
  //   const { activeItemId } = useContext(AccordionContext);
  //   console.log("children", props.children);
  // let elements = React.Children.toArray(props.children);

  const elements = React.Children.map(props.children, child =>
    React.cloneElement(child, {
      innerKey: uuidv4(),
      cancelable: props.cancelable,
      sideIcon: props.sideIcon
    })
  );
  const [flag, setFlag] = useState(true);
  const toggleFlag = () => setFlag(!flag);
  return (
    flag && (
      <div>
        {/* {activeItemId} */}
        <AccordionContextProvider>
          <div className="card accordion-container-comp">
            {props.sideIcon && <img className="accordion-container-icon" src={props.sideIcon} alt="" />}
            {(props.cancelable || props.sideIcon) && (
              <img className="accordion-container-close" style={{ right: "0px" }} src={closeImg} alt="" onClick={toggleFlag} />
            )}
            <ul className={(props.sideIcon && "hasIcon") || (props.cancelable && "cancelable")}>{elements}</ul>
          </div>
        </AccordionContextProvider>
      </div>
    )
  );
};
export default AccordionContainerComp;
