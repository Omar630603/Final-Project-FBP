import "./Footer.css";
import React from "react";
import {
    Link,
} from "react-router-dom";


const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-text-container">
                <div className="text-group">
                    <h3><Link to="/">MovieApp@2022 </Link></h3><br></br>
                    <p>Powered by Omar, Widiareta and Hanum</p>
                </div>
                <br></br>
            </div>
        </div>
    );
};
export default Footer;
