import { useEffect, useState } from 'react';
import './Section6.css'

function ReviewSection() {

    const [reviews, setReviews] = useState([]);
    const [nextReview, SetNextReview] = useState(0);

    useEffect(() => {
        fetch('/reviews.json')
            .then(response => response.json())
            .then(data => setReviews(data));
    }, []);

    function reviewCarousalRight() {
        SetNextReview(count => count += 1);
        if (nextReview == reviews.length - 1) {
            SetNextReview(0);
        }
    }

    function ReviewCarousalLeft() {
        SetNextReview(count => count -= 1);
        if (nextReview <= 0) {
            SetNextReview(reviews.length - 1);
        }

    }



    return (
        <div className="review-container">
            <h2 className='sub-title6'>Our coffee perfection feedback</h2>
            <p className='review-caption' style={{ color: "#707070" }}>Our customers has
                amazing things to say about us</p>
            <div className='reviews-wrapper'>
                <img className='coffee-blast-right-img2' src='coffee_blast (1).png' />
                <img src="“.png" alt="quotes" className="quote-img" />
                <div className='reviews'>
                    <p className='review-description'>{reviews[nextReview]?.review}</p>
                    <p className='customer-name'>{reviews[nextReview]?.name}</p>
                    <p className='job-role'>{reviews[nextReview]?.job}</p>
                    <button onClick={() => {
                        ReviewCarousalLeft();
                    }}>
                        <img src="Vector.png" alt="left-arrow" className="left-arrow" /></button>
                    <button onClick={() => {
                        reviewCarousalRight();
                    }}>
                        <img src="Vector (1).png" alt="right-arrow" className="right-arrow" />
                    </button>
                    <img src="coffee_blast2.png" className="coffee-blast-img3" />
                </div>
            </div>
        </div>
    )
}

export default ReviewSection;