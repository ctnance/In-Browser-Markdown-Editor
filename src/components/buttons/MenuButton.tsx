import { FC } from "react";
import { useToggler } from "../../hooks/index";
import Menu from "../Menu";

import IconMenu from "../../assets/icon-menu.svg";
import IconClose from "../../assets/icon-close.svg";

const MenuButton: FC = () => {
  const [isActive, toggle] = useToggler(false);

  return (
    <>
      <button className="btn menu-btn" onClick={toggle}><div className="menu-btn--icon-container">
        <img className={`menu-btn--icon ${isActive ? "close" : "menu"}-icon`} src={isActive ? IconClose : IconMenu} alt="button icon" />
      </div></button>
      {isActive && <Menu />}
    </>
  )
}

export default MenuButton;