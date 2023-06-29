import React, { Component } from 'react'
import './Modal.css'

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        this.setState(state => ({
            user: {...this.props.data}
        }))
    }

    closeModal = (evt) => {
        if (evt.target.className.indexOf('modal-wrap') >= 0) {
            this.props.onClose();
        }
    }

    handleSave = () => {
        this.props.onClose(this.state.user);
    }

    handleChange = (evt) => {
        this.setState(state => ({
            user: {...state.user, [evt.target.name]: evt.target.value}
        }));
    }

    render() {
        return (
            <>
                <div onClick={e => this.closeModal(e)} className={'modal-wrap'}>
                    <div className="modal">
                        <div className='modal-head'>
                            <h1>Modal {this.props.data.username}</h1>
                        </div>
                        <div className='modal-body'>
                            <p><input onChange={this.handleChange} type="text" name="id" value={this.state.user?.id} /></p>
                            <p><input onChange={this.handleChange} type="text" name="username" value={this.state.user?.username} /></p>
                            <p><input onChange={this.handleChange} type="text" name="password" value={this.state.user?.password} /></p>
                        </div>
                        <div className='modal-footer'>
                            <button onClick={this.handleSave}>Save</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
