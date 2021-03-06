import React from "react";
import CircleButton from "../CircleButton/CircleButton";
import "./NotePageNav.css";
import { findNote, findFolder } from "../notes-helpers";
import AppContext from "../Context";

export default class NotePageNav extends React.Component {
  static contextType = AppContext;

  render() {
    const { noteId } = this.props.match.params;
    const note = findNote(this.context.notes, noteId) || {};
    const folder = findFolder(this.context.folders, note.folderId);

    return (
      <div className="NotePageNav">
        <CircleButton
          tag="button"
          role="link"
          onClick={() => this.props.history.goBack()}
          className="NotePageNav__back-button"
        >
          Go Back
        </CircleButton>
        {folder && <h3 className="NotePageNav__folder-name">{folder.name}</h3>}
      </div>
    );
  }
}

NotePageNav.defaultProps = {
  history: {
    goBack: () => {}
  }
};
