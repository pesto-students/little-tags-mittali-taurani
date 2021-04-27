import "./style.scss";
import React, { useState, useContext, useEffect } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { checkInWishList } from "../../../helper/util";
import { WishlistContext } from "../../../services/wishList/Context";
import FirebaseContext from "../../../services/firebase/FirebaseContext";
import { SessionContext } from "../../../services/session/SessionContext";
import { USER_WISH_LIST_STORAGE_KEY } from "../../../helper/constants";

const Favorite = ({ data }) => {
  const { authUser } = useContext(SessionContext);

  const firebase = useContext(FirebaseContext);

  const [toggleHeart, setToggleHeart] = useState(checkInWishList(data.id));

  const { wishListItems, addToWishlist, removeFromWishlist } = useContext(WishlistContext);

  const handleHeartClick = () => {
    if (toggleHeart) {
      removeFromWishlist(data);
    } else {
      addToWishlist(data);
    }
    setToggleHeart(!toggleHeart);
  };

  useEffect(() => {
    if (authUser && authUser.isLoggedIn)
      firebase.saveDataToFirebase(
        authUser.uid,
        USER_WISH_LIST_STORAGE_KEY,
        wishListItems
      );
  }, [authUser, wishListItems, firebase]);

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
