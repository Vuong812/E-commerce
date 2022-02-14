import React from 'react'
import Products from './Products'

function Home() {
    return (
        <div className='hero py-5'>
            <div className="card bg-warning text-white border-0" style={{height:'550px'}}>
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                            <h5 className="card-title display-3 fw-bolder">NEW SEASON ARRIVALS</h5>
                            <p className="card-text fs-2">CHECKOUT ALL THE TRENDS</p>
                        </div>
                    </div>
            </div>
            <Products/>
        </div>
    )
}

export default Home