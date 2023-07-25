import { useDispatch, useSelector } from 'react-redux'
import { up, down,upTo, downTo } from './redux/slice/counterSlice'
import FileUpload from './components/FileUpload';

function App() {
  const count = useSelector(s => s.counter.count);
  const users = useSelector(s => s.user.users)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={e => dispatch(up())}>Up()</button>
      <button onClick={e => dispatch(down())}>Down()</button>
      <button onClick={e => dispatch(upTo(5))}>UpTo(5)</button>
      <button onClick={e => dispatch(downTo(5))}>DownTo(5)</button>
      <button onClick={e => dispatch({type: "USER_FETCH"})}>USER_FETCH(5)</button>
      <ul>
        {users.map(u => <li key={u.id}>{u.username}</li>)}
      </ul>
      <FileUpload />
    </div>
  );
}

export default App;
