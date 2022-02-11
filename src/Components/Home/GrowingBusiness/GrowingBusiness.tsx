import React from 'react';

const GrowingBusiness: React.FC = (): JSX.Element => {
  return (
    <div className='row' style={{ backgroundColor: '#FFFFFF', padding: '112px 60px', width: '100%', color: '#212529' }}>
      <div className='col-lg-5' style={{ padding: '0 0 0 40px' }}>
        <h1 className='mb-4' style={{ fontSize: 'xx-large', fontWeight: '700' }}>Why Growing Your Business is Important</h1>
        <p style={{ paddingRight: '70px', lineHeight: '2', fontSize: 'small', fontFamily: 'Open Sans' }}>
          Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos iure recusandae vitae nam facere hic quis voluptate cum quae. Deserunt, harum, incidunt ex nesciunt est temporibus ipsum, vel rem eveniet facere et velit sunt aspernatur eaque quis, dolorem magnam quisquam? Facere?
        </p>
        <button className='mt-2' style={{ padding: '12px 30px', color: 'white', fontFamily: 'Open Sans', backgroundColor: '#F85A40', border: 'none', borderRadius: '3px' }}>Learn More</button>
      </div>
      <div className='col-lg-7'>
        <img src='images/illustration-1.jpg' width='100%' />
      </div>

      <div className='row d-flex justify-content-center' style={{ margin: '100px 0' }}>
        <div className='row col-4 mb-5 justify-content-md-center'>
          <div className='col-2'>
            <img src='images/24-hours-support.svg' width='50' />
          </div>
          <div className='px-4 col-10'>
            <h5 style={{ fontSize: 'large', fontWeight: '700' }}>Professional</h5>
            <p style={{ fontFamily: 'Open Sans', fontSize: 'small', fontWeight: '400', lineHeight: '2' }}>
              Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.
            </p>
          </div>
        </div>

        <div className='row col-4 mb-5 justify-content-md-center'>
          <div className='col-2'>
            <img src='images/good-review.svg' width='50' />
          </div>
          <div className='px-4 col-10'>
            <h5 style={{ fontSize: 'large', fontWeight: '700' }}>Good Review</h5>
            <p style={{ fontFamily: 'Open Sans', fontSize: 'small', fontWeight: '400', lineHeight: '2' }}>
              Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.
            </p>
          </div>
        </div>

        <div className='row col-4 mb-5 justify-content-md-center'>
          <div className='col-2'>
            <img src='images/quotation.svg' width='50' />
          </div>
          <div className='px-4 col-10'>
            <h5 style={{ fontSize: 'large', fontWeight: '700' }}>24/7 Support</h5>
            <p style={{ fontFamily: 'Open Sans', fontSize: 'small', fontWeight: '400', lineHeight: '2' }}>
              Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.
            </p>
          </div>
        </div>
      </div>

      <div className='row mx-auto' style={{ width: '100%' }}>
        <div className='col-7' >
          <a href="https://www.youtube.com/watch?v=KI2lsdXJQ40" className="">
            <span className="play-button"></span>
            <img src="images/hero-min.jpg" alt="Image" className="img-fluid" style={{ borderRadius: '5px' }}/>
          </a>
        </div>
        <div className='col-5 my-auto' style={{ padding: '0 20px 0 100px' }}>
          <h2 className='mb-4 fw-bold'>Get Started with Impact</h2>
          <p className='mb-3' style={{ fontSize: 'small', fontFamily: 'Open Sans'}}>Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos iure recusandae.</p>
          <ul className='mb-3 list-unstyled' style={{ lineHeight: '2', fontSize: 'small', fontFamily: 'Open Sans' }}>
            <li><i className="fa-solid fa-check" style={{ color: '#F85A40' }}></i>&nbsp;&nbsp; Deserunt harum incidunt</li>
            <li><i className="fa-solid fa-check" style={{ color: '#F85A40' }}></i>&nbsp;&nbsp; Ex nesciunt est temporibus ipsum</li>
            <li><i className="fa-solid fa-check" style={{ color: '#F85A40' }}></i>&nbsp;&nbsp; Vel rem eveniet facere et velit sunt</li>
            <li><i className="fa-solid fa-check" style={{ color: '#F85A40' }}></i>&nbsp;&nbsp; Aspernatur eaque quis</li>
            <li><i className="fa-solid fa-check" style={{ color: '#F85A40' }}></i>&nbsp;&nbsp; Dolorem magnam quisquam? Facere</li>
          </ul>
          <button className='mt-2' style={{ padding: '12px 30px', color: 'white', fontFamily: 'Open Sans', backgroundColor: '#F85A40', border: 'none', borderRadius: '3px' }}>Learn More</button>
        </div>
      </div>

    </div>
  );
}

export default GrowingBusiness;