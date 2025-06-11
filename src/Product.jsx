import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Product() {
    // const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const url = "https://gcet-node-app.vercel.app/products/all"
        const res = await axios.get(url)
        setProducts(res.data)
    }

    useEffect(() => {
        fetchProducts();
    },[])

  return (
    <div>
        {/* <p>{count}</p>
        <button onClick={()=>setCount(count + 1)}>Update Count</button> */}
        {products.map(product=>(
            <li>{product.name}</li>
        ))}
    </div>
  )
}
