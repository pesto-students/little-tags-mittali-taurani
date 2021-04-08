import React from 'react';
import {FiSearch} from 'react-icons/fi';


import './style.scss';


function Search(props) {
  return <div className={'search'}>
    <FiSearch/>
    <input className={'searchInput'}/>
  </div>;
}

export default Search;