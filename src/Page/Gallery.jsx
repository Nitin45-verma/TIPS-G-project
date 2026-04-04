import React from 'react'
import './Gallery.css';




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
            <div style={{ overflow: "hidden", borderRadius: "20px" }} className='gallery1'><img src="src/assets/with laptopme.jpeg" className="img galleryimg" alt="..."
            />
              <div className="gallery11 fs-4 text-white "><b>Nitin Verma</b></div></div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{ overflow: "hidden", borderRadius: "20px" }} className='gallery1'><img src="/src/assets/galleryimg2.jpg" className="img galleryimg" alt="..."
            />
              <div className="gallery11 fs-4 text-white "><b>Campus</b></div></div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{ overflow: "hidden", borderRadius: "20px" }} className='gallery1'><img src="/src/assets/galleryimg3.jpg" className="img galleryimg" alt="..."
            />
              <div className="gallery11 fs-4 text-white "><b>Counsellor TIPS-G</b></div></div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{ overflow: "hidden", borderRadius: "20px" }} className='gallery1'><img src="/src/assets/galleryimg4.jpeg" className="img galleryimg" alt="..."
            />
              <div className="gallery11 fs-4 text-white "><b>Class Room</b></div></div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{ overflow: "hidden", borderRadius: "20px" }} className='gallery1'><img src="/src/assets/galleryimg5.jpg" className="img galleryimg" alt="..."
            />
              <div className="gallery11 fs-4 text-white "><b>Campus</b></div></div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{ overflow: "hidden", borderRadius: "20px" }} className='gallery1'><img src="/src/assets/galleryimg6.png" className="img galleryimg" alt="..."
            />
              <div className="gallery11 fs-4 text-white "><b>Class Room</b></div></div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{ overflow: "hidden", borderRadius: "20px" }} className='gallery1'><img src="/src/assets/galleryimg4.jpeg" className="img galleryimg" alt="..."
            />
              <div className="gallery11 fs-4 text-white "><b>Campus</b></div></div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{ overflow: "hidden", borderRadius: "20px" }} className='gallery1'><img src="/src/assets/galleryimg8.jpeg" className="img galleryimg" alt="..."
            />
              <div className="gallery11 fs-4 text-white"><b>Campus</b></div></div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div style={{ overflow: "hidden", borderRadius: "20px" }} className='gallery1'><img src="/src/assets/galleryimg1.jpg" className="img galleryimg" alt="..."
            />
              <div className="gallery11 fs-4 text-white "><b>Class Room</b></div></div>
          </div>


        </div>

      </div>







    </>
  )
}

export default Gallery