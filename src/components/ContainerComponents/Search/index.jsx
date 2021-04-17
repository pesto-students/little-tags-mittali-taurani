import React from 'react';
import {FiSearch} from 'react-icons/fi';


import './style.scss';


function Search(props) {

  const handleChange = (event) => {
    console.log("eventttt", event.target.value);
  };

  return <div className={'search'}>
    <FiSearch/>
    <input className={'searchInput'} placeholder={'search for products, brands ans more'} onChange={handleChange}/>
  </div>;
}

export default Search;