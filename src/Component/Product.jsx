import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {NavLink} from 'react-router-dom'
function Product() {
    const [product,setProduct] = useState([])
    const {id} = useParams();
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setProduct(data)
           
        })
    }, [])
  return (
    <div className='container my-5 py-5'>
        <div className="row">
            <div className="col-md-6 text-center pe-5">
                <img src={product.image} height="400px" width="300px" />
            </div>
            <div className="col-md-6 p-4">
                <h4 className='text-uppercase'>{product.category}</h4>
                <h1 className='display-5'>{product.title}</h1>
                <h3 className='display-6'>Price: ${product.price}</h3>
                <p className='lead'>
                    Description: {product.description}
                </p>
                <button className="btn btn-outline-dark me-3">Add to cart</button>
                <NavLink to="#" className="btn btn-dark">Go to cart</NavLink>
            </div>
        </div>      
    </div>
  )
}

export default Product