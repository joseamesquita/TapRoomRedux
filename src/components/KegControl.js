import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import EditKegForm from './EditKegForm';
import KegDetail from './KegDetail';
import { connect } from 'react-redux';
import Keg from "./Keg";
import PropTypes from "prop-types";


class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false
    };
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { name, brand, price, flavor, quantity, id } = newKeg;
    const action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      quantity: quantity,
      id: id
    }
    dispatch(action);
    this.setState({ formVisibleOnPage: false });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({ selectedKeg: selectedKeg });
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      tyep: 'DELETE_KEG',
      id: id
    }
    dispatch(action);
    this.setState({ selectedKeg });
  }

  handleSellingPint = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    if (selectedKeg.quantity >= 1) {
      const kegUpdate = { ...selectedKeg, quantity: selectedKeg.quantity - 1 };
      const kegList = this.state.masterKegList.filter(keg => keg.id !== id);
      this.setState({
        masterKegList: [...kegList, kegUpdate]
      })
    }
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const { name, brand, price, flavor, quantity, id } = kegToEdit;
    const action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      quantity: quantity,
      id: id
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null
    });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }


  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  render() {
    const styles = {
      backgroundColor: 'blue',
      textAlign: 'center'
    }
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm keg={this.state.selectedKeg}
        onEditKeg={this.handleEditingKegInList} />
      buttonText = "Return to Keg List";
    }
    else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg={this.state.selectedKeg}
        onClickingDelete={this.handleDeletingKeg}
        onClickingEdit={this.handleEditClick} />
      buttonText = "Return to Keg List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";
    } else {

      currentlyVisibleState = <KegList kegList={this.state.masterKegList}
        onKegSelection={this.handleChangingSelectedKeg}
        onKegSellClicked={this.handleSellingPint}
      />;
      buttonText = "Add a Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button textAlign='center' onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
KegControl.propTypes = {
  masterKegList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;