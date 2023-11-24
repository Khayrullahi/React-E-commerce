import React from "react"
import "./footer.css"
const Footer = () => {
    return ( 
        <>
        <footer>
            <div className="container grid2">
                <div className="box">
                    <h1>Firstmind Creatives</h1>
                    <p>Adire is beyond fashion,it's an art</p>
                    <div className="icon d_flex">
                        <div className="img d_flex">
                        <i class="fa-brands fa-google-play"></i>
                    <p>Google Play</p>
                        </div>
                        <div className="img d_flex">
                        <i class="fa-brands fa-app-store"></i>
                    <p>App Stores</p>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <h2>About Us</h2>
                    <ul>
                        <li>Careers</li>
                        <li> Our Stores</li>
                        <li>Our Cares</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="box">
                    <h2>Customer Care</h2>
                    <ul>
                        <li>Help Center</li>
                        <li>How to Buy</li>
                        <li>Track your Order</li>
                        <li>Corporate & Bulk Purchasing</li>
                        <li>Returns & Refunds</li>
                        </ul>
                </div>
                <div className="box">
                    <h2>Contact Us</h2>
                    <ul>
                        <li>Shop 133,Adire Mall,Itoku</li>
                        <li>Email:Firstmind2theworld@gmail.com</li>
                        <li>Phone:+234 9074645831</li>
                    </ul>
                </div>
            </div>
        </footer>
        </>
     );
}
 
export default Footer;