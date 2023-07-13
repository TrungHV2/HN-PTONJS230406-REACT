import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {currentAction} from '../redux/constant/action-type'

export default function ProductComponent() {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    const handleClick = (pro) => {
        dispatch(currentAction.init(pro))
    }
  return (
    <div>
        <h1>List products</h1>
        <table border={1} cellPadding={5} cellSpacing={0}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map(p => <tr key={p.id} onClick={e => handleClick(p)}>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.price}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}
