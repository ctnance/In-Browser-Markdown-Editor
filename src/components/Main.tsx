import { FC } from "react";
import { PreviewBar, MarkdownEditor } from "./";

interface Props {
  isMenuActive: boolean,
  toggleMenu: () => void,
}

const Main: FC<Props> = ({ isMenuActive, toggleMenu }) => {
  return (
    <main className="main">
      <PreviewBar />
      <MarkdownEditor isMenuActive={isMenuActive} toggleMenu={toggleMenu} />
    </main>
  );
}

export default Main;