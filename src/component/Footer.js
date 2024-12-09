import React from 'react'
import './Footer.scss'
function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>About Us</h4>
                        <p>
                            MOVIE TIME is your go-to destination for finding the best movies and shows.
                            Explore, discover, and enjoy cinema classics and modern hits.
                        </p>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">TV Shows</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Copyright © 2024 MOVIE TIME moviesfree.net. All Rights Reserved</p>
                </div>
            </div>

        </>
    )
}

export default Footer