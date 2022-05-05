import { FC, useContext } from "react";
import NewDocumentButton from "./buttons/NewDocumentButton";
import ThemeButton from "./buttons/ThemeButton";

import Logo from "../assets/logo.svg";

const Menu: FC = () => {
  return (
    <div className="menu">
      <img src={Logo} alt="menu icon" />
      <p className="menu--document-text">My Documents</p>
      <NewDocumentButton />
      <ThemeButton />
    </div>
  )
}

export default Menu;