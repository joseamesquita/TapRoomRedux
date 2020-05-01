import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.kegList.map((keg) =>
        <Keg
          whenKegClicked={props.onKegSelection}
          whenKegSellClicked={props.onKegSellClicked}
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          flavor={keg.flavor}
          quantity={keg.quantity}
          id={keg.id}
          key={keg.id}
        />)}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;