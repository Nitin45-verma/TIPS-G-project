import React from 'react'
import './Gallery.css';
import Galleryimg1 from './assets/with laptopme.jpeg';
import Galleryimg2 from './galleryimg2.jpg';
import Galleryimg3 from './galleryimg3.jpg';
import Galleryimg4 from './galleryimg4.jpeg';
import Galleryimg5 from './galleryimg5.jpg';
import Galleryimg6 from './galleryimg6.png';
import Galleryimg8 from './galleryimg8.jpeg';




const Gallery = () => {


  return (
    <>
      <div className="gallery text-center">
        <button className='gallerybutton mt-5'>MOMENTS & MEMORIES</button>
        <p className='fs-1 text-white'><b>Gallery & Media</b></p>
        <p className='fs-4 text-white '>Capturing moments of learning, growth, and success at TIPS-G</p>
      </div>


      <div className="container mt-5">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{ overflow: "hidden", borderRadius: "20px" }} className='gallery1'><img src={Galleryimg1} className="img galleryimg" alt="..."
            />
              <div className="gallery11 fs-4 text-white "><b>Nitin Verma</b></div></div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{ overflow: "hidden", borderRadius: "20px" }} className='gallery1'><img src={Galleryimg2} className="img galleryimg" alt="..."
            />
              <div className="gallery11 fs-4 text-white "><b>Campus</b></div></div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{ overflow: "hidden", borderRadius: "20px" }} className='gallery1'><img src={Galleryimg3} className="img galleryimg" alt="..."
            />
              <div className="gallery11 fs-4 text-white "><b>Counsellor TIPS-G</b></div></div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{ overflow: "hidden", borderRadius: "20px" }} className='gallery1'><img src={Galleryimg4} className="img galleryimg" alt="..."
            />
              <div className="gallery11 fs-4 text-white "><b>Class Room</b></div></div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{ overflow: "hidden", borderRadius: "20px" }} className='gallery1'><img src={Galleryimg5} className="img galleryimg" alt="..."
            />
              <div className="gallery11 fs-4 text-white "><b>Campus</b></div></div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{ overflow: "hidden", borderRadius: "20px" }} className='gallery1'><img src={Galleryimg6} className="img galleryimg" alt="..."
            />
              <div className="gallery11 fs-4 text-white "><b>Class Room</b></div></div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{ overflow: "hidden", borderRadius: "20px" }} className='gallery1'><img src={Galleryimg4} className="img galleryimg" alt="..."
            />
              <div className="gallery11 fs-4 text-white "><b>Campus</b></div></div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{ overflow: "hidden", borderRadius: "20px" }} className='gallery1'><img src={Galleryimg8} className="img galleryimg" alt="..."
            />
              <div className="gallery11 fs-4 text-white"><b>Campus</b></div></div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{ overflow: "hidden", borderRadius: "20px" }} className='gallery1'><img src={Galleryimg1} className="img galleryimg" alt="..."
            />
              <div className="gallery11 fs-4 text-white "><b>Class Room</b></div></div>
          </div>


        </div>

      </div>







    </>
  )
}

export default Gallery