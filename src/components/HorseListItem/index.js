import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export default class HorseListItem extends React.Component {

  render() {

    const { item } = this.props;
    const { name, offspring, id, competing_offspring, color, born, height } = item;

    return (
      <tr>
        <td><Link to={`/horse/${id}`}>{ name }</Link> </td>
        <td>{ born }</td>
        <td>{ height }</td>
        <td>{ offspring }</td>
        <td>{ competing_offspring }</td>
        <td>{ color }</td>
      </tr>
    );

  }
}

HorseListItem.propTypes = {
  item: React.PropTypes.object.isRequired
};
