import { useToggler } from "../../hooks/index";

import IconMenu from "../../assets/icon-menu.svg";
import IconClose from "../../assets/icon-close.svg";

function MenuButton() {
  const [isActive, toggle] = useToggler(true);

  return (
    <button className="btn menu-btn" onClick={toggle}><div className="menu-btn--icon-container">
      <img className={`menu-btn--icon ${isActive ? "close" : "menu"}-icon`} src={isActive ? IconClose : IconMenu} alt="button icon" />
    </div></button>
  )
}

export default MenuButton;