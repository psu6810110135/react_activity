import type { Note } from "../types";

interface NoteListProps {
  notes: Note[];
}

const NoteList = ({ notes }: NoteListProps) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <div key={note.id} className="note-item">
          {note.text}
        </div>
      ))}
    </div>
  );
};

export default NoteList;
