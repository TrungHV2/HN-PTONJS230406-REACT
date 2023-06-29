import React, { Component } from 'react'
import './App.css';
import Modal from './components/Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      users: [],
      user: {},
      orderBy: '',
      sort: 'asc'
    }
  }

  componentDidMount() {
    this.setState({
      users: [
        {
          id: "1",
          username: 'employee',
          password: '123456'
        },
        {
          id: "2",
          username: 'admin',
          password: '123455'
        },
        {
          id: "3",
          username: 'customer',
          password: '123457'
        }
      ]
    })
  }

  openModal = (user) => {
    this.setState({
      isShow: true,
      user: user
    })
  }

  closeModal = (user) => {
    if (user) { // Cập nhật
      if (this.state.users.find(u => u.id === user.id)) { // Sửa
        this.setState(state => ({
          users: state.users.map(x => {
            if (x.id === user.id) {
              x.username = user.username;
              x.password = user.password;
            }
            return x;
          })
        }))
      } else { // Thêm mới
        this.setState(state => ({
          users: [...state.users, user]
        }))
      }
    }
    // Đóng modal
    this.setState({
      isShow: false
    })
  }

  handleSort = (field) => {
    let _sort = field === this.state.orderBy ? (this.state.sort === 'asc' ? 'desc' : 'asc') : 'asc';
    let _users = [...this.state.users];
    _users = _users.sort((u1, u2) => u1[field].localeCompare(u2[field]) * (_sort === 'asc' ? 1 : -1));
    this.setState({
      users: [..._users],
      orderBy: field,
      sort: _sort
    })
  }

  render() {
    return (
      <div className="App">
        <p><button onClick={e => this.openModal({})}>Add new</button></p>
        <p><b>Tìm kiếm: </b><input type="text" /></p>
        <table border={1} cellPadding={10} cellSpacing={0} width={'100%'}>
          <thead>
            <tr>
              <th onClick={e => this.handleSort('id')}>Id</th>
              <th onClick={e => this.handleSort('username')}>Username</th>
              <th onClick={e => this.handleSort('password')}>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(u => <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.username}</td>
              <td>{u.password}</td>
              <td align='center'>
                <button onClick={e => this.openModal(u)}>Edit</button>&nbsp;
                <button>Remove</button>
              </td>
            </tr>)}
          </tbody>
        </table>
        {/* <button onClick={this.openModal}>Open modal</button> */}
        { this.state.isShow && <Modal data={this.state.user} onClose={this.closeModal} />}
      </div>
    );
  }
}

export default App;
