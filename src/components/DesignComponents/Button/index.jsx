import React from 'react';
import {RiUser3Line} from 'react-icons/ri';
import {GrFavorite} from  'react-icons/gr';
import {HiOutlineShoppingBag} from  'react-icons/hi';


import './style.scss';


/*
type: login | shopping Bags()| Favourites
 */

function Button(props) {

  const getButtonIcon = () =>{
    switch (props.type) {
      case 'user':
        return <RiUser3Line size={'30'}/>;
      case 'favourite':
        return <GrFavorite size={'30'}/>;
      case "bag":
        return <HiOutlineShoppingBag size={'30'}/>;
      default: return  "";
    };
  }


  return <div className={'button'} onClick={props.onClickHandler}>
    <div style={{paddingRight: '5px'}}>{getButtonIcon()}</div>
    {props.buttonText}
  </div>;
}

export default Button;