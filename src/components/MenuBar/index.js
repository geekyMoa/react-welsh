import React from 'react';
import { Link } from 'react-router';

export default class MenuBar extends React.Component {
  render() {
    return(
        <div className="MenuBar">
          <div className="wrapper">
            <h1 className="MenuBar-title">Welsh.se</h1>
            <ul className="MenuBar-list">
              <li><Link to="/">Start</Link></li>
              <li><Link to="/hingstar">Hingstar</Link></li>
              <li><Link to="/kontakt">Kontakt</Link></li>
            </ul>
          </div>
        </div>
    );
  }
}