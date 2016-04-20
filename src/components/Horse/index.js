import React from 'react';
import { connect } from 'react-redux';

export default class Horse extends React.Component {

  render() {

    const { item } = this.props;
    const { name, offspring } = item;

    return (
      <tr>
        <td>{ offspring }</td>
        <td>{ name } </td>
      </tr>
    );

  }
}

Horse.propTypes = {
  item: React.PropTypes.object.isRequired
};
