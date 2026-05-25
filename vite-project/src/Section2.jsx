import './Section2.css';

export default function SecondSection() {

    return (
        <>
            <div className="description-container">
                <div className='column-wrapper'>
                    <div className='sub-title-column1'>
                        <h2 className="sub-title">Discover the Best Coffee</h2>
                        <p className='sub-title1-description'>Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you
                            will enjoy this coffee more than others you have ever tasted.</p>
                        <button className='learn-more-btn'>Learn More</button>
                    </div>
                    <div>
                        <img 
                        className='coffe-bean-cup-img'
                        src='stylized-cup-coffee-out-coffee-beans-flat-lay 1.png' alt='coffe-bean-cup' />
                    </div>
                </div>


            </div>
        </>
    )
}