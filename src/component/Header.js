import React, { memo, useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import { FaBars } from 'react-icons/fa';
import { FaXmark } from "react-icons/fa6";
import image from "../assets/logo.png";
import "./Header.scss";

function Header({ query, dispatch }) {
    const [isToggle, setIsToggle] = useState(false);
    const ToggleManu = () => {
        setIsToggle(!isToggle);
    }

    // Get Search Suggestions API
    const [suggestions, setSuggestions] = useState('');
    useEffect(() => {
        const getSuggestions = async () => {
            if (!query.trim()) return setSuggestions([]);
            try {
                const res = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${query}`);
                const data = await res.json();
                setSuggestions(data.results || []);
            } catch {
                setSuggestions([]);
            }
        };
        getSuggestions();
    }, [query]);

    const handleSuggestionClick = ({ name, title }) => {
        dispatch({ type: 'SET_QUERY', payload: name || title });
        setSuggestions([]);
    };
    return (
        <>
            <header>
                <NavLink to='/' style={{ textDecoration: 'none' }} >
                    <div className="logo">
                        <img src={image} alt="Logo" />
                    </div>
                </NavLink>

                <div className={isToggle ? 'responsive' : null}>
                    <div className='searchBar'>
                        <NavLink onClick={ToggleManu} to={`/search/${query}`}>
                            <span className='searchIcon'><IoMdSearch /></span>
                        </NavLink>
                        <input
                            type="text"
                            placeholder="Search Movie TV Shows..."
                            onChange={(e) => dispatch({ type: 'SET_QUERY', payload: e.target.value })}
                            value={query}
                        />
                        {suggestions.length > 0 ? (
                            <ul className="suggestionsList">
                                <NavLink
                                    onClick={ToggleManu}
                                    to={`/search/${query}`}
                                    style={{ textDecoration: "none" }}
                                >
                                    {suggestions.slice(0, 13).map(({ id, title, name }) => (
                                        <li key={id} onClick={() => handleSuggestionClick
                                            ({ id, title, name })}>
                                            <span style={{ marginRight: ".8rem" }}>↗</span>
                                            {title || name}
                                        </li>
                                    ))}
                                </NavLink>
                            </ul>
                        ) : null}
                    </div>
                </div>

                <button className="humBurger" onClick={ToggleManu}>
                    {isToggle === true ? <FaXmark style={{ fontSize: "2rem" }} /> : <FaBars />}
                </button>
            </header>
            <Outlet />
        </>
    );
}

export default memo(Header);
