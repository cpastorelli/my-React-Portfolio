import React from 'react';
import Button from './Button'

function Navigation() {
    return ( 
    <section class="header bg-light navbar-light">
        <nav class="links navbar navbar-expand-sm">
            <Button />
            <ul class=" navbar-nav collapse navbar-collapse" id="navbarDropdown">
                <li class="nav-item">
                    <a href="#about-me" class="nav-link">About Me</a>
                </li>
                <li class="nav-item">
                    <a href="#my-work" class="nav-link">My Work</a>
                </li>
                <li class="nav-item">
                    <a href="#contact-me" class="nav-link">Contact Me</a>
                </li>
            </ul>
        </nav>
    </section>
    );
}

export default Navigation;