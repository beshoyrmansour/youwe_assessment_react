import React, { useState } from "react";
import PropTypes from "prop-types";

function ContactFormComp(props) {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: ""
  });
  const [formValidations, setFormValidations] = useState({});
  const [isFormInvalid, setIsFormInvalid] = useState(true);

  const hamdleFormDataChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const ValidateFormField = (FieldName, FieldValue) => {
    // console.log("ValidateFormField ==>", "FieldName : " + FieldName, ", FieldValue : " + FieldValue);

    if (FieldName === "Email" && FieldValue !== "" && !/\S+@\S+\.\S+/.test(FieldValue)) {
      setFormValidations({ ...formValidations, Email: "Email is ongeldig" });
      setIsFormInvalid(true);
    } else if (FieldValue === "") {
      //   validationRequired(FieldName);
      switch (FieldName) {
        case "Name":
          setFormValidations({ ...formValidations, Name: "Naam is verplicht" });

          break;
        case "Email":
          setFormValidations({ ...formValidations, Email: "Email is verplicht" });

          break;
        case "Subject":
          setFormValidations({ ...formValidations, Subject: "Onderwerp is verplicht" });

          break;
        case "Message":
          setFormValidations({ ...formValidations, Message: "Bericht is verplicht" });
          break;
        default:
          break;
      }
      setIsFormInvalid(true);
    } else {
      setFormValidations({ ...formValidations, [FieldName]: "" });
    }
  };
  const hamdleBlur = e => {
    ValidateFormField(e.target.name, e.target.value);
    const AllFormFieldsHasData = !!Object.values(formData).filter(x => x === null || x === "").length;
    const AllValidationFieldsHasData = !!Object.values(formValidations).filter(x => x === null || x === "").length;
  };

  const CanSubmit = () => {
    // const hasNoMessages = Object.values(formValidations).every(x => x === null || x === "");
    const hasNoMessages = Object.values(formValidations).every(x => {
      console.log("x", x);
      return x === null || x === "";
    });

    setIsFormInvalid(hasNoMessages);
  };

  const handleSubmit = event => {
    if (event) event.preventDefault();
  };

  return (
    <form>
      <div className="form-group row">
        <label htmlFor="Name" className="col-12 col-md-2 col-form-label">
          Naam {formValidations.Name && <span className="text-danger">*</span>}
        </label>
        <div className="col-12 col-md-10 col-lg-5">
          <input
            type="text"
            className="form-control"
            id="Name"
            name="Name"
            placeholder="Naam"
            value={formData.Name}
            onChange={hamdleFormDataChange}
            onBlur={hamdleBlur}
          />
        </div>
        <div className="col-12 col-md-10 col-lg-5 offset-md-2 offset-lg-0">
          <small id="passwordHelpInline" className="text-danger">
            {formValidations.Name}
          </small>
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="Email" className="col-12 col-md-2 col-form-label">
          Email {formValidations.Email && <span className="text-danger">*</span>}
        </label>
        <div className="col-12 col-md-10 col-lg-5">
          <input
            type="email"
            className="form-control"
            id="Email"
            name="Email"
            placeholder="Email"
            value={formData.Email}
            onChange={hamdleFormDataChange}
            onBlur={hamdleBlur}
          />
        </div>
        <div className="col-12 col-md-10 col-lg-5 offset-md-2 offset-lg-0">
          <small id="passwordHelpInline" className="text-danger">
            {formValidations.Email}
          </small>
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="Subject" className="col-12 col-md-2 col-form-label">
          Onderwerp {formValidations.Subject && <span className="text-danger">*</span>}
        </label>
        <div className="col-12 col-md-10 col-lg-5">
          <input
            type="text"
            className="form-control"
            id="Subject"
            name="Subject"
            placeholder="Onderwerp"
            value={formData.Subject}
            onChange={hamdleFormDataChange}
            onBlur={hamdleBlur}
          />
        </div>
        <div className="col-12 col-md-10 col-lg-5 offset-md-2 offset-lg-0">
          <small id="passwordHelpInline" className="text-danger">
            {formValidations.Subject}
          </small>
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="Message" className="col-12 col-md-2 col-form-label">
          Bericht {formValidations.Message && <span className="text-danger">*</span>}
        </label>
        <div className="col-12 col-md-10 col-lg-10">
          <textarea
            rows="6"
            className="form-control"
            id="Message"
            name="Message"
            placeholder="Bericht"
            value={formData.Message}
            onChange={hamdleFormDataChange}
            onBlur={hamdleBlur}
          />
        </div>
        <div className="col-12 col-md-10 col-lg-10 offset-md-2">
          <small id="passwordHelpInline" className="text-danger">
            {formValidations.Message}
          </small>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-10 col-lg-3 offset-md-2 offset-lg-9">
          <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>
            Verstuur
          </button>
        </div>
      </div>
    </form>
  );
}

ContactFormComp.propTypes = {};

export default ContactFormComp;
