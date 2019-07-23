import React from "react";
import { ContactFormComp } from "../components";

function ContactPage() {
  return (
    <div className="row">
      <div className="col-12 my-2 ">
        <h1>Contact pagina</h1>
      </div>
      <div className="col-12 my-2 ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aut quasi aliquid voluptatem modi quas perspiciatis culpa accusamus porro
          dolor, ratione, reiciendis nemo autem, consectetur qui aliquam a aspernatur illo?
        </p>
      </div>
      <div className="col-12 my-2 ">
        <ContactFormComp />
      </div>
    </div>
  );
}

export default ContactPage;
