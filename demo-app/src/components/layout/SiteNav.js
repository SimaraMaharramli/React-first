import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/_nav.scss'


function SiteNav() {
    return (
        <div className='container'>
            <div className='navbarp130'>
                <div className='nav-area'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/">Blog</Link></li>
                    </ul>
                </div>

                <div className='search-area'>
                    <input type="text" className='form-control'/>
                </div>

            </div>
        </div>

    )
}

export default SiteNav
