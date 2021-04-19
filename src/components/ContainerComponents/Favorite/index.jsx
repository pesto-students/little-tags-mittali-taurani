import "./style.scss";
import React, { useState, useContext } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { checkInWishList } from '../../../helper/util';
import { WishlistContext } from '../../../services/wishList/Context';

const Favorite = ({ data }) => {
  const [toggleHeart, setToggleHeart] = useState(checkInWishList(data.id));

  const {
    addToWishlist,
    removeFromWishlist,
  } = useContext(WishlistContext);

  const handleHeartClick = () => {
    if (toggleHeart) {
      removeFromWishlist(data);
    } else {
      addToWishlist(data);
    }
    setToggleHeart(!toggleHeart);
  };

  return (
    <div
      className={toggleHeart ? "icon-favorite active" : "icon-favorite"}
      onClick={handleHeartClick}
    >
      {!toggleHeart ? <MdFavoriteBorder /> : <MdFavorite />}
    </div>
  );
};

export default Favorite;
