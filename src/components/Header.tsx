import { FC } from "react";
import { MenuButton, DeleteFileButton, SaveFileButton } from "./buttons/index";
import { FileInput } from "./";

const Header: FC = () => {
  return (
    <header className="header">
      <MenuButton />
      <FileInput />
      <DeleteFileButton />
      <SaveFileButton />
    </header>
  )
}

export default Header;