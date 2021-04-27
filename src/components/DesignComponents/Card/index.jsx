import "./style.scss";
import React, { useState, useContext, useEffect } from "react";
import { BiRupee } from "react-icons/bi";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../../services/wishList/Context";
import { checkInWishList } from "../../../helper/util";
import FirebaseContext from "../../../services/firebase/FirebaseContext";
import { SessionContext } from "../../../services/session/SessionContext";
import { USER_WISH_LIST_STORAGE_KEY } from "../../../helper/constants";

function Card({ data }) {
  const { wishListItems, addToWishlist, removeFromWishlist } = useContext(
    WishlistContext
  );

  const { authUser } = useContext(SessionContext);

  const firebase = useContext(FirebaseContext);

  const [inWishList, setInWishList] = useState(checkInWishList(data.id));

  const [imgIndex, setImgIndex] = useState(0);

  const images = data.images.split("|");

  const toggleWishlist = () => {
    if (inWishList) {
      removeFromWishlist(data);
    } else {
      addToWishlist(data);
    }
    setInWishList(!inWishList);
  };

  useEffect(() => {
    if (authUser && authUser.isLoggedIn)
      firebase.saveDataToFirebase(
        authUser.uid,
        USER_WISH_LIST_STORAGE_KEY,
        wishListItems
      );
  }, [authUser, wishListItems, firebase]);

  const changeImage = () => {
    setImgIndex(imgIndex + 1);
  };
  const changeImageBack = () => {
    setImgIndex(imgIndex - 1);
  };

  return (
    <div className={"card"}>
      <img
        className={"card-image"}
        src={images[imgIndex % images.length] || ""}
        onMouseEnter={changeImage}
        onMouseLeave={changeImageBack}
        alt={"product img"}
      />
      <div className={"product-container"}>
        <Link className="product-name link" to={`/product/${data.id}`}>
          {data.brand || "No Brand name"}
        </Link>
        <div></div>
        <div onClick={toggleWishlist} className={"heart"}>
          {checkInWishList(data.id) ? (
            <BsFillHeartFill color={"red"} size={20} />
          ) : (
            <BsHeart size={20} />
          )}
        </div>
      </div>
      <div className={"product-price"}>
        <BiRupee />
        <div>{data["Unnamed: 17"]}</div>
      </div>
    </div>
  );
}

export default Card;
