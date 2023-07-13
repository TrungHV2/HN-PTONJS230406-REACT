import ProductComponent from "./components/ProductComponent";
import {useDispatch, useSelector} from 'react-redux'
import {productAction, currentAction} from './redux/constant/action-type'

function App() {
  const dispatch = useDispatch();
  const product = useSelector(s => s.currentProduct);

  const handleAdd = () => {
    dispatch(productAction.add({
      id: "SP03",
      name: 'Tủ lạnh',
      price: 5000
    }));
  }

  const handleRemove = () => {
    dispatch(productAction.remove("SP01"));
  }
  const handleChange = (ip) => {
    dispatch(currentAction.init({...product, [ip.name]: ip.value}))
  }
  const handleEdit = () => {
    dispatch(productAction.edit(product));
  }

  return (
    <div className="App">
      <h1>React Redux</h1>
      <p><input type="text" value={product?.id} onChange={e => handleChange(e.target)} name="id" /></p>
      <p><input type="text" value={product?.name} onChange={e => handleChange(e.target)} name="name" /></p>
      <p><input type="number" value={product?.price} onChange={e => handleChange(e.target)} name="price" /></p>
      <button onClick={handleAdd}>Add product</button>
      <button onClick={handleRemove}>Remove product</button>
      <button onClick={handleEdit}>Edit</button>
      <ProductComponent />
    </div>
  );
}

export default App;
