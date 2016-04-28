import React from 'react';
import { connect } from 'react-redux';
import { setSort } from '../../reducers/horses';

import HorseListItem from '../HorseListItem';
import SortButton from '../SortButton';
import FilterColor from '../FilterColor';

class HorseList extends React.Component {

  constructor(props) {
    super(props);

    //const filterOptions = getOptionsFromUrlWithQS();
    const filterOptions = {};

    this.state = {
      filterOptions: filterOptions,
      rows: this._sortItemsFromFilter(this.props.horses.items, filterOptions)
    }
  }

  _sortItemsFromFilter(items, filterOptions) {
    // filtering
    return items;
  }

  _setSort(type, field) {
    const { dispatch } = this.props;
    dispatch(setSort(type, field));
  }

  _setFilter(key, filterValue) {
    let newFilterOptions = this.state.filterOptions;
    newFilterOptions[key] = newFilterOptions[key] || [];
    newFilterOptions[key].push(filterValue);

    //newFilterOptions[key] = !newFilterOptions[key] ? filterValue : [...newFilterOptions[key], filterValue];

    this.setState({
      filterOptions: newFilterOptions,
      rows: this._sortItemsFromFilter(this.state.rows, newFilterOptions)
    });
  }

  render() {

    const { horses } = this.props;
    //console.log(this.state);

    const items = this.state.rows.map((h, key)=> <HorseListItem item={h} key={key} />);

    return (
      <div>
        <table className="DataTable">
          <thead>
            <tr>
              <td>
                <strong>Name</strong>
                <SortButton field={'name'} order={'desc'} />
                <SortButton field={'name'} order={'asc'} />
              </td>
              <td>
                <strong>Born</strong>
              </td>
              <td>
                <strong>Height</strong>
              </td>
              <td>
                <strong>Offspring</strong>
                <SortButton field={'offspring'} order={'desc'} />
                <SortButton field={'offspring'} order={'asc'} />
              </td>
              <td>
                <strong>Competing offspring</strong>
                <SortButton field={'competing_offspring'} order={'desc'} />
                <SortButton field={'competing_offspring'} order={'asc'} />
              </td>
              <td>
                <strong>Colour</strong>
                <div onClick={this._setFilter.bind(this, 'offspring', 10)}>Change filter</div>
                <input type="checkbox" id="color_fux"  onChange={this._setFilter.bind(this, 'color', 'fux')}/>
                <label htmlFor="color_fux">Fux</label>

                <input type="checkbox" id="color_svart" onChange={this._setFilter.bind(this, 'color', 'svart')}/>
                <label htmlFor="color_svart" >Svart</label>

                <FilterColor />
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
