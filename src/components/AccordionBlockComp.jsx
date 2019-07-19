import React, { useContext } from "react";
import { AccordionContext } from "../contexts/AccordionContext";

import { CSSTransition } from "react-transition-group";

import arrowRightImg from "../assets/arrow-right.png";
import arrowDownImg from "../assets/arrow-down.png";

const AccordionBlockComp = props => {
  console.log("props", props);
  let isPrimary = props.isPrimary;
  let isOpen = true;
  const { activeItemId, setActiveItem } = useContext(AccordionContext);
  if ((activeItemId === null && isPrimary) || activeItemId === props.innerKey) {
    setActiveItem(props.innerKey);
  }
  if (!props.children)
    return (
      <div className="alert alert-danger" role="alert">
        you must provide content !!
      </div>
    );
  if (!props.title)
    return (
      <div className="alert alert-danger" role="alert">
        you must provide title !!
      </div>
    );
  else
    return (
      <React.Fragment>
        <li>
          {/* <h1>{activeItemId == props.innerKey ? "ACTIVE" : "INACTIVE"}</h1> */}
          {activeItemId === props.innerKey ? (
            <div className="open-item">
              <div
                // {!!props.cancelable && !!props.sideIcon}
                className={props.cancelable || props.sideIcon ? "item-title-primary" : "item-title"}
                onClick={() => {
                  // setActiveItem(props.innerKey);
                  isPrimary = false;
                  setActiveItem("");
                }}
              >
                <p className="item-title-text">{props.title ? props.title : "No Title"}</p>
                <button className="btn btn-secondary">
                  <img src={arrowDownImg} alt="" />
                </button>
              </div>
              <CSSTransition
                in={activeItemId === props.innerKey}
                timeout={300}
                classNames="open-item"
                unmountOnExit
                onEnter={() => setActiveItem(props.innerKey)}
                onExited={() => setActiveItem("")}
              >
                <div className="accordion-item-contet">{props.children}</div>
              </CSSTransition>
            </div>
          ) : (
            <div
              className="closed-item"
              onClick={() => {
                setActiveItem(props.innerKey);
              }}
            >
              <div
                className="item-title"
                onClick={() => {
                  setActiveItem(props.innerKey);
                }}
              >
                <p className="item-title-text">{props.title ? props.title : "No Title"}</p>
                <button className="btn btn-secondary">
                  <img src={arrowRightImg} alt="" />
                </button>
              </div>
            </div>
          )}
        </li>
      </React.Fragment>
    );
};
export default AccordionBlockComp;
