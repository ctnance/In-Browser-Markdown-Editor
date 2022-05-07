import { FC } from "react";
import { PreviewBar, MarkdownEditor } from "./";

interface Props {
  toggleMenu: () => void,
}

const Main: FC<Props> = ({ toggleMenu }) => {
  return (
    <main className="main">
      <PreviewBar />
      <MarkdownEditor toggleMenu={toggleMenu} />
    </main>
  );
}

export default Main;