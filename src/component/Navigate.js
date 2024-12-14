import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import './Navigate.scss'
function Navigate() {
    return (
        <>
            <div className='Navigate'>
                <NavLink className='backHome' to={'/'}><IoIosArrowBack /></NavLink>
            </div>
        </>
    )
}

export default Navigate