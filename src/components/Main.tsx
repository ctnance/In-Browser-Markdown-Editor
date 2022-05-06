import { FC } from "react";
import { PreviewBar, MarkdownEditor } from "./";

const Main: FC = () => {
  return (
    <main className="main">
      <PreviewBar />
      <MarkdownEditor />
    </main>
  );
}

export default Main;