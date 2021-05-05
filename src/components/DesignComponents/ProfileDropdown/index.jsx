import "./style.scss";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FirebaseContext from "../../../services/firebase/FirebaseContext";
import { SessionContext } from "../../../services/session/SessionContext";
import { ROUTE } from "../../../helper/constants";

const ProfileDropdown = () => {
  const firebase = useContext(FirebaseContext);

  const { authUser } = useContext(SessionContext);

  const handleLogOutClick = () => {
    firebase.doSignOut();
  };

  return (
    <div className="nav__menu-item">
      <h4 className="welcome-msg">Hey, {authUser.userName}</h4>
      <ul className="nav__submenu full-width">
        <li className="nav__submenu-item ">
          <Link className="link" to={ROUTE.PAST_ORDERS}>
            <button type="button">
              Past Orders
            </button>
          </Link>
        </li>
        <li className="nav__submenu-item ">
          <button type="button" onClick={handleLogOutClick}>
            Log Out
          </button>
        </li>
      </ul>
    </div>
  );

  //   const data = [
  //     {
  //       title: `Welcome ${authUser.userName}`,
  //       description: ["Logout", "Your Orders"],
  //     },
  //   ];
  //   const content = data.map((data, key) => {
  //     return (
  //       <li {...{ className: "accordion-list__item", key }}>
  //         <AccordionItem {...data} />
  //       </li>
  //     );
  //   });

  //   return (
  //     <div className="nav-profiles-dropdown-wrapper">
  //       <ul className="accordion-list">{content}</ul>
  //     </div>
  //   );
};

export default ProfileDropdown;
