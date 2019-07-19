import React, { useState } from "react";
import { AccordionComp, AccordionBlockComp } from "../components";
import groupsImg from "../assets/groups.png";
import externalImg from "../assets/external-link.png";
import oldmanImg from "../assets/unnamed.png";
import "./accordion.scss";

function AccordionPage() {
  return (
    <div className="card-columns">
      <AccordionComp sideIcon={groupsImg}>
        <AccordionBlockComp isPrimary title={"Hello BESHO"}>
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
        </AccordionBlockComp>
        <AccordionBlockComp title={"Hello BESHO2"}>
          <div>Hii 2</div>
        </AccordionBlockComp>
        <AccordionBlockComp title={"Hello BESHO3"}>
          <div>Hii 3</div>
        </AccordionBlockComp>
        <AccordionBlockComp title={"Hello BESHO3"}>
          <div>Hii 3</div>
        </AccordionBlockComp>
      </AccordionComp>

      <AccordionComp sideIcon={groupsImg}>
        <AccordionBlockComp isPrimary title={"Hello BESHO"}>
          <div>Hii 1</div>
        </AccordionBlockComp>
        <AccordionBlockComp title={"Hello BESHO2"}>
          <div>Hii 2</div>
        </AccordionBlockComp>
        <AccordionBlockComp title={"Hello BESHO3"}>
          <div>Hii 3</div>
        </AccordionBlockComp>
      </AccordionComp>
      <AccordionComp sideIcon={externalImg}>
        <AccordionBlockComp isPrimary title={"Hello BESHO"}>
          <div>Hii 1</div>
        </AccordionBlockComp>
        <AccordionBlockComp title={"Hello BESHO2"}>
          <div>Hii 2</div>
        </AccordionBlockComp>
        <AccordionBlockComp title={"Hello BESHO3"}>
          <div>Hii 3</div>
        </AccordionBlockComp>
      </AccordionComp>
      <AccordionComp cancelable>
        <AccordionBlockComp isPrimary title={"Hello BESHO"}>
          <div>Hii 1</div>
        </AccordionBlockComp>
        <AccordionBlockComp title={"Hello BESHO2"}>
          <div>Hii 2</div>
        </AccordionBlockComp>
        <AccordionBlockComp title={"Hello BESHO3"}>
          <div>Hii 3</div>
        </AccordionBlockComp>
      </AccordionComp>

      <AccordionComp>
        <AccordionBlockComp isPrimary title={"Hello BESHO"}>
          <div>Hii 1</div>
        </AccordionBlockComp>
        <AccordionBlockComp title={"Hello BESHO2"}>
          <div>Hii 2</div>
        </AccordionBlockComp>
        <AccordionBlockComp title={"Hello BESHO3"}>
          <div>Hii 3</div>
        </AccordionBlockComp>
      </AccordionComp>

      <AccordionComp>
        <AccordionBlockComp />
        <AccordionBlockComp>
          <div>Hii 2</div>
        </AccordionBlockComp>
        <AccordionBlockComp>
          <div>Hii 3</div>
        </AccordionBlockComp>
      </AccordionComp>
    </div>
  );
}

export default AccordionPage;
