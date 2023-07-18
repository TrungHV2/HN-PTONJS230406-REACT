import './App.css';
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3100/'
})

function App() {

  const handleFetch = () => {
    fetch('http://localhost:3100/users', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (!response.ok)
          throw Error(response.statusText)
        return response.json();
      })
      .then(data => console.log("Fetch", data))
      .catch(err => console.log("Fetch", err))
  }
  const handleFetchPost = () => {
    fetch('http://localhost:3100/users', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: "customer6",
        password: "123456",
        email: "customer6@gmail.com"
      })
    })
      .then(response => {
        if (!response.ok)
          throw Error(response.statusText)
        return response.json();
      })
      .then(data => console.log("Fetch", data))
      .catch(err => console.log("Fetch", err))
  }

  const handleAxios = async () => {
    let response = await http.get('users');
      // .then(res => console.log("Axios", res.data))
      // .catch(err => console.log("Axios", err))
    console.log(response.data);
  }
  const handleAxiosPost = () => {
    http.post('users', {
      username: "customer7",
      password: "123456",
      email: "customer7@gmail.com"
    })
    .then(res => console.log("Axios", res.data))
    .catch(err => console.log("Axios", err))
  }

  return (
    <div className="App">
      <button onClick={handleFetch}>Fetch()</button> |
      <button onClick={handleAxios}>Axios()</button> |
      <button onClick={handleFetchPost}>Fetch POST()</button> |
      <button onClick={handleAxiosPost}>Axios POST()</button>
    </div>
  );
}

export default App;
