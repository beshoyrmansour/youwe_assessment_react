import React from "react";
import PropTypes from "prop-types";

function ContactFormComp(props) {
  return (
    <form>
      <div className="form-group row">
        <label htmlFor="Name" className="col-12 col-md-2 col-form-label">
          Naam
        </label>
        <div className="col-12 col-md-10 col-lg-5">
          <input type="text" className="form-control" id="Name" name="Name" placeholder="Naam" />
        </div>
        <div className="col-12 col-md-10 col-lg-5 offset-md-2 offset-lg-0">
          <small id="passwordHelpInline" class="text-danger">
            Must be 8-20 characters long.
          </small>
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="Email" className="col-12 col-md-2 col-form-label">
          Email
        </label>
        <div className="col-12 col-md-10 col-lg-5">
          <input type="email" className="form-control" id="Email" name="Email" placeholder="Email" />
        </div>
        <div className="col-12 col-md-10 col-lg-5 offset-md-2 offset-lg-0">
          <small id="passwordHelpInline" class="text-danger">
            Must be 8-20 characters long.
          </small>
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="Subject" className="col-12 col-md-2 col-form-label">
          Onderwerp
        </label>
        <div className="col-12 col-md-10 col-lg-5">
          <input type="text" className="form-control" id="Subject" name="Subject" placeholder="Onderwerp" />
        </div>
        <div className="col-12 col-md-10 col-lg-5 offset-md-2 offset-lg-0">
          <small id="passwordHelpInline" class="text-danger">
            Must be 8-20 characters long.
          </small>
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="Subject" className="col-12 col-md-2 col-form-label">
          Bericht
        </label>
        <div className="col-12 col-md-10 col-lg-10">
          <textarea rows="6" className="form-control" id="Subject" name="Subject" placeholder="Bericht" />
        </div>
        <div className="col-12 col-md-10 col-lg-10 offset-md-2">
          <small id="passwordHelpInline" class="text-danger">
            Must be 8-20 characters long.
          </small>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-10 col-lg-3 offset-md-2 offset-lg-9">
          <button type="submit" class="btn btn-primary btn-block">
            Verstuur
          </button>
        </div>
      </div>
    </form>
  );
}

ContactFormComp.propTypes = {};

export default ContactFormComp;
