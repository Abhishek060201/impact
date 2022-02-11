import React, { useState } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './Reviews.css';

const Reviews: React.FC = (): JSX.Element => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='bg-light' style={{ color: 'black', padding: '100px 0' }} activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item className='row'> 
        <div className='mb-5 mx-auto d-flex justify-content-center align-content-center' style={{ width: '110px', height: '110px', backgroundColor: 'white', borderRadius: '50%' }}>
          <img src='images/person_1.jpg' width='100px' className='my-auto' style={{ borderRadius: '50%' }} />
        </div>
        <div className='col-6 mx-auto text-center'>
          <h6 className='fw-bold'>Maria Jones</h6>
          <p style={{ fontSize: '0.9rem', fontFamily: 'Open Sans' }}>Customer</p>
          <i style={{ fontFamily: 'Georgia', fontSize: '1.2rem', lineHeight: '2'}}>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</i>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className='mb-5 mx-auto d-flex justify-content-center align-content-center' style={{ width: '110px', height: '110px', backgroundColor: 'white', borderRadius: '50%' }}>
          <img src='images/person_2.jpg' width='100px' className='my-auto' style={{ borderRadius: '50%' }} />
        </div>
        <div className='col-6 mx-auto text-center'>
          <h6 className='fw-bold'>Maria Jones</h6>
          <p style={{ fontSize: '0.9rem', fontFamily: 'Open Sans' }}>Customer</p>
          <i style={{ fontFamily: 'Georgia', fontSize: '1.2rem', lineHeight: '2'}}>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</i>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className='mb-5 mx-auto d-flex justify-content-center align-content-center' style={{ width: '110px', height: '110px', backgroundColor: 'white', borderRadius: '50%' }}>
          <img src='images/person_3.jpg' width='100px' className='my-auto' style={{ borderRadius: '50%' }} />
        </div>
        <div className='col-6 mx-auto text-center'>
          <h6 className='fw-bold'>Maria Jones</h6>
          <p style={{ fontSize: '0.9rem', fontFamily: 'Open Sans' }}>Customer</p>
          <i style={{ fontFamily: 'Georgia', fontSize: '1.2rem', lineHeight: '2'}}>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</i>
        </div>
      </Carousel.Item>

    </Carousel>
  );
}

export default Reviews;