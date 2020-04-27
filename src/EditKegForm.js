import React from "react";
// import ReusableFrom from "./ReusableForm";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function EditKegForm(props) {
  // const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({
      brand: event.target.type.value,
      name: event.target.name.value,
      price: event.target.price.value,
      flavor: event.target.flavor.value,
      id: v4()
    })
  }

  return (
    <React.Fragment>
      formSubmissionHandler = {handleEditKegFormSubmission}
      buttonText = "Update Keg" />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  onEditKeg: PropTypes.func
};

export default EditKegForm;