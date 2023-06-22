import './App.css';
import Home from './Home';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Home name="Hoàng Văn Trung" fullname="No Name" />
      <About value={'My value'} username="Admin" name="None" />
      <About value={'My value 2'} username="Admin 2" name="None 2" />
      <Contact />
    </div>
  );
}

function About(props) {
  return (
    <div>
      <h1>About {props.value}</h1>
      <h2>Thuộc tính "username" = {props.username}</h2>
      <h2>Thuộc tính "name" = {props.name}</h2>
    </div>
  )
}

export default App;
