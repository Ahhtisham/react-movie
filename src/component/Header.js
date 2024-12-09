import React, { memo, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import { FaBars } from 'react-icons/fa';
import { FaXmark } from "react-icons/fa6";
import image from "../assets/logo.png";
import "./Header.scss";

function Header({ query, dispatch }) {
    const [isToggle, setIsToggle] = useState(false)
    const ToggleManu = () => {
        setIsToggle(!isToggle)
    }
    return (
        <>
            <header>
                <NavLink to='/' style={{ textDecoration: 'none' }} >
                    <div className="logo">
                        <img src={image} alt="" />
                    </div>
                </NavLink>

                <div className={isToggle ? 'responsive' : null}>
                    <div className='searchBar'>
                        <NavLink onClick={ToggleManu} to={`/search/${query}`}>
                            <span className='searchIcon '><IoMdSearch /></span>
                        </NavLink>
                        <input type="text" placeholder='Search Movie tv shows... '
                            onChange={(e) => dispatch({ type: 'SET_QUERY', payload: e.target.value })}
                            value={query}
                        />
                    </div>
                </div>

                <button className="humBurger" onClick={ToggleManu}>
                    {isToggle === true ? <FaXmark style={{ fontSize: "2rem" }} /> : <FaBars />}
                </button>
            </header >
            <Outlet />
        </>
    )
}

export default memo(Header)