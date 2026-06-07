import { useEffect, useState } from 'react'
import './Section4.css'

export default function FourthSection() {

    const [benefitsData, setBenefitsData] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(result => setBenefitsData(result))
    })


    return (
        <div className='section4-container'>
            <h2 className='sub-title4' style={{ textAlign: 'center' }}>
                Why are we different?</h2>
            <img src="coffee_blast (1).png" className="coffe-splash-right-image" />
            <p className='description3' style={{ color: '#707070' }}>
                We don’t just make your coffee, we make your day!</p>
            <div className='benefits-container'>
                {benefitsData.map((item) => {
                    return (
                        <div className='benefits' key={item.id} style={item.id === 1 ? { backgroundColor: "#FFEED8" } : {}}>
                            <img src={item.img} className='benefit-image' />
                            <p className='benefit-title'>{item.title}</p>
                            <p className='benefit-description' >{item.description}</p>
                        </div>
                    )
                })

                }

            </div>
            <p className='description3' style={{ color: '#707070' }}>
                Great ideas start with great coffee, Lets help you achieve that</p>
            <p className='baseline-description'>Get started today.</p>
            <div className='join-us-container'>
                <button className='join-us-btn'>Join Us</button>
            </div>
            </div>
    )
}