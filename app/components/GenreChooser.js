import React from 'react';
import {Link, NavLink} from "react-router-dom";


export default class GenreChooser extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   // songs: [],
    //   // loadingState: 'loading',
    // };
  }

  render() {
    // switch (this.state.loadingState) {
    //   case 'loading':
    //     return <div>Loading...</div>;
    //   case 'error':
    //     return <div>Error!</div>;
    //   case 'loaded':
        return (
            <nav>
              <ul className="category-nav">
                <li>Generes:</li>
                <li><Link to=''>all-music</Link></li>
                <li><Link to='/explore/hip-hop rap'>hip-hop rap</Link></li>
                <li><NavLink to="/explore/trance" activeClassName="selected-genre">Trance</NavLink></li>
                <li><Link to='/explore/house'>house</Link></li>
                <li><Link to='/explore/rock'>rock</Link></li>
                <li><Link to='/explore/dubstep'>dubstep</Link></li>
              </ul>
            </nav>
        )
  }};
