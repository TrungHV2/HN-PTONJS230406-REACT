import './App.css';
import {useDispatch, useSelector} from 'react-redux'


function App() {
  const dispatch = useDispatch();
  const users = useSelector(s => s.users);
  // let _iterator = iterator();

  // console.log(_iterator.next());
  // console.log(_iterator.next());
  // console.log(_iterator.next());
  // console.log(_iterator.next());
  // console.log(_iterator.next());
  // console.log(_iterator.next());
  const handleAction = () => {
    console.log("B1: gửi action USER_FECTH lên store");
    dispatch({type: 'USER_FECTH', payload: 'data'});
  }


  return (
    <div className="App">
      <h1>Redux Saga</h1>
      <button onClick={e => handleAction()}>Fetch()</button>
      <h2>List users</h2>
      <ul>
        {users.map(u => <li key={u.id}>{u.username}</li>)}
      </ul>
    </div>
  );
}

// Generator function
function* iterator() {
  console.log("Start....");
  yield "Giá trị 1";
  yield "Giá trị 2";
  yield "Giá trị 3";
  yield "Giá trị 4";
  yield "Giá trị 5";
}

export default App;
