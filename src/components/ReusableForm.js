import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          placeholder="name of Keg" />
        <input
          type="text"
          name="brand"
          placeholder="brand of Keg" />
        <input
          type="text"
          name="price"
          placeholder="price of Keg" />
        <input
          type="text"
          name="flavor"
          placeholder="flavor of Keg" />
        <input
          type="text"
          name="quantity"
          placeholder="quantity of Keg" />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  buttonText: PropTypes.string
};

export default ReusableForm;