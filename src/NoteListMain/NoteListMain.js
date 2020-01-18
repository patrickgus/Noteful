import React from "react";
import { Link } from "react-router-dom";
import Note from "../Note/Note";
import CircleButton from "../CircleButton/CircleButton";
import "./NoteListMain.css";
import AppContext from "../Context";
import { getNotesForFolder } from "../notes-helpers";

export default class NoteListMain extends React.Component {
  static contextType = AppContext;

  render() {
    const { folderId } = this.props.match.params;
    const notesForFolder = getNotesForFolder(this.context.notes, folderId);

    return (
      <section className="NoteListMain">
        <ul>
          {notesForFolder.map(note => (
            <li key={note.id}>
              <Note
                match={this.props.match}
                id={note.id}
                name={note.name}
                modified={note.modified}
              />
            </li>
          ))}
        </ul>
        <div className="NoteListMain__button-container">
          <CircleButton
            tag={Link}
            to={
              this.props.match.params.folderId
                ? `/add-note?folderId=${this.props.match.params.folderId}`
                : "/add-note"
            }
            type="button"
            className="NoteListMain__add-note-button"
          >
            Add Note
          </CircleButton>
        </div>
      </section>
    );
  }
}

NoteListMain.defaultProps = {
  notes: []
};
