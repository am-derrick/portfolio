import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <div className='logo'>Logo</div>
            <nav>
                <ul>
                    <li>
                        <a href='#about'>About</a>
                    </li>
                    <li>
                        <a href='#projects'>Projects</a>
                    </li>
                    <li>
                        <a href='#articles'>Articles</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;