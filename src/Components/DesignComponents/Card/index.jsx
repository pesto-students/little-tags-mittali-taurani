import React, {useState} from 'react';
import {BiRupee} from 'react-icons/bi';
import {BsHeart, BsFillHeartFill} from 'react-icons/bs';
// import {RiCheckboxBlankCircleFill} from 'react-icons/ri';
import './style.scss';


function Card(props) {
  if(!window.localStorage.getItem('wishlist')){
    window.localStorage.setItem('wishlist','[]')
  }

  // const checkWishList = ()=>{
  //   const wishList = JSON.parse(window.localStorage.getItem('wishlist'));
  // };

  const [inWishList, setInWishList] = useState(false);

  // console.log("props.data", props.data);

  const images = props.data.images.split("|");

  const toggleWishlist = () => {
    const wishlist = JSON.parse(window.localStorage.getItem('wishlist'));
    if(!inWishList){
      window.localStorage.setItem("wishlist",JSON.stringify([props.data,...wishlist]));
      console.log("wishlist",wishlist);
    }else {
      const newWishList = wishlist.filter(function(item) {
        return item !== JSON.stringify(props)
      });
      window.localStorage.setItem("wishlist",JSON.stringify(newWishList));
      console.log(JSON.parse(window.localStorage.getItem('wishlist')));
    }
    setInWishList(!inWishList);
  };

  // const colors = (props.data.color1 || "").split("|").map((color)=>{
  // })


  return <div className={'card'}>
    <img className={'card-image'} src={images[0] || ''} alt={'product img'}/>
    <div className={'product-container'}>
      <div className={'product-name'}>{props.data.keyword || 'No Brand name'}</div>
      <div></div>
      <div onClick={toggleWishlist} className={'heart'}>
        {inWishList ? <BsFillHeartFill color={'red'} size={20}/> : <BsHeart size={20}/>}
      </div>

    </div>
    <div className={'product-price'}>
      <BiRupee/>
      <div>
        {props.data['Unnamed: 17']}
      </div>
    </div>
  </div>;
}

export default Card;