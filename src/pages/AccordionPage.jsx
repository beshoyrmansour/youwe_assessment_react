import React, { useState } from "react";
import { AccordionContainerComp, AccordionComp } from "../components";
import groupsImg from "../assets/groups.png";
import externalImg from "../assets/external-link.png";
import oldmanImg from "../assets/unnamed.png";
import "./accordion.scss";

function AccordionPage() {
  return (
    <div className="card-columns">
      <AccordionContainerComp sideIcon={groupsImg}>
        <AccordionComp isPrimary title={"Hello BESHO"}>
          <div className="card">
            <img className="card-img-top" src={oldmanImg} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </AccordionComp>
        <AccordionComp title={"Hello BESHO2"}>
          <div>Hii 2</div>
        </AccordionComp>
        <AccordionComp title={"Hello BESHO3"}>
          <div>Hii 3</div>
        </AccordionComp>
        <AccordionComp title={"Hello BESHO3"}>
          <div>Hii 3</div>
        </AccordionComp>
      </AccordionContainerComp>

      <AccordionContainerComp sideIcon={groupsImg}>
        <AccordionComp isPrimary title={"Hello BESHO"}>
          <div>Hii 1</div>
        </AccordionComp>
        <AccordionComp title={"Hello BESHO2"}>
          <div>Hii 2</div>
        </AccordionComp>
        <AccordionComp title={"Hello BESHO3"}>
          <div>Hii 3</div>
        </AccordionComp>
      </AccordionContainerComp>
      <AccordionContainerComp sideIcon={externalImg}>
        <AccordionComp isPrimary title={"Hello BESHO"}>
          <div>Hii 1</div>
        </AccordionComp>
        <AccordionComp title={"Hello BESHO2"}>
          <div>Hii 2</div>
        </AccordionComp>
        <AccordionComp title={"Hello BESHO3"}>
          <div>Hii 3</div>
        </AccordionComp>
      </AccordionContainerComp>
      <AccordionContainerComp cancelable>
        <AccordionComp isPrimary title={"Hello BESHO"}>
          <div>Hii 1</div>
        </AccordionComp>
        <AccordionComp title={"Hello BESHO2"}>
          <div>Hii 2</div>
        </AccordionComp>
        <AccordionComp title={"Hello BESHO3"}>
          <div>Hii 3</div>
        </AccordionComp>
      </AccordionContainerComp>

      <AccordionContainerComp>
        <AccordionComp isPrimary title={"Hello BESHO"}>
          <div>Hii 1</div>
        </AccordionComp>
        <AccordionComp title={"Hello BESHO2"}>
          <div>Hii 2</div>
        </AccordionComp>
        <AccordionComp title={"Hello BESHO3"}>
          <div>Hii 3</div>
        </AccordionComp>
      </AccordionContainerComp>

      <AccordionContainerComp>
        <AccordionComp />
        <AccordionComp>
          <div>Hii 2</div>
        </AccordionComp>
        <AccordionComp>
          <div>Hii 3</div>
        </AccordionComp>
      </AccordionContainerComp>
    </div>
  );
}

export default AccordionPage;
