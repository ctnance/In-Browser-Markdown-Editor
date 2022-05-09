import { NewReleasesTwoTone } from "@material-ui/icons";
import { FC, createContext, useState, useEffect } from "react";
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
  bumpNote: (id: number) => void,
  updateNoteName: (name: string) => void,
  updateNoteContent: (content: string) => void,
  deleteActiveNote: () => void,
}

const MarkdownContext = createContext({} as DefaultValues);

interface Props {
  children?: JSX.Element
}

const MarkdownContextProvider: FC<Props> = ({ children }) => {
  const [markdownNotes, setMarkdownNotes] = useState(markdownData);
  const [activeNoteId, setActiveNoteId] = useState(markdownData[0].id | 0);

  useEffect(() => {
    if (markdownNotes.length <= 0) {
      const newId = 0;
      createNewNote(newId);
    }
  }, [markdownNotes]);

  function updateActiveNoteId(id: number) {
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

  function bumpNote(id: number) {
    // Loop through current notes and put the note
    // with the given id at the top of the list
    setMarkdownNotes(prevNotes => {
      const newNotes = [];
      for (let i = 0; i < prevNotes.length; i++) {
        const prevNote = prevNotes[i];
        if (prevNotes[i].id === id) {
          newNotes.unshift(prevNote);
        } else {
          newNotes.push(prevNote);
        }
      }
      return newNotes;
    });
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

  function deleteActiveNote() {
    setMarkdownNotes(prev => (
      prev.filter(note => {
        return note.id !== activeNoteId;
      })
    ));
    setActiveNoteId(markdownNotes[0].id);
  }

  return (
    <MarkdownContext.Provider value={{ markdownNotes, activeNoteId, updateActiveNoteId, createNewNote, bumpNote, updateNoteName, updateNoteContent, deleteActiveNote }}>
      {children}
    </MarkdownContext.Provider>
  )
}

export { MarkdownContextProvider, MarkdownContext }