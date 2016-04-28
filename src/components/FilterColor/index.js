import React from 'react';
import { connect } from 'react-redux';

export default class FilterColor extends React.Component {

  render() {

    const { horses: { items } } = this.props;

    let horseColors = horseColors || [];
    items.map((i, k) => {
      if (horseColors.indexOf(i.color) == -1) {
        horseColors.push(i.color);
      }
    });

    //var colors = ['a', 'b', 'c', 'a'].reduce((a, b) => colors.indexOf(b) > -1 ? [...a, b] : a);
    //console.log(colors);
    //let horseColors = filter((value) => {
    //  if (horseColors.indexOf(i.color) == -1) {
    //    return i.color;
    //  }
    //});


    return(
        <div className="FilterColors">
          {
            horseColors.map((color, key) => {
            return (
              <div key={key}>
                <input type="checkbox" />
                <label>{ color }</label>
              </div>
            );
            })
          }
        </div>
    );

  }
}


export default connect(
    state => ({
      horses: state.horses
    })
)(FilterColor);
