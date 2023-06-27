import React, { Component } from 'react'

export default class SongItem extends Component {
    // Initialize: Khởi tạo 
    constructor(props) {
        super(props)
        this.state= {}
    }

    // Mount: Cài đặt DOM Object lên Tree DOM (đưa các phần tử thẻ trong component lên giao diện)
        // Sẽ cài đặt
        componentWillMount() {
            console.log('componentWillMount')
        }

        // Cài đặt render()


        // Đã cài đặt
        componentDidMount() {
            console.log('componentDidMount')
        }


    // Update: Cập nhật thông tin thay đổi props và state
        shouldComponentUpdate(newProps, newState) {
            // Muốn tối ưu việc render
            // Có thể kiểm tra newProps và newState có thay đổi gì không
            return true;
        }
        // Sẽ update
        componentWillUpdate() {
            console.log('componentWillUpdate')
        }

        // Update re-render()

        // Đã update
        componentDidUpdate() {
            console.log('componentDidUpdate')
        }

    // Unmount: Gỡ cài đặt DOM Object khỏi Tree DOM (xóa bỏ các phần tử thẻ của component khỏi giao diện)
        // Sẽ gỡ cài đặt
        componentWillUnmount() {
            console.log('componentWillUnmount');
        }

    handleClick = (song) => {
        this.props.onEdit(song);
    }
    handleDel = (song) => {
        this.props.onRemove(song);
    }

    render() {
        return (
            <li>
                {this.props.song.name} <button onClick={e => this.handleClick(this.props.song)}>Sửa</button> | <button onClick={e => this.handleDel(this.props.song)}>Xóa</button>
            </li>
        )
    }
}
