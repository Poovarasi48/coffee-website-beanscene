import Navigation from './Navigation.jsx';
import React from 'react';
import './App.css';
import SecondSection from './Section2.jsx';
import ThirdSection from './Section3.jsx';
import FourthSection from './Section4.jsx';
import FifthSection from './Section5.jsx';
import ReviewSection from './Section6.jsx';
import Section7 from './section7.jsx';

export default function App() {
  return (
    <>
      <div className='container'>
        <div>
          <Navigation />
        </div>
      </div>
      <div>
        <SecondSection />
      </div>
      <div>
        <ThirdSection />
      </div>
      <div>
        <FourthSection />
      </div>
      <div>
        <FifthSection />
      </div>
      <div>
        <ReviewSection />
      </div>
      <div>
        <Section7 />
      </div>
    </>
  )
}