import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          placeholder="name of Root Beer" />
        <input
          type="text"
          name="brand"
          placeholder="brand of Root Beer" />
        <input
          type="text"
          name="price"
          placeholder="price of Root Beer" />
        <input
          type
          name="flavor"
          placeholder="flavor of Root Beer" />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  buttonText: PropTypes.string
};

export default ReusableForm;