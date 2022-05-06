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
  activeNoteId: number,
  updateActiveNoteId: (id: number) => void,
}

const MarkdownContext = createContext({} as DefaultValues);

interface Props {
  children?: JSX.Element
}

const MarkdownContextProvider: FC<Props> = ({ children }) => {
  const [markdownNotes, setMarkdownNotes] = useState(markdownData);
  const [activeNoteId, setActiveNoteId] = useState(0);

  function updateActiveNoteId(id: number) {
    console.log("UPDATING ACTIVE NOTE ID TO: " + id)
    setActiveNoteId(id);
  }

  return (
    <MarkdownContext.Provider value={{ markdownNotes, activeNoteId, updateActiveNoteId }}>
      {children}
    </MarkdownContext.Provider>
  )
}

export { MarkdownContextProvider, MarkdownContext }