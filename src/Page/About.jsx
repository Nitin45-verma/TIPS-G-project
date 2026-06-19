import React from 'react'
import './About.css'
import { aboutImg1, aboutImg2, aboutImg3, aboutImg4, aboutImg5 } from '../assets';

const About = () => {
  return (
    <div>
      <div className=" text-light text-center  home2" style={{ display: "grid ", justifyContent: "center" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>  <p style={{ border: '1px solid white', borderRadius: '20px', width: '250px', textAlign: "center", marginTop: "50px", color: "white", backgroundColor: "rgba(255, 255, 255, 0.13)", }}><i className="fa-solid fa-star" style={{ color: "gold" }}></i> Ranked #1 IT Training Institute</p></div>

        <h1 style={{ fontSize: "55px" }}>Build Your Career in AI with</h1>
        <h1 style={{ fontSize: "60px" }}>100% Industry Ready Skills</h1>
        <p>Join India's #1 AI Training School. Learn Artificial Intelligence & Machine Learning, Data Science, Cyber Security & Full Stack Software Development Course with 100% placement support.</p>
      </div>


      <div className="Advantages text-center mt-5">
        <button className='btt'>WHY CHOOSE US</button>
        <h1><b>Our Advantages: Why Choose TIPS-G? </b></h1>
        <p className='fs-5'>Empowering your career with the best in education and industry experience. Our curriculum covers in-demand areas like Full Stack Development, Data Science & AI, Cyber Security, Digital Marketing, and Cloud Computing. </p></div>

      <div className="container mt-5">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6 col-sm-12 aboutcard"><div className="card" style={{ width: "18rem" }}>
            <img className='aboutcardimg card-img-top' src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"  alt="..." />
            <div className="card-body">
              <h5 className="card-title">Expert-Led IT Training from Industry Professionals</h5>
              <p>Learn from seasoned IT professionals with 10+ years of industry experience. Get mentored by experts who have worked on real-world projects at top companies in Full Stack Development, Data Science, and Cyber Security.</p></div>

          </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 aboutcard"><div className="card" style={{ width: "18rem" }}>
            <img className='aboutcardimg card-img-top' src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop"  alt="..." />
            <div className="card-body">
              <h5 className="card-title">Guaranteed IT Job Placement with 100+ Partner Companies</h5>
              <p >100% placement assurance with our extensive network of 100+ partner companies. Dedicated placement cell to help you land your dream job in leading IT firms with industry-ready skills.</p>
            </div>
          </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 aboutcard"><div className="card" style={{ width: "18rem" }}>
            <img className='aboutcardimg card-img-top' src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Develop Industry-Ready IT Skills with Hands-on Projects</h5>
              <p >Hands-on training with live projects and internships. Learn the latest technologies and tools used by top tech companies worldwide through practical, project-based learning.</p>

            </div>
          </div>
          </div>
        </div><div className="text-center mt-5 fs-4">Ready to transform your career with industry-ready IT skills?
          <p><button type="button" className="btn btn-primary">Explore Our Courses <i className="fa-solid fa-arrow-right"></i></button>
            <button type="button" className="btn btn-outline-primary">View Schoarhip Opportunty</button></p>
        </div>
      </div>


      <div className=" container mt-5">
        <div className="text-center "><button className='.journeybtn'>OUR JOURNEY</button>
          <p className='fs-1'><b>Our Story: Transforming Lives Through Quality Education</b></p>
          <p className='fs-3'>From Startup to Success: The TIPS-G Journey</p>
          <p>Our journey at TIPS-G is a testament to our commitment to bridging the skill gap and empowering aspiring IT professionals. From a humble beginning in a dorm room to training 500+ successful students, we've grown significantly while maintaining our core mission.</p></div>



        <div className="row mt-5 g-5">


          <div className="col-lg-5 col-md-5 col-sm-12 "> <img className='journeyimg' src={aboutImg1} alt="" /></div>
          <div className="col-lg-7 col-md-7 col-sm-12 journeycard">
            <button className='yearbtn'>2016</button>
            <h1>Started from the Dorm Room</h1>
            <p>RNS Group of Companies started as a small dorm room IT Company in Jaipur. Faced a critical shortage of skilled and affordable manpower to drive business growth.</p>
          </div>

          <div className="col-lg-5 col-md-5 col-sm-12"> <img className='journeyimg' src={aboutImg2} alt="" /></div>
          <div className="col-lg-7 col-md-7 col-sm-12 journeycard">
            <button className='yearbtn'>2017</button>
            <h1>Solving Manpower Crisis</h1>
            <p>Launched an in-house On-Job Training program, hiring freshers and upskilling them through live projects. Created a sustainable model to produce industry-ready manpower.</p>
          </div>

          <div className="col-lg-5 col-md-5 col-sm-12"> <img className='journeyimg' src={aboutImg3} alt="" /></div>
          <div className="col-lg-7 col-md-7 col-sm-12 journeycard">
            <button className='yearbtn'>2018</button>
            <h1>Success of OJT Program</h1>
            <p>Our OJT program became a market hit! Generated 120+ skilled professionals at affordable prices. RNS Group grew from 6 to 120 employees with $1M valuation in just one year.</p>
          </div>

          <div className="col-lg-5 col-md-5 col-sm-12"> <img className='journeyimg' src={aboutImg4} alt="" /></div>
          <div className="col-lg-7 col-md-7 col-sm-12 journeycard">
            <button className='yearbtn'>2019</button>
            <h1>Birth of TIPS-G</h1>
            <p>Recognized the gap between theoretical learning and practical application. Launched TIPS-G to empower high school graduates with corporate-ready skills and 100% placement assurance.</p>
          </div>

          <div className="col-lg-5 col-md-5 col-sm-12"> <img className='journeyimg' src={aboutImg5} alt="" /></div>
          <div className="col-lg-7 col-md-7 col-sm-12 journeycard">
            <button className='yearbtn'>2024</button>
            <h1>Success of TIPS-G</h1>
            <p>In less than 3 years, TIPS-G created a benchmark in Indian education by training and placing 500+ students across 6+ learning centers nationwide.</p>
          </div>
        </div>
      </div>


      <div className="groth mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 mt-lg-5  mb-lg-5 ">
              <div className="card bg-transparent text-center groth1" style={{ border: "none" }}>
                <div className="card-body text-white">
                  <div className="spinner-grow" style={{ width: "3rem", height: "3rem" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <h1>100%</h1>
                  <p>JOB ASSURANCE</p>
                  <p>Placement Guarantee</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mt-lg-5  mb-lg-5 ">
              <div className="card bg-transparent text-center groth1" style={{ border: "none" }}>
                <div className="card-body text-white">
                  <div className="spinner-grow" style={{ width: "3rem", height: "3rem" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <h1>500+</h1>
                  <p>HAPPY STUDENTS</p>
                  <p>Successful Careers</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mt-lg-5  mb-lg-5 ">
              <div className="card bg-transparent text-center groth1" style={{ border: "none" }}>
                <div className="card-body text-white">
                  <div className="spinner-grow" style={{ width: "3rem", height: "3rem" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <h1>100+</h1>
                  <p>INDUSTRY PARTNERSHIPS</p>
                  <p>Top Companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="leadership text-center mt-5">
        <button style={{ height: '40px', width: '120px', backgroundColor: "pink" }}>LEADERSHIP</button>
        <h1>Meet Our Visionaries: The TIPS-G Leadership</h1>
        <p className='fs-4'>The leaders who turned a small idea into a functioning reality</p>
      </div>



      <div className="w-100 text-center mt-5" style={{ backgroundColor: "rgba(190, 135, 235, 0.09) " }}>
        <button className='mt-5' style={{ height: '40px', width: '120px', backgroundColor: "rgba(0, 0, 255, 0.14)" }}>OUR VALUES</button>
        <p className='fs-1'><b>Our Values: What Drives TIPS-G</b></p>

        <div className="container ">
          <div className="row ">

            <div className="col-lg-3 col-md-6 col-sm-12 mb-5">
              <div className="card" style={{height: "200px",borderRadius:"20px" }}>
                <div className="card-body text-center ">
                  <div className="spinner-grow text-danger m-3" role="status">
                    <span className="visually-hidden ">Loading...</span>
                  </div>
                  <h5 className="card-title"><b>Excellence</b></h5>
                  <p >Committed to delivering world-className IT training</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-5">
              <div className="card" style={{height: "200px",borderRadius:"20px" }}>
                <div className="card-body text-center ">
                  <div className="spinner-grow text-info m-3" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <h5 className="card-title"><b>Integrity</b></h5>
                  <p >Honest and transparent in all dealings</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-5">
              <div className="card" style={{  height: "200px",borderRadius:"20px" }}>
                <div className="card-body text-center ">
                  <div className="spinner-grow text-primary m-3" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <h5 className="card-title"><b>Student First</b></h5>
                  <p >Your success is our top priority</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-5">
              <div className="card" style={{height: "200px" ,borderRadius:"20px"}}>
                <div className="card-body text-center ">
                  <div className="spinner-grow text-success m-3" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <h5 className="card-title"><b>Innovation</b></h5>
                  <p >Constantly evolving with industry trends</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className="bottom bg-primary text-center  text-light  p-5" >
        <div ><h1>Join 500+ Successful Students at India's Leading IT Training Institute
</h1>
          <p >Start your journey to a successful IT career with TIPS-G. Explore our courses, learn more about our scholarship opportunities, or read the latest insights on our Blog & News section.</p></div>

        <div className="continer ">
          <div className="row g-3">
            <div className="col-lg-3 col-md-1" ></div>
            <div className="col-lg-3 col-md-5 col-sm-12" >
              <button className='p-3 text-primary Transformbtn0' ><b>Enrol Now  </b><i className="fa-solid fa-arrow-right"></i></button> </div>
            <div className="col-lg-3 col-md-5 col-sm-12" >
              <button className='p-3  Transformbtn1 text-primary' ><b>Conect Us</b></button> </div>
            <div className="col-lg-3 col-md-1" ></div>
          </div>
        </div>
      </div>





    </div>
  )
}

export default About