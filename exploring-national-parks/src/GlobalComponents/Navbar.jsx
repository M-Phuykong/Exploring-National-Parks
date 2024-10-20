/**
 * Renders a navigation bar component with links to different pages.
 * @module Navbar
 * @memberof GlobalComponents
 *
 * @returns {JSX.Element} The rendered navigation bar component.
 */
import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Style/navbar.css'
import tree from './tree.png'
const Navbar = () => {
    return (
        <nav className="nav-bar sticky top-0 z-10">
            <ul className='flex max-h-full w-full m-0 p-0 justify-start bg-[#3a4937] list-none'>
                <li className = "logo">
                    <img src = {tree} alt = "tree"/>
                </li>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/ParkSearch">Park Search</NavLink>
                </li>
                <li>
                    <NavLink to="/ParkInfo" reloadDocument>Park Info</NavLink>
                </li>
                <li>
                    <NavLink to="/ParkPlan">Park Planner</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar