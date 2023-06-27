import ListSong from "./components/ListSong";
import SongForm from "./components/SongForm";
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      song: ''
    }
  }

  handleInsert = (evt, song) => {
    // alert("AppComponent: " + songName);
    this.setState(s => ({songs: [...s.songs, song]}), () => {
      console.log(this.state.songs)
    })

    // this.setState({songs: [...this.state.songs, songName]});
    // console.log(this.state.songs);
  }

  handleEditSong = (song) => {
    // alert('Editting....' + songName);
    this.setState({song: song});
  }
  handleDelSong = (song) => {
    // alert('Editting....' + songName);
    this.setState({songs: this.state.songs.filter(x => x.id !== song.id)});
  }

  handleSave = (songUpdate) => {
    this.setState({
      songs: [...this.state.songs.map(s => {
        if (s.id === songUpdate.id) {
          s.name = songUpdate.name;
        }
        return s;
      })]
    })
  }


  render() {
    return (
      <div className="App">
        <SongForm ref={this.state.refForm} onInsert={this.handleInsert} onSave={this.handleSave} song={this.state.song} />
        <ListSong songs={this.state.songs} onEditSong={this.handleEditSong} onDelSong={this.handleDelSong} />
      </div>
    )
  }
}
