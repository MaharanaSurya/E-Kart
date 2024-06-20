import React, { useEffect, useState } from 'react'
import { items } from './Data';
import { useParams, NavLink } from "react-router-dom"
import "../index.css";


function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [relProd, setRelProd] = useState([]);
    useEffect(() => {
        var filteredProduct = items.filter((product) => product.id == id);
        setProduct(filteredProduct[0]);

        var relatedProduct = items.filter((p) => p.category === product.category);
        setRelProd(relatedProduct);

    }, [id, product.category]);
    return (
        <>
            <div className="container con">
                <div className="img">
                    <img src={product.imgSrc} />
                </div>
                <div className='text-center'>
                    <h1 className="card-title">{product.title}</h1>
                    <p className="card-text">{product.description}</p>
                    <button className="btn btn-primary mx-3">{product.price} ₹</button>
                    <button className="btn btn-warning">add to cart</button>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {
                        relProd.map((product) => {
                            return (<>

                                <div key={product.id} className="col-lg-4 my-3 text-center">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <NavLink to={`/product/${product.id}`}>
                                            <img src={product.imgSrc} className="card-img-top" alt="img" />
                                        </NavLink>
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">{product.description}</p>
                                            <button className="btn btn-primary mx-3">{product.price} ₹</button>
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

export default ProductDetails;
