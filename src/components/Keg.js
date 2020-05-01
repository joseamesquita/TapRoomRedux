import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  const styles = {
    fontFamily: 'sans-serif',
    paddingTop: '50px',
    textAlign: 'center'
  }
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <div style={styles}>
          <h3>Name of Keg: {props.name}</h3>
          <h3>Brand of Keg: {props.brand}</h3>
          <h3>Price of Keg: ${props.price}</h3>
          <h3>Flavor of Keg: {props.flavor}</h3>
          <h3>Quantity of Keg: {props.quantity}</h3>
        </div>
        <button onClick={() => props.whenKegSellClicked(props.id)} type="submit">Sell Keg</button>
      </div >
    </React.Fragment >
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number,
  flavor: PropTypes.string,
  id: PropTypes.string,
  quantity: PropTypes.number,
  whenKegClicked: PropTypes.func,
  whenKegSellClicked: PropTypes.func
};

export default Keg;