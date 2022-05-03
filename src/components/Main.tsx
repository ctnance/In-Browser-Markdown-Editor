import { FC } from "react";
import PreviewBar from "./PreviewBar";
import MarkdownEditor from "./MarkdownEditor";

const Main: FC = () => {
  return (
    <main className="main">
      <PreviewBar />
      <MarkdownEditor />
    </main>
  );
}

export default Main;