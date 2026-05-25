import './section7.css'

export default function Section7() {
    return (
        <div className='section7-container'>
            <div className='email-section'>
                <h2 className='sub-title7'>Subscribe to get the Latest News</h2>
                <p className='caption'>Don’t miss out on our latest news, updates, tips and special offers</p>
                <div className='email-wrapper'>
                    <input type="email" className='email-input' placeholder='Enter your E-mail' />
                    <button className='subscribe-btn'>Subscribe</button>
                </div>
            </div>
            <div className='footer-img2'>
                <div className='intro-section'>
                    <h3 className="name2">Bean Scene</h3>
                    <p className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <ul>
                    <h3>About</h3>
                    <li>Menu </li>
                    <li>Features</li>
                    <li>News & Blogs</li>
                    <li>Help & Supports</li>
                </ul>
                <ul>
                    <h3>Company</h3>
                    <li>How we work </li>
                    <li>Terms of service</li>
                    <li>Pricing</li>
                    <li>FAQ</li>

                </ul>
                <ul>
                    <h3>Contact Us</h3>
                    <li>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</li>
                    <li>+1 202-918-2132</li>
                    <li>beanscene@mail.com</li>
                    <li>www.beanscene.com</li>
                </ul>
            </div>
        </div>

    )
}