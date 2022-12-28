import React, { useContext } from 'react'
import { noteContext } from '../context/notes/NoteState'
const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { element, updateNote } = props;
    return (
        <>
            <div className="col-md-3" >
                <div className="card my-3">
                    <div className="card-body ">
                        <h5 className="card-title">{element.title}</h5>
                        <p className="card-text">{element.description}</p>
                        <i className="fa-solid fa-trash mx-3" onClick={() => { deleteNote(element.id) }}></i>
                        <i className="fa-regular fa-pen-to-square mx-3" onClick={() => { updateNote(element) }}></i>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Noteitem