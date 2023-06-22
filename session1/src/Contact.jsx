import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    const contacts = ['0988923203', '0987654321', '113', '115'];
    return (
      <div>
        <h1>Contact Pages</h1>
        <ul>
            {contacts.map((contact, index) => <li key={index}>
                <b><u>{contact}</u></b>
            </li>)}
        </ul>
      </div>
    )
  }
}
