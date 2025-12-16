import type { Note } from "../types";

interface NoteListProps {
  notes: Note[];
  onDelete: (id: number) => void;
}

const NoteList = ({ notes, onDelete }: NoteListProps) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <div key={note.id} className="note-item">
          {note.text}
          <button onClick={() => onDelete(note.id)} className="delete-btn">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
