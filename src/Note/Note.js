import React from "react";
import { withRouter, Link } from "react-router-dom";
import { format, parseISO } from "date-fns";
import "./Note.css";
import AppContext from "../Context";
import PropTypes from "prop-types";

function deleteNoteRequest(noteId, callback) {
  const deleteURL = `http://localhost:9090/notes/${noteId}`;

  fetch(deleteURL, {
    method: "DELETE",
    headers: {
      "content-type": "application/json"
    }
  })
    .then(res => {
      if (!res.ok) {
        return res.json().then(error => {
          throw error;
        });
      }
      return res.json();
    })
    .then(() => {
      callback(noteId);
    })
    .catch(error => alert(error));
}

class Note extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <div className="Note">
            <h2 className="Note__title">
              <Link to={`/note/${this.props.id}`}>{this.props.name}</Link>
            </h2>
            <button
              className="Note__delete"
              type="button"
              onClick={() => {
                deleteNoteRequest(this.props.id, context.deleteNote);
                this.props.history.push("/");
              }}
            >
              remove
            </button>
            <div className="Note__dates">
              <div className="Note__dates-modified">
                Modified{" "}
                <span className="Date">
                  {format(parseISO(this.props.modified), "do MMM yyyy")}
                </span>
              </div>
            </div>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

Note.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  modified: PropTypes.string
};

export default withRouter(Note);
