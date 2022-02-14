import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const GrowingBusiness: React.FC = (): JSX.Element => {

  const [isOpen, setOpen] = useState(false);

  return (
    <div className='row px-sm-5' style={{ backgroundColor: '#FFFFFF', margin: '0', padding: '112px 20px', width: '100%', color: '#212529' }}>
      <div className='col-lg-5'>
        <h1 className='mb-4' style={{ fontSize: 'xx-large', fontWeight: '700' }}>Why Growing Your Business is Important</h1>
        <p style={{ lineHeight: '2', fontSize: 'small', fontFamily: 'Open Sans' }}>
          Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos iure recusandae vitae nam facere hic quis voluptate cum quae. Deserunt, harum, incidunt ex nesciunt est temporibus ipsum, vel rem eveniet facere et velit sunt aspernatur eaque quis, dolorem magnam quisquam? Facere?
        </p>
        <button className='mt-2' style={{ padding: '12px 30px', color: 'white', fontFamily: 'Open Sans', backgroundColor: '#F85A40', border: 'none', borderRadius: '3px' }}>Learn More</button>
      </div>
      <div className='col-lg-7'>
        <img src='images/illustration-1.jpg' width='100%' />
      </div>

      <div className='row d-flex justify-content-between p-0' style={{ margin: '100px 0' }}>

        <div className='row col-lg-4 mb-5 d-flex justify-content-between'>
          <div className='col-1 col-lg-1'>
            <img src='images/24-hours-support.svg' width='50' />
          </div>
          <div className='col-10 col-lg-9'>
            <h5 style={{ fontSize: 'large', fontWeight: '700' }}>Professional</h5>
            <p style={{ fontFamily: 'Open Sans', fontSize: 'small', fontWeight: '400', lineHeight: '2' }}>
              Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.
            </p>
          </div>
        </div>

        <div className='row col-lg-4 mb-5 d-flex justify-content-between'>
          <div className='col-1 col-lg-1'>
            <img src='images/good-review.svg' width='50' />
          </div>
          <div className='col-10 col-lg-9'>
            <h5 style={{ fontSize: 'large', fontWeight: '700' }}>Good Review</h5>
            <p style={{ fontFamily: 'Open Sans', fontSize: 'small', fontWeight: '400', lineHeight: '2' }}>
              Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.
            </p>
          </div>
        </div>

        <div className='row col-lg-4 mb-5 d-flex justify-content-between'>
          <div className='col-1 col-lg-1'>
            <img src='images/quotation.svg' width='50' />
          </div>
          <div className='col-10 col-lg-9'>
            <h5 style={{ fontSize: 'large', fontWeight: '700' }}>24/7 Support</h5>
            <p style={{ fontFamily: 'Open Sans', fontSize: 'small', fontWeight: '400', lineHeight: '2' }}>
              Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.
            </p>
          </div>
        </div>

      </div>

      <div className='row mx-auto d-flex justify-content-lg-between' style={{ width: '100%' }}>

        <div className='col-lg-6 mb-3' >
          <a onClick={() => setOpen(true)} style={{ position: 'relative', cursor: 'pointer' }}>
            <img src="images/hero-min.jpg" alt="Image" className="img-fluid" style={{ borderRadius: '5px', filter: 'brightness(50%)' }} />
            <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '30px 35px', backgroundColor: 'white', borderRadius: '50%' }}>
              <i className="fa-solid fa-play" style={{ color: 'black' }}></i>
            </span>
          </a>
        </div>

        <ModalVideo style={{ position: 'absolute' }} channel='youtube' autoplay isOpen={isOpen} videoId="KI2lsdXJQ40" onClose={() => setOpen(false)} />

        <div className='col-lg-5 my-auto'>
          <h2 className='mb-4 fw-bold'>Get Started with Impact</h2>
          <p className='mb-3' style={{ fontSize: 'small', fontFamily: 'Open Sans' }}>
            Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos iure recusandae.
          </p>
          <ul className='mb-3 list-unstyled'>
            <li style={{ color: 'black', fontSize: 'small', fontFamily: 'Open Sans' }}><i className="fa-solid fa-check" style={{ color: '#F85A40' }}></i>&nbsp;&nbsp; Deserunt harum incidunt</li>
            <li style={{ color: 'black', fontSize: 'small', fontFamily: 'Open Sans' }}><i className="fa-solid fa-check" style={{ color: '#F85A40' }}></i>&nbsp;&nbsp; Ex nesciunt est temporibus ipsum</li>
            <li style={{ color: 'black', fontSize: 'small', fontFamily: 'Open Sans' }}><i className="fa-solid fa-check" style={{ color: '#F85A40' }}></i>&nbsp;&nbsp; Vel rem eveniet facere et velit sunt</li>
            <li style={{ color: 'black', fontSize: 'small', fontFamily: 'Open Sans' }}><i className="fa-solid fa-check" style={{ color: '#F85A40' }}></i>&nbsp;&nbsp; Aspernatur eaque quis</li>
            <li style={{ color: 'black', fontSize: 'small', fontFamily: 'Open Sans' }}><i className="fa-solid fa-check" style={{ color: '#F85A40' }}></i>&nbsp;&nbsp; Dolorem magnam quisquam? Facere</li>
          </ul>
          <button className='mt-2' style={{ padding: '12px 30px', color: 'white', fontFamily: 'Open Sans', backgroundColor: '#F85A40', border: 'none', borderRadius: '3px' }}>Learn More</button>
        </div>

      </div>

    </div>
  );
}

export default GrowingBusiness;