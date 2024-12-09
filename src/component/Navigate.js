import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsBoxArrowInUpLeft } from "react-icons/bs";
import './Navigate.scss'
function Navigate() {
    return (
        <>
            <NavLink className='Navigate' to={'/'} >
                <p>HOME <span><BsBoxArrowInUpLeft /></span></p>
            </NavLink>
        </>
    )
}

export default Navigate