import { useState, useContext, createContext } from 'react'
import ExUseEffect from './components/ExUseEffect';
import {MyContext} from './index'
import About from './components/About';
import Contact from './components/Contact';
import TableComponent from './components/Table';

export const ThemeContext = createContext();

function App() {
  //#region
  let initCount = 5;
  // Khai báo và khởi tạo state
  const [count, setCount] = useState(initCount);
  const [isRender, setIsRender] = useState(true);
  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  }
  //#endregion
  
  //#region
  const [txtColor, setTxtColor] = useState('black');
  const [bgColor, setBgColor] = useState('#ccc');
  let dataShare = {
    txtColor: txtColor, 
    bgColor
  };
  // Sử dụng context
  const {color, colorBg} = useContext(MyContext);

  const darkMode = () => {
    setBgColor('#535353');
    setTxtColor('#fff');
  }
  const lightMode = () => {
    setBgColor('#ccc');
    setTxtColor('#000');
  }
  //#endregion
  return (
    <div className="App">
      <>
        {isRender && <ExUseEffect />}
        <h1 style={{color: color, backgroundColor: colorBg}}>Hello {count}</h1>
        <button onClick={e => setIsRender(!isRender)}>On/Off</button>
        <button onClick={e => handleClick()}>Counter</button>
        <p></p>
      </>
      <button onClick={darkMode}>Dark</button>
      <button onClick={lightMode}>Light</button>
      <ThemeContext.Provider value={dataShare}>
        <About />
        <Contact />
      </ThemeContext.Provider>
      <TableComponent />
    </div>
  );
}

export default App;
