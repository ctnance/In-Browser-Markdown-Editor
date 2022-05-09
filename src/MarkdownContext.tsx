import { FC, createContext, useState, useEffect } from "react";
import markdownData from "./data/data.json";
import { getCurrentDate } from "./helpers/utils";
import { nanoid } from "nanoid";

interface MarkdownObject {
  id: string,
  createdAt: string,
  name: string,
  content: string,
}

interface DefaultValues {
  markdownNotes: MarkdownObject[],
  activeNoteId: string,
  updateActiveNoteId: (id: string) => void,
  createNewNote: () => void,
  bumpNote: (id: string) => void,
  updateNoteName: (name: string) => void,
  updateNoteContent: (content: string) => void,
  saveNotes: () => void,
  deleteActiveNote: () => void,
}

const MarkdownContext = createContext({} as DefaultValues);

interface Props {
  children?: JSX.Element
}

const MarkdownContextProvider: FC<Props> = ({ children }) => {
  const [markdownNotes, setMarkdownNotes] = useState(markdownData);
  const [activeNoteId, setActiveNoteId] = useState(markdownData[0].id || "");

  useEffect(() => {
    if (markdownNotes.length <= 0) {
      createNewNote();
    }
  }, [markdownNotes]);

  function updateActiveNoteId(id: string) {
    setActiveNoteId(id);
  }

  function createNewNote() {
    const id = nanoid();
    setMarkdownNotes(prev => (
      [
        {
          "id": id,
          "createdAt": getCurrentDate(),
          "name": "untitled-document.md",
          "content": ""
        },
        ...prev,
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

  function bumpNote(id: string) {
    // Loop through current notes and put the note
    // with the given id at the top of the list
    setMarkdownNotes(prevNotes => {
      const newNotes = [];
      for (let i = 0; i < prevNotes.length; i++) {
        const prevNote = prevNotes[i];
        if (prevNote.id === id) {
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

  function saveNotes() {
    const jsonNotes = JSON.stringify(markdownNotes);
    localStorage.setItem("notes", jsonNotes);
  }

  function deleteActiveNote() {
    setActiveNoteId(markdownNotes[1].id);
    setMarkdownNotes(prev => (
      prev.filter(note => {
        return note.id !== activeNoteId;
      })
    ));
  }

  return (
    <MarkdownContext.Provider value={{ markdownNotes, activeNoteId, updateActiveNoteId, createNewNote, bumpNote, updateNoteName, updateNoteContent, saveNotes, deleteActiveNote }}>
      {children}
    </MarkdownContext.Provider>
  )
}

export { MarkdownContextProvider, MarkdownContext }