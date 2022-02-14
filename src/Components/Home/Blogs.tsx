import React from 'react'

const Blogs: React.FC = (): JSX.Element => {
  return (
    <div style={{ color: 'black', padding: '110px 0' }}>

      <div className='top text-center pb-5'>
        <h3 className='mb-3 fw-bold'>Blog Posts</h3>
        <p className='w-50 mx-auto' style={{ fontFamily: 'Open Sans', fontSize: 'small', lineHeight: '2' }}>
          Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.
        </p>
      </div>

      <div className='bottom row px-md-5 mx-auto align-center w-100' style={{ padding: '0 20px' }}>

        <div className='col-md-4 '>
          <img src='images/post_1.jpg' width='100%' style={{ borderRadius: '10px', cursor: 'pointer' }} />
          <div style={{ margin: '15px' }} >
            <p style={{ fontFamily: 'Open Sans', fontSize: 'small', color: 'gray' }}>May 27, 2021 • 12 Comments</p>
            <h5 style={{ fontWeight: '700', cursor: 'pointer' }} >Importance of getting a notification</h5>
            <p style={{ fontFamily: 'Open Sans', fontSize: 'small', lineHeight: '2' }} >
              Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.
            </p>
            <a style={{ fontFamily: 'Open Sans', fontSize: 'small', color: '#F86952', cursor: 'pointer' }} >Read more &gt;</a>
          </div>
        </div>

        <div className='col-md-4'>
          <img src='images/post_2.jpg' width='100%' style={{ borderRadius: '10px', cursor: 'pointer' }} />
          <div style={{ margin: '15px' }} >
            <p style={{ fontFamily: 'Open Sans', fontSize: 'small', color: 'gray' }}>May 27, 2021 • 12 Comments</p>
            <h5 style={{ fontWeight: '700', cursor: 'pointer' }} >Importance of getting a notification</h5>
            <p style={{ fontFamily: 'Open Sans', fontSize: 'small', lineHeight: '2' }} >
              Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.
            </p>
            <a style={{ fontFamily: 'Open Sans', fontSize: 'small', color: '#F86952', cursor: 'pointer' }} >Read more &gt;</a>
          </div>
        </div>

        <div className='col-md-4'>
          <img src='images/post_3.jpg' width='100%' style={{ borderRadius: '10px', cursor: 'pointer' }} />
          <div style={{ margin: '15px' }} >
            <p style={{ fontFamily: 'Open Sans', fontSize: 'small', color: 'gray' }}>May 27, 2021 • 12 Comments</p>
            <h5 style={{ fontWeight: '700', cursor: 'pointer' }} >Importance of getting a notification</h5>
            <p style={{ fontFamily: 'Open Sans', fontSize: 'small', lineHeight: '2' }} >
              Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.
            </p>
            <a style={{ fontFamily: 'Open Sans', fontSize: 'small', color: '#F86952', cursor: 'pointer' }} >Read more &gt;</a>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Blogs;