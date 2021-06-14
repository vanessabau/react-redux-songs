import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  render() {
    // this.props === {songs: state.songs}
    console.log(this.props);
    return <div>SongList</div>;
  }
}

// Configuring connect cmp; passing state gives access to the entire state obj

const mapStateToProps = (state) => {
  // Return key of songs; pull out songs from the state obj
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
