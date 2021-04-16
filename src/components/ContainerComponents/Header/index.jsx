import "./style.scss";
import React, { useState, useContext} from "react";
import myntra from "../../../logo.svg";
import Button from "../../DesignComponents/Button";
import MenuItem from "../../DesignComponents/MenuItem";
import Search from "../Search";
import LoginForm from "../Login";
import Modal from "../../DesignComponents/Modal";
import { CartContext } from "../../../services/cart/CartContext";

function Header() {
  const { itemCount } = useContext(CartContext);

  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="header">
      <div style={{ display: "flex" }}>
        {/*<Button buttonText={"Customer Service "}/>*/}
        {/*<Button buttonText={"Newsletter"}/>*/}
        <div style={{ flexGrow: 2 }} />
        <Button
          type={"user"}
          buttonText={"Login/Sign in"}
          onClickHandler={handleLoginClick}
        />
        <Button type={"favourite"} buttonText={"Favourites"} />
        <Button type={"bag"} buttonText={`Shopping bag (${itemCount})`} />
      </div>

      {showLogin && (
        <Modal>
          <LoginForm handleCloseModal={handleLoginClick} />
        </Modal>
      )}

      <div className={"navContainer"}>
        <div className={"navWrapper"}>
          <img style={{ width: "200px" }} src={myntra} alt="Myntra Logo" />
          <Search />
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
