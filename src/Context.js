import React from "react";

const AppContext = React.createContext({
  folders: [],
  notes: [],
  onDeleteNote: () => {},
  updateNoteState: () => {},
  addFolder: () => {},
  addNote: () => {}
});

export default AppContext;
