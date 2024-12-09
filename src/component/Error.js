import React from 'react'
import { NavLink } from 'react-router-dom'
import './Error.scss'
function Error() {
    return (
        <>
            <div className='ErrorShow'>
                <h1>404 Error Page</h1>
                <p>Sorry,This page doesn't exist ⚠ </p>
                <NavLink to='/'>
                    <button className='Go_back'>Go Back</button>
                </NavLink>
            </div>


        </>
    )
}

export default Error