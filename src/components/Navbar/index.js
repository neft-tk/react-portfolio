import React from 'react'
import { Link } from 'react-router-dom'

//Navbar with links to About Me, Portfolio, Contact, and Resume, with the title corresponding to the currect section is highlighted
export default function Navbar() {
    return (
        <div className='Navbar'>
            <h1>Erik Buss' Portfolio</h1>
            <Link to='/'>Home</Link>
            <Link to='/aboutme'>About Me</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/resume'>Resume</Link>
        </div>
        
    )
}