import React from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
    const {id, name} = useParams();
  return (
    <div>
        <h1>Details page id = {id} | {name}</h1>
    </div>
  )
}
