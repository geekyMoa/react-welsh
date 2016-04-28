import React from 'react';
import { routerReducer } from 'react-router-redux';
import { connect } from 'react-redux';
import { store } from '../reducers/index';

export default class Horse extends React.Component {

  constructor(props) {
    super(props);
    const state = store.getState();

    this.state = {
      horse: state.horses.items[this.props.params.id]
    };
  }


  render() {
    const { horse } = this.state;

    return (
        <div>
          <h1>{ horse.name }</h1>
          Babies: { horse.offspring }
          <p>yay</p>
        </div>
    );
  }

}

export default connect(
    state => ({
      horse: state.horse
    })
)(Horse);
