import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import type { Note } from "./types";
import { useState, useEffect } from "react";

const App = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const addNote = (text: string) => {
    const newNote: Note = {
      id: Date.now(),
      text: text,
    };
    setNotes([...notes, newNote]);
  };
  useEffect(() => {
    const saved = localStorage.getItem("notes");
    if (saved) {
      setNotes(JSON.parse(saved) as Note[]);
    }
  }, []);

  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);

  return (
    <>
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} />
    </>
  );
};

export default App;
