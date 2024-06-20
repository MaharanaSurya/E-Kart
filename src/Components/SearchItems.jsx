import React, { useEffect, useState } from 'react'
import { useParams , NavLink} from 'react-router-dom';
import { items } from './Data';

function SearchItems() {
  const {term} = useParams();
  const [prod, setProd]=useState([]);
  useEffect(()=>{
    var filteredElement = items.filter((p)=> p.title.toLowerCase().includes(term.toLowerCase()));
    setProd(filteredElement);
  },[term]);
  return (
    <>
                <div className="container">
                <div className="row">
                    {
                      prod.map((product) => {
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

export default SearchItems;
