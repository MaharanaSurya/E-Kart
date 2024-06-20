import React, { useState } from 'react';
import "../index.css"
import { NavLink, useNavigate } from 'react-router-dom';
import { items } from './Data';

function NavBar({mansi}) {
    const[val,setVal]=useState();
    const navigate = useNavigate();
    const filterByCategory=(category)=>{
        var elements = items.filter((p)=> p.category === category);
        mansi(elements);
    }
    const noFilter=()=>{
        mansi([...items]);
    }
    const filterByPrice=(price)=>{
        var elements = items.filter((p)=> p.price >= price);
        mansi(elements);
    }
    return (
        <>
            <header className='sticky-top'>
                <div className="nav-bar">
                    <div className="brand"><NavLink className="navbar-link" to="/">E-Commerce</NavLink></div>
                    <div className="search-box">
                    <input type='text' placeholder='Search Products' value={val} onChange={(event)=>{setVal(event.target.value)}}/>
                    <button className='btn btn-primary' onClick={()=>{
                        navigate(`/search/${val}`) 
                        setVal("") 
                    }}>Search</button>
                    </div>
                    <div className="cart"><NavLink className="navbar-link" to="/cart">Cart</NavLink></div>
                </div>
                {/* 2nd header */}
                <div className="filter-nav">
                    <ul>
                        <li>Filter By -{'>'}</li>
                        <li onClick={noFilter}>No Filter</li>
                        <li onClick={()=>{filterByCategory("mobiles")}}>Mobile</li>
                        <li onClick={()=>{filterByCategory("laptops")}}>Laptops</li>
                        <li onClick={()=>{filterByCategory("tablets")}}>Tablets</li>
                        <li onClick={()=>{filterByPrice("29999")}}>{'>'}=29999</li>
                        <li onClick={()=>{filterByPrice("49999")}}>{'>'}=49999</li>
                        <li onClick={()=>{filterByPrice("69999")}}>{'>'}=69999</li>
                        <li onClick={()=>{filterByPrice("89999")}}>{'>'}=89999</li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default NavBar;
