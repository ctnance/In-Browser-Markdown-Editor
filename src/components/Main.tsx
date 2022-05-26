import { FC, useState, useEffect } from "react";
import { useToggler } from "../hooks";
import { PreviewDisplay, MarkdownEditor } from "./";

interface Props {
  isMenuActive: boolean,
  toggleMenu: () => void,
}

const Main: FC<Props> = ({ isMenuActive, toggleMenu }) => {
  const [isMarkdownActive, toggleMarkdown] = useToggler(true);
  // matches -> true = media query: screen matches tablet size--show both markdown and preview if markdown active; false = vice versa
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  const markdownEditor = <MarkdownEditor previewIsActive={matches} toggleMarkdown={toggleMarkdown} isMenuActive={isMenuActive} toggleMenu={toggleMenu} />;
  const previewDisplay = <PreviewDisplay isMarkdownActive={isMarkdownActive} toggleMarkdown={toggleMarkdown} isMenuActive={isMenuActive} toggleMenu={toggleMenu} />;

  return (
    <main className="main">
      {matches ? <div className="markdown-grid">{isMarkdownActive && markdownEditor}{previewDisplay}</div> : isMarkdownActive ?
        markdownEditor :
        previewDisplay}
    </main>
  );
}

export default Main;