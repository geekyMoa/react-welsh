import React from 'react';
import MenuBar from '../components/MenuBar/index';
import HorseList from '../components/HorseList';

export default class Stallions extends React.Component {


  render() {
    return(
        <div>
          <MenuBar />
          <div class="wrapper">
            <HorseList />
          </div>
        </div>
    );
  }

}