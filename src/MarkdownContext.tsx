import { FC, createContext, useState } from "react";
import markdownData from "./data/data.json";

interface MarkdownObject {
  id: number,
  createdAt: string,
  name: string,
  content: string,
}

interface DefaultValues {
  markdownNotes: MarkdownObject[],
  activeNoteId: Number,
}

const MarkdownContext = createContext({} as DefaultValues);

interface Props {
  children?: JSX.Element
}

const MarkdownContextProvider: FC<Props> = ({ children }) => {
  const [markdownNotes, setMarkdownNotes] = useState(markdownData);
  const [activeNoteId, setActiveNoteId] = useState(0);

  return (
    <MarkdownContext.Provider value={{ markdownNotes, activeNoteId }}>
      {children}
    </MarkdownContext.Provider>
  )
}

export { MarkdownContextProvider, MarkdownContext }