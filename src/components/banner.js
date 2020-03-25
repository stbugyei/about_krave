import React from 'react'
import * as ReactNav from 'react-bootstrap';
import logo from "./images/banner_img1.png";

function banner() {

    return (
        <div>
            < ReactNav.Navbar collapseOnSelect expand="xl" bg="white" variant="dark">
                < ReactNav.Navbar.Brand href=""> <img className='banner_img' src={logo} alt=' ' /></ReactNav.Navbar.Brand>
                <ReactNav.NavDropdown title="PRODUCTS" id="collasible-nav-dropdown">
                    <ReactNav.NavDropdown.Item href="#action/3.1">SHOP ALL</ReactNav.NavDropdown.Item>
                    <ReactNav.NavDropdown.Item href="#action/3.2">CORE SERIES</ReactNav.NavDropdown.Item>
                    <ReactNav.NavDropdown.Item href="#action/3.3">SUPPLEMENT SERIES</ReactNav.NavDropdown.Item>
                </ReactNav.NavDropdown>

                <ReactNav.NavDropdown title="ABOUT US" id="collasible-nav-dropdown">
                    <ReactNav.NavDropdown.Item href="/whyWeDo">WHY WE DO</ReactNav.NavDropdown.Item>
                    <ReactNav.NavDropdown.Item href="/whatWeDo">WHAT WE DO</ReactNav.NavDropdown.Item>
                    <ReactNav.NavDropdown.Item href="/careers">CAREERS</ReactNav.NavDropdown.Item>
                    <ReactNav.NavDropdown.Item href="/press">PRESS</ReactNav.NavDropdown.Item>
                </ReactNav.NavDropdown>

                <ReactNav.Nav.Link href="https://kravebeauty.com/blogs/news">BLOG</ReactNav.Nav.Link>
                <ReactNav.Nav.Link href="https://kravebeauty.com/pages/faq">FAQ</ReactNav.Nav.Link>
                <ReactNav.Nav.Link href="https://kravebeauty.com/pages/freeshipping"><span style={{ color: '#ED1859' }}> FREE SHIPPING $40+</span></ReactNav.Nav.Link>
                <ReactNav.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactNav.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactNav.Nav className="mr-auto"></ReactNav.Nav>

                    <ReactNav.Nav>
                        <ReactNav.Nav.Link href="https://kravebeauty.com/account/login"><span style={{ color: '#000000' }}>ACCOUNT</span></ReactNav.Nav.Link>
                        <ReactNav.Nav.Link eventKey={2} href="#memes"><span style={{ color: '#000000' }}>FOLLOW</span></ReactNav.Nav.Link>
                        <ReactNav.Nav.Link href="https://kravebeauty.com/cart"><span style={{ color: '#000000' }}>CART</span></ReactNav.Nav.Link>
                    </ReactNav.Nav>

                </ReactNav.Navbar.Collapse>
            </ ReactNav.Navbar>
        </div>
    )
}

export default banner
