import React, { createContext, useState } from 'react'

const noteContext = createContext();
const NoteState = (props) => {
    const notesInitial = [
        {
            "id": 1,
            "title": "Apple",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, totam voluptates? Placeat voluptatum sequi quae, esse ipsum quas, officiis veritatis velit fugit asperiores quisquam voluptatibus magni repellendus doloremque qui possimus sunt numquam iure alias"
        },
        {
            "id": 2,
            "title": "Mango",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, totam voluptates? Placeat voluptatum sequi quae, esse ipsum quas, officiis veritatis velit fugit asperiores quisquam voluptatibus magni repellendus doloremque qui possimus sunt numquam iure alias"
        },
        {
            "id": 3,
            "title": "Banana",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, totam voluptates? Placeat voluptatum sequi quae, esse ipsum quas, officiis veritatis velit fugit asperiores quisquam voluptatibus magni repellendus doloremque qui possimus sunt numquam iure alias"
        },
        {
            "id": 4,
            "title": "Pineapple",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, totam voluptates? Placeat voluptatum sequi quae, esse ipsum quas, officiis veritatis velit fugit asperiores quisquam voluptatibus magni repellendus doloremque qui possimus sunt numquam iure alias"
        },
        {
            "id": 5,
            "title": "Watermelon",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, totam voluptates? Placeat voluptatum sequi quae, esse ipsum quas, officiis veritatis velit fugit asperiores quisquam voluptatibus magni repellendus doloremque qui possimus sunt numquam iure alias"
        },
        {
            "id": 6,
            "title": "Grapes",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, totam voluptates? Placeat voluptatum sequi quae, esse ipsum quas, officiis veritatis velit fugit asperiores quisquam voluptatibus magni repellendus doloremque qui possimus sunt numquam iure alias"
        }
    ]
    
    const [notes, setNotes] = useState(notesInitial);
    //Add note
    const addNote = (title, description) => {
        const note = {
            "id": 7,
            "title": title,
            "description": description
        }
        setNotes(notes.concat(note));
    }
    //Delete note
    const deleteNote = (id) => {
        console.log("delete Note" + id);
        const newNotes = notes.filter((note) => { return note.id !== id });
        setNotes(newNotes);
    }
    //Edit note
    const editNote = (id,title,description) => {
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if(element.id===id){
                notes[index].title=title;
                notes[index].description=description;
            }
        }
        console.log("edit Note");
    }
    return (
        <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState;
export { noteContext };