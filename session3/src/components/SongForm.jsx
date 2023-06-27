import React, { Component } from 'react'
import * as uuid from 'uuid'

export default class SongForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songName: '',
      isEdit: false,
      refIp: React.createRef()
    }
    //this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.song.id !== this.props.song.id) {
      this.setState({
        songName: nextProps.song.name,
        isEdit: true
      })
    }
    return true;
  }

  handleClick = (evt) => {
    // this.state.refIp.current <=> document.getElementById()
    let song = {
      name: this.state.songName
    }
    console.log(song)
    if (this.state.isEdit) {
      song.id = this.props.song.id;
      this.props.onSave(song);
    } else {
      song.id = uuid.v4();
      this.props.onInsert(evt, song);
    }

    // clear form
    this.setState({
      songName: '',
      isEdit: false
    })
  }

  handleCancel = () => {
    // clear form
    this.setState({
      songName: '',
      isEdit: false
    })
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.state.refIp} value={this.state.songName} onChange={e => this.setState({songName: e.target.value})} />
        <button onClick={this.handleClick}>{this.state.isEdit ? "Lưu" : "Thêm"}</button>
        {this.state.isEdit && <button onClick={this.handleCancel}>Hủy</button>}
      </div>
    )
  }
}
