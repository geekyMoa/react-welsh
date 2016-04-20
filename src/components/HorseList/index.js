import React from 'react';
import { connect } from 'react-redux';
import Horse from '../Horse';
import { setSort } from '../../reducers/horses';


class HorseList extends React.Component {

  _setSort(type, field) {
    const { dispatch } = this.props;
    dispatch(setSort(type, field));
  }

  render() {

    const { horses } = this.props;
    const { sort } = horses;
    const items = horses.items.map((h, key)=> <Horse item={h} key={key} />);

    return (
      <div>
        <h2>{sort.field}</h2>
        <table>
          <thead>
            <tr>
              <td>
                <strong>Babies</strong>
                <button onClick={this._setSort.bind(this, 'desc', 'offspring')}>&darr;</button>
                <button onClick={this._setSort.bind(this, 'asc', 'offspring')}>&uarr;</button>
              </td>
              <td>
                <strong>Name</strong>
                <button onClick={this._setSort.bind(this, 'desc', 'name')}>&darr;</button>
                <button onClick={this._setSort.bind(this, 'asc', 'name')}>&darr;</button>
              </td>
            </tr>
          </thead>
          <tbody>
            { items }
          </tbody>
        </table>

      </div>
  );
  }
}

export default connect(
  state => ({
    horses: state.horses
  })
)(HorseList);
