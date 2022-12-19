import React from "react";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";

import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: "Help", artist: "The Beatles", album: "Abbey Road", id: 1 },
        { name: "name2", artist: "artist2", album: "album2", id: 2 },
        { name: "name3", artist: "artist3", album: "album3", id: 3 },
      ],
      playlistName: "Party-songs",
      playlistTracks: [
        { name: "Help", artist: "The Beatles", album: "Abbey Road", id: 1 },
        { name: "name4", artist: "artist4", album: "album4", id: 4 },
        { name: "name5", artist: "artist5", album: "album5", id: 5 },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter((savedTrack) => savedTrack.id !== track.id);
    this.setState({ playlistTracks: tracks });
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
