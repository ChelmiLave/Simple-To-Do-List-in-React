import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import notes from "../notes"; // Import the pre-defined notes from notes.js

function App() {
  const [notesState, setNotes] = useState([]);

  // Load notes from localStorage or initialize with pre-defined notes
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) {
      setNotes(storedNotes); // Load from localStorage if available
    } else {
      setNotes(notes); // Set pre-defined notes if localStorage is empty
      localStorage.setItem("notes", JSON.stringify(notes)); // Save pre-defined notes to localStorage
    }
  }, []);

  // Add a new note and update localStorage
  function addNote(newNote) {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes, newNote];
      localStorage.setItem("notes", JSON.stringify(updatedNotes)); // Save to localStorage
      return updatedNotes;
    });
  }

  // Delete a note and update localStorage
  function deleteNote(id) {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter((noteItem, index) => index !== id);
      localStorage.setItem("notes", JSON.stringify(updatedNotes)); // Update localStorage
      return updatedNotes;
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notesState.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
