import { MenuButton, DeleteFileButton, SaveFileButton } from "./buttons/index";
import FileInput from "./FileInput";

function Header() {
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