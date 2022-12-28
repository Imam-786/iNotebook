import React, { useContext, useRef, useState } from 'react'
import { noteContext } from '../context/notes/NoteState'
import Addnote from './Addnote';
import Noteitem from './Noteitem';
export default function Notes() {
    const context = useContext(noteContext);
    const { notes,addNote } = context;
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "" })
    const ref = useRef(null);

    const updateNote = (currentNote) => {
        ref.current.click();
        console.log(currentNote);
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
        console.log(note);
    }

    const editNote=(e)=>{
        addNote(note.etitle,note.edescription);
    }
    return (
        <>
            <Addnote />

            {/* <!-- Button trigger modal --> */}
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" value={note.etitle} minLength={5} required onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} minLength={5} required onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={()=>{editNote(note)}}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row my-3">
                    <h2 >Your Notes</h2>
                    {notes.map((element) => {
                        return < Noteitem key={element.id} updateNote={updateNote} element={element} />
                    })}
                </div>
            </div>
        </>
    )
}
