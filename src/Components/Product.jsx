import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = ({items}) => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    {
                        items.map((product) => {
                            return (<>
                            <div key={product.id} className="col-lg-4 my-3 text-center">
                                <div className="card" style={{width: "18rem"}}>
                                   <NavLink to={`/product/${product.id}`}> 
                                      <img src={product.imgSrc} className="card-img-top" alt="img" />
                                    </NavLink>
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <button  className="btn btn-primary mx-3">{product.price} ₹</button>
                                        <button className="btn btn-warning">add to cart</button>
                                        </div>
                                </div>
                                </div>
                            </>)
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Product
