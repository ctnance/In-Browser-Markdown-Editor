import { FC } from "react";
import { useToggler } from "../hooks";
import { PreviewBar, PreviewDisplay, MarkdownEditor } from "./";

interface Props {
  isMenuActive: boolean,
  toggleMenu: () => void,
}

const Main: FC<Props> = ({ isMenuActive, toggleMenu }) => {
  const [isMarkdownActive, toggleMarkdown] = useToggler(true);

  return (
    <main className="main">
      <PreviewBar isMarkdownActive={isMarkdownActive} toggleMarkdown={toggleMarkdown} />
      {isMarkdownActive ?
        <MarkdownEditor isMenuActive={isMenuActive} toggleMenu={toggleMenu} /> :
        <PreviewDisplay isMenuActive={isMenuActive} toggleMenu={toggleMenu} />
      }
    </main>
  );
}

export default Main;