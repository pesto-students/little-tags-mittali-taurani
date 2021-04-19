import React, { useState, useContext } from "react";
import { BiRupee } from 'react-icons/bi';
import { BsHeart, BsFillHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../../../services/wishList/Context';
import { checkInWishList } from '../../../helper/util';
// import {RiCheckboxBlankCircleFill} from 'react-icons/ri';
import './style.scss';


function Card({ data }) {

  const {
    addToWishlist,
    removeFromWishlist,
  } = useContext(WishlistContext);

  const [inWishList, setInWishList] = useState(checkInWishList(data.id));


  const images = data.images.split("|");

  const toggleWishlist = () => {
    if (inWishList) {
      removeFromWishlist(data);
    } else {
      addToWishlist(data);
    }
    setInWishList(!inWishList);
  };

  return <div className={'card'}>
    <img className={'card-image'} src={images[0] || ''} alt={'product img'} />
    <div className={'product-container'}>
      <div className={'product-name'}><Link style={{ textDecoration: "none", textDecorationColor: 'black' }} to={`/product/${data.id}`}>{data.brand || 'No Brand name'}</Link></div>
      <div></div>
      <div onClick={toggleWishlist} className={'heart'}>
        {checkInWishList(data.id) ? <BsFillHeartFill color={'red'} size={20} /> : <BsHeart size={20} />}
      </div>

    </div>
    <div className={'product-price'}>
      <BiRupee />
      <div>
        {data['Unnamed: 17']}
      </div>
    </div>
  </div>;
}

export default Card;