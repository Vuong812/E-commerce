import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
let url = "https://fakestoreapi.com/products"
function Products() {
    const [data, setData] = useState([])
    const [url_set, setUrl] = useState(url)
    useEffect(() => {
        fetch(url_set)
            .then(res => res.json())
            .then(product => {
                setData(product)
            })
    }, [url_set])

    const FilterProduct = (cat) => {
        url = 'https://fakestoreapi.com/products/category/' + cat
        setUrl(url)
    }
    const Showall = () => {
        url = "https://fakestoreapi.com/products"
        setUrl(url)
    }

    const ShowProduct = () => {
        return (
            <div>
                
                    <div className="buttons d-flex justify-content-center mb-3 ps-4">
                        <button className="btn btn-outline-dark me-2" onClick={() => Showall()}>
                            All
                        </button>
                        <button className="btn btn-outline-dark me-2" onClick={() => FilterProduct("men's clothing")}>
                            Men 
                        </button>
                        <button className="btn btn-outline-dark me-2" onClick={() => FilterProduct("women's clothing")}>
                            Women 
                        </button>
                        <button className="btn btn-outline-dark me-2" onClick={() => FilterProduct("jewelery")}>
                            Jewelery
                        </button>
                        <button className="btn btn-outline-dark" onClick={() => FilterProduct("electronics")}>
                            Electronic
                        </button>
                    </div>
                    <div className="d-flex justify-content-around mb-3 flex-wrap">
                        {
                            data.map((item, index) => (
                                
                                    <div className="card ps-3 pe-3 py-3 mb-4 text-center" style={{width: '18rem'}} key={index} >
                                        <img src={item.image} className="card-img-top" alt={item.title} height="250px" />
                                        <div className="card-body">
                                            <h5 className="card-title ">{item.title.substring(0, 12)}</h5>
                                            <p className="card-text ">${item.price}</p>
                                            <NavLink to={`/Products/${item.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                        </div>
                                    
                                    </div>
                            ))
                        }
                    </div>
                                  
            </div>
                )
    }
                return (

                <div className='container-fluid my-5 py-5'>
                    <div className="row">
                        <div className="col-12 mb-5">
                            <h1 className='text-center'>Lastest Products</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row col-12 mb-5 ">
                        <ShowProduct />
                    </div>
                </div>
                )
}

                export default Products