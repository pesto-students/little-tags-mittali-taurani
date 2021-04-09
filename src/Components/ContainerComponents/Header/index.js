import myntra from '../../../static/myntra.png'
import './style.scss';
import Button from "../../DesignComponents/Button";
import MenuItem from "../../DesignComponents/MenuItem";
import React from "react";
import Search from "../Search";

function Header() {
  return (
    <div className="header">

      <div style={{display: "flex", }}>
        {/*<Button buttonText={"Customer Service "}/>*/}
        {/*<Button buttonText={"Newsletter"}/>*/}
        <div style={{flexGrow: 2}}/>
        <Button type={'user'} buttonText={"Sign in"}/>
        <Button type={'favourite'} buttonText={"Favourites"}/>
        <Button type={'bag'} buttonText={"Shopping bags (2)"}/>
      </div>

      <div className={'navContainer'}>
        <div className={'navWrapper'}>

          <img style={{width: '200px'}} src={myntra}/>
          <Search/>
        </div>


        <div className={"navBar"}>
          <MenuItem title={"Women"}>
            <button> Menu item 1 </button>
            <button> Menu item 2 </button>
            <button> Menu item 3 </button>
          </MenuItem>
          <MenuItem title={"Men"}>
            <button> Menu item 1 </button>
            <button> Menu item 2 </button>
            <button> Menu item 3 </button>
          </MenuItem>
          <MenuItem title={"Kids"}>
            <button> Menu item 1 </button>
            <button> Menu item 2 </button>
            <button> Menu item 3 </button>
          </MenuItem>
          <MenuItem title={"SALE"}>
            <button> Menu item 1 </button>
            <button> Menu item 2 </button>
            <button> Menu item 3 </button>
          </MenuItem>
        </div>
      </div>

    </div>
  );
}

export default Header;
