import { useState } from "react";
interface NoteFormProps {
  onAdd: (text: string) => void;
}
  const NoteForm =({ onAdd }: NoteFormProps) => {
    const [text, setText] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onAdd(text);
      setText("");
    };
    return <><form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter note..."
      />
      <button type="submit">Add Note</button>
    </form></>;
  }


export default NoteForm;
