import React from "react";

function NewKegForm(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({ name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, flavor: event.target.flavor.value })
  }

  NewKegForm.propTypes = {
    onNewKegCreation: PropTypes.func
  };

  return (
    <React.Fragment>
      formSubmissionHandler={handleNewKegFormSubmission}
      buttonText = "Submit Keg Request"
    </React.Fragment>
  )
}

export default NewKegForm;