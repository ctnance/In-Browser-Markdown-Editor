import { FC, createContext, useState } from "react";
import markdownData from "./data/data.json";
import { getCurrentDate } from "./helpers/utils";

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
  createNewNote: (id: number) => void,
  updateNoteName: (name: string) => void,
  updateNoteContent: (content: string) => void
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

  function createNewNote(id: number) {
    setMarkdownNotes(prev => (
      [
        ...prev,
        {
          "id": id,
          "createdAt": getCurrentDate(),
          "name": "untitled-document.md",
          "content": ""
        }
      ]
    ));
    setActiveNoteId(id);
  }

  function updateNoteName(name: string) {
    setMarkdownNotes(prev => (
      prev.map(note => {
        if (note.id === activeNoteId) {
          note.name = name;
        }
        return note;
      })
    ));
  }

  function updateNoteContent(content: string) {
    setMarkdownNotes(prev => (
      prev.map(note => {
        if (note.id === activeNoteId) {
          note.content = content;
        }
        return note;
      })
    ));
  }

  return (
    <MarkdownContext.Provider value={{ markdownNotes, activeNoteId, updateActiveNoteId, createNewNote, updateNoteName, updateNoteContent }}>
      {children}
    </MarkdownContext.Provider>
  )
}

export { MarkdownContextProvider, MarkdownContext }