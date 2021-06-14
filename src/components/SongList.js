import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  // Helper method
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() =>
                this.props.selectSong(song)
              }
            >
              Select
            </button>
          </div>
          <div className="content">
            {song.title}
          </div>
        </div>
      );
    });
  }
  render() {
    // this.props === {songs: state.songs}

    return (
      <div className="ui divided list">
        {this.renderList()}
      </div>
    );
  }
}

// Configuring connect cmp; passing state gives access to the entire state obj

const mapStateToProps = (state) => {
  // Gets called with all the data inside redux store; anytime data is changed this re-runs with the newly created state object
  // Return key of songs; pull out songs from the state obj
  return { songs: state.songs };
};

export default connect(mapStateToProps, {
  selectSong: selectSong,
})(SongList);
