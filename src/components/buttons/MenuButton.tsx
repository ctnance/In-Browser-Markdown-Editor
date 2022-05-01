import IconMenu from "../../assets/icon-menu.svg";

function MenuButton() {
  return (
    <button className="btn menu-btn"><img className="menu-btn--icon" src={IconMenu} alt="button icon" /></button>
  )
}

export default MenuButton;