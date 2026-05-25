import './Section5.css'

function FifthSection() {

    return (
        <div className='section5-container'>
            <div className='container-divider'>
                <div className='column1'>
                    <h2 className='sub-title5'>Get a chance to have an
                        Amazing morning</h2>
                    <p className='description'>We are giving you are one time opportunity to
                        experience a better life with coffee.</p>
                    <button className='order-btn' style={{color: '#1E1E1E'}}>Order Now</button>
                </div>
                <div className='column2'>
                    <img src="cup.png" className='cup-image' alt="cup-image" />
                    <img src='coffee_bean.png' className='coffee-bean-img' />
                </div>
            </div>
        </div>
    )

}


export default FifthSection;