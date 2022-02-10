import React from 'react';

const WhyUs: React.FC = (): JSX.Element => {
  return (
    <div className='row' style={{ padding: '110px 85px 90px 85px', width: '100%', backgroundColor: '#FAFAFA', color: '#212529' }}>

      <div className='left col-lg-5'>
        <h3 className='mb-5 fw-bold' style={{ fontSize: '1.85rem' }}>Why You Should Choose Us</h3>

        <div className='row mb-5 justify-content-md-center'>
          <div className='col-2'>
            <img src='images/24-hours-support.svg' width='50' />
          </div>
          <div className='col-10'>
            <h5 style={{ fontSize: 'large', fontWeight: '700' }}>Professional</h5>
            <p style={{ fontFamily: 'Open Sans', fontSize: 'medium', fontWeight: '400' }}>
              Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.
            </p>
          </div>
        </div>

        <div className='row mb-5 justify-content-md-center'>
          <div className='col-2'>
            <img src='images/good-review.svg' width='50' />
          </div>
          <div className='col-10'>
            <h5 style={{ fontSize: 'large', fontWeight: '700' }}>Good Review</h5>
            <p style={{ fontFamily: 'Open Sans', fontSize: 'medium', fontWeight: '400' }}>
              Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.
            </p>
          </div>
        </div>

      </div>

      <div className="col-0 col-lg-1"></div>

      <div className='right col-lg-6' style={{padding: '0 0 0 0'}}>
        <img src='images/about-us.png' width='100%' alt='about-us.png' />
      </div>

    </div>
  );
}

export default WhyUs;