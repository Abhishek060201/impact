import React from 'react';
import './Main.css';

const Main: React.FC = (): JSX.Element => {
  return (
    <div className='main'>
      <div className='img-1'>
        <img src='images/person-1.png' alt='could not load image' />
      </div>
      <div className='img-2'>
        <img src='images/person-2.png' alt='could not load image' />
      </div>

      <div className='row'>
        <h1 style={{ zIndex: '1' }} className='col-lg-5 mx-auto fw-bold text-center'>
          Let's growth your business with us
        </h1>
      </div>
      <div className='row'>
        <p className='col-sm-8 col-lg-5 mx-auto fw-normal text-center' style={{ fontFamily: 'Open Sans', color: '#CCE6E3', lineHeight: '1.8rem' }}>
          Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.
        </p>
      </div>
      <div className='col-md-12 text-center'>
        <button type='button' className='btn btn-warning text-white' style={{ fontFamily: 'Open Sans', padding: '12px 30px' }} >Get In Touch</button>
      </div>

      {/* highlights  */}
      <div className='highlights row mx-sm-3 mx-md-5'>
        <div className='row col-lg-4'>
          <div className='col-3'><i className="fa-solid fa-layer-group fa-3x"></i></div>
          <div className='col-9'>
            <h2 style={{ fontSize: 'large', fontWeight: 'bold' }}>Design</h2>
            <p style={{ color: '#80C8C0', fontSize: 'medium', fontFamily: 'Open Sans' }}>
              Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.
            </p>
          </div>
        </div>
        <div className='row col-lg-4'>
          <div className='col-3'><i className="fa-solid fa-laptop fa-3x"></i></div>
          <div className='col-9'>
            <h2 style={{ fontSize: 'large', fontWeight: 'bold' }}>Application</h2>
            <p style={{ color: '#80C8C0', fontSize: 'medium', fontFamily: 'Open Sans' }}>
              Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.
            </p>
          </div>
        </div>
        <div className='row col-lg-4'>
          <div className='col-3'><i className="fa-solid fa-bag-shopping fa-3x"></i></div>
          <div className='col-9'>
            <h2 style={{ fontSize: 'large', fontWeight: 'bold' }}>eCommerce</h2>
            <p style={{ color: '#80C8C0', fontSize: 'medium', fontFamily: 'Open Sans' }}>
              Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur.
            </p>
          </div>
        </div>
      </div>

    </div>

  );
}

export default Main;