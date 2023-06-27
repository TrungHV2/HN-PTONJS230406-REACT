import React, { Component } from 'react'
import SongItem from './SongItem'

export default class ListSong extends Component {

    handleEdit = (song) => {
        this.props.onEditSong(song);
    }
    handleRemove = (song) => {
        this.props.onDelSong(song);
    }

    render() {
        return (
            <ul>
                {this.props.songs.map(s => 
                    <SongItem key={s.id} song={s} onEdit={this.handleEdit} onRemove={this.handleRemove} />
                )}
            </ul>
        )
    }
}
