import React from 'react';
import HorseList from '../components/HorseList';
import MenuBar from '../components/MenuBar/index';

export default class Home extends React.Component {

  render() {
    return (
      <div className="Home">
        <MenuBar />
        <div className="wrapper">
          <HorseList />
          {this.props.children}
        </div>
      </div>
    );
  }

}
