import React from 'react'
import './Gallery.css';
import { laptopMe, galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5, galleryImg6, galleryImg8 } from '../assets';




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
            <div style={{ overflow: "hidden", borderRadius: "20px" }} className='gallery1'><img src={laptopMe} className="img galleryimg" alt="..."
            />
              <div className="gallery11 fs-4 text-white "><b>Nitin Verma</b></div></div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{ overflow: "hidden", borderRadius: "20px" }} className='gallery1'><img src={galleryImg2} className="img galleryimg" alt="..."
            />
              <div className="gallery11 fs-4 text-white "><b>Campus</b></div></div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{ overflow: "hidden", borderRadius: "20px" }} className='gallery1'><img src={galleryImg3} className="img galleryimg" alt="..."
            />
              <div className="gallery11 fs-4 text-white "><b>Counsellor TIPS-G</b></div></div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{ overflow: "hidden", borderRadius: "20px" }} className='gallery1'><img src={galleryImg4} className="img galleryimg" alt="..."
            />
              <div className="gallery11 fs-4 text-white "><b>Class Room</b></div></div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{ overflow: "hidden", borderRadius: "20px" }} className='gallery1'><img src={galleryImg5} className="img galleryimg" alt="..."
            />
              <div className="gallery11 fs-4 text-white "><b>Campus</b></div></div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{ overflow: "hidden", borderRadius: "20px" }} className='gallery1'><img src={galleryImg6} className="img galleryimg" alt="..."
            />
              <div className="gallery11 fs-4 text-white "><b>Class Room</b></div></div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{ overflow: "hidden", borderRadius: "20px" }} className='gallery1'><img src={galleryImg4} className="img galleryimg" alt="..."
            />
              <div className="gallery11 fs-4 text-white "><b>Campus</b></div></div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{ overflow: "hidden", borderRadius: "20px" }} className='gallery1'><img src={galleryImg8} className="img galleryimg" alt="..."
            />
              <div className="gallery11 fs-4 text-white"><b>Campus</b></div></div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{ overflow: "hidden", borderRadius: "20px" }} className='gallery1'><img src={galleryImg1} className="img galleryimg" alt="..."
            />
              <div className="gallery11 fs-4 text-white "><b>Class Room</b></div></div>
          </div>


        </div>

      </div>







    </>
  )
}

export default Gallery