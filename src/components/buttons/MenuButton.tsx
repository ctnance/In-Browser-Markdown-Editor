import { FC } from "react";

import IconMenu from "../../assets/icon-menu.svg";
import IconClose from "../../assets/icon-close.svg";

interface Props {
  isActive: boolean,
  toggle: () => void,
}

const MenuButton: FC<Props> = ({ isActive, toggle }) => {

  return (
    <button className="btn menu-btn" onClick={toggle}>
      <div className="menu-btn--icon-container">
        <img className={`menu-btn--icon ${isActive ? "close" : "menu"}-icon`} src={isActive ? IconClose : IconMenu} alt="button icon" />
      </div>
    </button>
  )
}

export default MenuButton;