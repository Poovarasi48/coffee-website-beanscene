import { useEffect, useState } from 'react'
import './Section3.css'

export default function ThirdSection() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/items.json')
            .then(res => res.json())
            .then(result => setData(result));
    }, []);



    return (
        <>
            <div className='section3-container'>
                <img src='coffee_blast.png' className='coffee-blast-left-design'/>
                <h2 className='sub-title' style={{ textAlign: 'center' }}>
                    Enjoy a new blend of coffee style</h2>
                <p className='description3'>
                    Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
                <div className='items-container'>

                    {data.map((item) => {
                        return (
                            <div key={item.id} className='items'>
                                <img className='item-img' src={item.img} />
                                <p className='item-name'>{item.name}</p>
                                <p className='item-content'>{item.content}</p>
                                <p className='item-price'>${item.price}</p>
                                <button className='order-btn'>Order Now</button>
                            </div>
                        )
                    })

                    }


                </div>
            </div>
        </>
    )
}