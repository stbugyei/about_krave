import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/banner_img1.png";


function navBar() {
    return (
        <div className='navbar_wrapper'>
            <div className='navbar_first-section'>
                <div>
                    <a className="text-link2"
                        href='https://kravebeauty.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img className='banner_img' src={logo} alt=' ' />
                    </a>
                </div>
                <div className='navbar_first-section1'>
                    <button className='navbar_btn'>PRODUCTS</button>
                    <div className="dropdown-content">
                        <Link className="aboutLink" to="/whyWeDo">
                            <div className='about_dropdown'>
                                SHOP ALL
                        </div>
                        </Link>{" "}
                        {" "}
                        <Link className="aboutLink" to="/whatWeDo">
                            {" "}
                            <div className='about_dropdown'>
                                CORE SERIES
                        </div>
                            {" "}
                        </Link>   {" "}
                        <Link className="aboutLink" to="/careers">
                            <div className='about_dropdown'>
                                SUPPLEMENT SERIES
                        </div>
                        </Link>{" "}
                    </div>
                </div>
                <div className='navbar_first-section1'>
                    <button className='navbar_btn'>ABOUT US</button>
                    <div className="dropdown-content">
                        <Link className="aboutLink" to="/whyWeDo">
                            <div className='about_dropdown'>
                                WHY WE DO
                        </div>
                        </Link>{" "}
                        {" "}
                        <Link className="aboutLink" to="/whatWeDo">
                            {" "}
                            <div className='about_dropdown'>
                                WHAT WE DO
                        </div>
                            {" "}
                        </Link>   {" "}
                        <Link className="aboutLink" to="/careers">
                            <div className='about_dropdown'>
                                CAREERS
                        </div>
                        </Link>{" "}
                        <Link className="aboutLink" to="/press">
                            <div className='about_dropdown'>
                                PRESS
                        </div>
                        </Link>{" "}
                    </div>
                </div>
                <a className="aboutLink"
                        href='https://kravebeauty.com/blogs/news'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                <div className='navbar_first-sectitem'>
                        BLOG
                </div>
                </a>
                <a className="aboutLink"
                        href='https://kravebeauty.com/blogs/news'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                <div className='navbar_first-sectitem'>
                    FAQ
                </div>
                </a>
                <a className="aboutLink"
                        href='https://kravebeauty.com/blogs/news'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
               <div style={{ color: '#ED1859', margin: '0px 20px 0px 0px', padding: '10px' }}>
                    FREE SHIPPING $40+
                </div>
                </a>
            </div>
            <div className='navbar_second-section'>
                <div className='navbar_second-sectitem'>

                    <a className="aboutLink"
                        href='https://kravebeauty.com/account/login'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        ACCOUNT
                     </a>
                </div>
                <div className='navbar_second-sectitem'>
                    <a className="aboutLink"
                        href='https://kravebeauty.com/account/login'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        FOLLOW
                     </a>
                </div>
                <div className='navbar_second-sectitem'>
                    <a className="aboutLink"
                        href='"https://kravebeauty.com/cart'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        CART
                     </a>
                </div>
            </div>
        </div>
    )
}

export default navBar;
