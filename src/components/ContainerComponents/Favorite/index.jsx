import "./style.scss";
import React, { useState } from "react";
// import { FaHeart } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const Favorite = () => {
  const [toggleHeart, setToggleHeart] = useState(false);
  const handleHeartClick = () => {
    setToggleHeart(!toggleHeart);
  };
  return (
    /*<FaHeart
        className={toggleHeart ? "icon-favorite active" : "icon-favorite"}
        onClick={handleHeartClick}
      />*/
    <div
      className={toggleHeart ? "icon-favorite active" : "icon-favorite"}
      onClick={handleHeartClick}
    >
      {!toggleHeart ? <MdFavoriteBorder /> : <MdFavorite />}
    </div>
  );
};

export default Favorite;
