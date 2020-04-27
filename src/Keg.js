import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>{props.name}</h3>
        <h3>{props.brand}</h3>
        <h3>{props.price}</h3>
        <h3>{props.flavor}</h3>
        <button onClick={() => props.whenKegSellClicked(props.id)} type="submit">Sell Keg</button>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number,
  flavor: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  whenKegSellClicked: PropTypes.func
};

export default Keg;