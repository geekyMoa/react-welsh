import React from 'react';
import { connect } from 'react-redux';
import { setSort } from '../../reducers/horses';

export default class SortButton extends React.Component {

  constructor(props) {
    super(props);

    console.log('constructor');
  }

  _sort() {
    const { order, field, dispatch } = this.props;
    dispatch(setSort(order, field));
  }

  _buttonText() {
    const { order } = this.props;
    let buttonText = "";
    switch (order) {
      case 'desc':
        buttonText = "\u2191";
        break;
      case 'asc':
        buttonText = "\u2193";
        break;
      default:
        buttonText = "Click me!";
    }

    return buttonText;
  }

  render() {
    const buttonText = this._buttonText();

    return (
        <button onClick={this._sort.bind(this)}>{` ${buttonText} `}</button>
    );
  }
}

export default connect(
    state => ({
      sort: state.horses
    })
)(SortButton);
