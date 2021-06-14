import { combineReducers } from "redux";

// Reducers

// Static list of songs reducer
const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:05" },
    { title: "All Star", duration: "3:15" },
    {
      title: "I want it that way",
      duration: "1:45",
    },
  ];
};

// Selected Song reducer
const selectedSongReducer = (
  selectedSong = null,
  action
) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
