// import { Navbar } from 'react-bootstrap';
import Button from './Button'

function Navigation() {
    return ( 
    <section className="header bg-light navbar-light">
        <nav className="links navbar navbar-expand-sm">
            <Button />
            <ul className=" navbar-nav collapse navbar-collapse" id="navbarDropdown">
                <li className="nav-item">
                    <a href="#about-me" className="nav-link">About Me</a>
                </li>
                <li className="nav-item">
                    <a href="#my-work" className="nav-link">My Work</a>
                </li>
                <li className="nav-item">
                    <a href="#contact-me" className="nav-link">Contact Me</a>
                </li>
            </ul>
        </nav>
    </section>
    );
}

export default Navigation;