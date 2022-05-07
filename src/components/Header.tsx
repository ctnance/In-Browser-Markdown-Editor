import { FC } from "react";
import { MenuButton, DeleteFileButton, SaveFileButton } from "./buttons/index";
import { FileInput } from "./";

interface Props {
  isMenuActive: boolean,
  toggleMenu: () => void,
}

const Header: FC<Props> = ({ isMenuActive, toggleMenu }) => {
  return (
    <header className="header">
      <MenuButton isActive={isMenuActive} toggle={toggleMenu} />
      <FileInput isMenuActive={isMenuActive} toggleMenu={toggleMenu} />
      <DeleteFileButton />
      <SaveFileButton />
    </header>
  )
}

export default Header;