import React from "react"
import './Navigation.css'

export default function Navigation() {

    return (


        <div className="container1">
            <div className='header'>
                <h1 className='title'>Bean Scene</h1>
            </div>
            <div className="navigation_links">
                <a href="#">Home</a>
                <a href="#">Menu</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>

            </div>
            <div className="authentication_links">
                <a href="#">Sign In</a>
                <div className="wrapper">
                    <div className="sign-up-container">
                        <a href="#" className="sign-up" style={{ color: 'black' }}>Sign Up</a>
                    </div>
                </div>
            </div>
            <div className="container2">
                <span className="description1">We've got your morning covered with</span>
                <span className="coffee-design">Coffee</span>
                <p className="para-1">It is best to start your day with a cup of coffee.
                    Discover the best flavour coffee you will ever have. We provide
                    the best for our customers.
                </p>
                <button className="order-now-btn">Order Now</button>
            </div>
        </div>

    )
}