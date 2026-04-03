import React, { useState } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'




const Home = () => {
  const Navigate = useNavigate()
  

  return (
    <div className='bg-light' style={{ fontFamily: "Apple Color Emoji", margin: "2px"  }}>

      {/* Hero Section */}

      <div className="home2 p-3">
        <p style={{ border: '1px solid white', borderRadius: '20px', width: 'auto', textAlign: "center", color: "white", backgroundColor: "rgba(255, 255, 255, 0.13)"  }} className='text-center'><i className="fa-solid fa-star" style={{ color: "gold" }}></i> Ranked #1 IT Training Institute</p>
        <div className="container-flute">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-ms-12 text-light" ><h1 style={{ fontSize: "55px" }}>Build Your Career in AI with</h1>
              <h1 style={{ fontSize: "60px" }} className='fs-sm-1'>100% Industry Ready Skills</h1>
              <p >Join India's #1 AI Training School. Learn Artificial Intelligence & Machine Learning, Data Science, Cyber Security & Full Stack Software Development Course with 100% placement support.</p>

              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <button type="button" className="btn-light topbtn ">Explor Courses</button>
                <button type="button" className="btn-light topbtn">Watch Demo</button></div>
              <hr />
              <div className='spacility'>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6"><p><i className="fa-regular fa-circle-check"></i>100% Job Assistance</p></div>
                    <div className="col-lg-4 col-md-4 col-sm-6"><p><i className="fa-regular fa-circle-check"></i>Industry Certified</p></div>
                    <div className="col-lg-4 col-md-4 col-sm-6"><p><i className="fa-regular fa-circle-check"></i>Live Projects</p></div>
                  </div>
                </div>
                
                
                
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-ms-12"><img style={{ width: '100%' }} src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" alt="" /></div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 text-center  gap-1 circle">
            <p className="rounded-circle circle0"  ></p>
            <h1>500+</h1>
            <p style={{ borderBottom: "3px solid blue" }}>Happy Students</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 text-center  gap-1 circle">
            <p className="rounded-circle circle1"  ></p>
            <h1>480+</h1>
            <p style={{ borderBottom: "3px solid Green" }}>Successful Placements</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 text-center  gap-1 circle">
            <p className="rounded-circle circle2" ></p>
            <h1>100+</h1>
            <p style={{ borderBottom: "3px solid purple" }}>Partner Companies</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 text-center  gap-1 circle">
            <p className="rounded-circle circle3"  ></p>
            <h1>95%</h1>
            <p style={{ borderBottom: "3px solid orange" }}>Success Rate</p>
          </div>
        </div>
      </div>
      <hr />

      <div className="container">
        <div className="row">
          <div className="col-12 text-center "><p className='fs-1'>Unlock Your Future with TIPS-G: Training, Internships & Placement</p></div>
          <div className="col-12 text-center  fs-4">Complete career transformation with training, internships, placement, and high-paying jobs</div>
        </div>
      </div>

      <div className="container mt-5 bg-light">
        <div className="row gx-4 gy-5">
          <div className="col-lg-6 col-md-6 col-sm-12 bg-primary text-light pt-2 ">

            <div className='fontawsome' style={{ display: "flex", justifyContent: "space-between" }}><i className="fa-solid fa-industry"></i><p className="rounded-circle text-center bg-light text-dark number" >1</p></div>

            <h1>Industry-Focused IT Training in Jaipur</h1>
            <p>Kickstart your career with job-ready training programs in Python, AI/ML, Data Science course in Jaipur, Angular, React & Full Stack developer training India. Learn through live projects, labs, and mentorship from top tech experts.</p>
            <p><i className="fa-regular fa-circle-check"></i>Expert-led training from industry professionals</p>
            <p><i className="fa-regular fa-circle-check"></i>Hands-on learning with live projects</p>
            <p><i className="fa-regular fa-circle-check"></i>Industry certifications included</p>

          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 text-dark pt-2 " style={{ color: "white " }}>
            <div className='fontawsome' style={{ display: "flex", justifyContent: "space-between" }}><i className="fa-solid fa-certificate"></i><p className="rounded-circle text-center align-items-center bg-light number"  >2</p></div>

            <h1>Paid Internships with Certification</h1>
            <p>Every TIPS-G trainee receives a paid internship in the 3rd year itself gaining real-time industry experience in emerging tech domains like AI, Cyber Security, and Full Stack Development.</p>
            <p><i className="fa-regular fa-circle-check"></i>Paid internship during training</p>
            <p><i className="fa-regular fa-circle-check"></i>Real-world project experience</p>
            <p><i className="fa-regular fa-circle-check"></i>Industry-recognized certification</p>

          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 bg-light border-dark pt-2 ">
            <div className='fontawsome' style={{ display: "flex", justifyContent: "space-between" }}><i className="fa-solid fa-road"></i><p className="rounded-circle text-center align-items-center bg-light number"  >3</p></div>

            <h1>100% Guaranteed Job Placement Before Graduation</h1>
            <p>TIPS-G ensures guaranteed job placement for all trainees before completing their degree. Our placement team connects you with top IT firms through training, mock interviews, and job preparation.</p>
            <p><i className="fa-regular fa-circle-check"></i>100+ hiring partner companies</p>
            <p><i className="fa-regular fa-circle-check"></i>Interview preparation & mock tests</p>
            <p><i className="fa-regular fa-circle-check"></i>Placement before degree completion</p>

          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 bg-success text-light pt-2 ">
            <div className='fontawsome' style={{ display: "flex", justifyContent: "space-between" }}><i className="fa-brands fa-asymmetrik"></i>  <p className="rounded-circle text-center align-items-center  number"  >4</p></div>

            <h1>High Salary Packages in Top IT Companies</h1>
            <p>TIPS-G students land roles in reputed companies with starting packages from ₹25LPA in tech fields like AI, Data Science, and Cyber Security. Your skills decide your salary — not just the degree!</p>
            <p><i className="fa-regular fa-circle-check"></i>Average salary: ₹4-6 LPA</p>
            <p><i className="fa-regular fa-circle-check"></i>Highest package: ₹25 LPA</p>
            <p><i className="fa-regular fa-circle-check"></i>Skill-based compensation</p>

          </div>

          <div className="col-lg-3 col-md-12 col-sm-12  gy-4"></div>
          <div className="col-lg-6 col-md-12 col-sm-12  gy-4 bg-light pt-2  ">
            <div className='fontawsome' style={{ display: "flex", justifyContent: "space-between" }}><i className="fa-solid fa-graduation-cap"></i> <p className="rounded-circle text-center align-items-center  number"  >5</p></div>

            <h1>Work-Integrated Graduation from IIT, BITS Pilani & NAAC A++ Universities</h1>
            <p>TIPS-G students land roles in reputed companies with starting packages from ₹25LPA in tech fields like AI, Data Science, and Cyber Security. Your skills decide your salary — not just the degree!</p>
            <p><i className="fa-regular fa-circle-check"></i>Study while you work</p>
            <p><i className="fa-regular fa-circle-check"></i>Degrees from IIT Jodhpur & BITS Pilani</p>
            <p><i className="fa-regular fa-circle-check"></i>No career breaks required</p>

          </div>
          <div className="col-lg-3 col-md-12 col-sm-12  gy-4  "></div>


        </div>
      </div>
      <div className="container successtory mt-5">
        <div className="row  text-light ">
          <h1 className='mt-5'>Join the Success Story</h1>

          <div className="col-lg-3 col-md-3 col-sm-6 text-center successtory3"><h1>500+</h1> <p>Placed Students</p></div>
          <div className="col-lg-3 col-md-3 col-sm-6 text-center successtory3"><h1>100%</h1> <p>Placement Rate</p></div>
          <div className="col-lg-3 col-md-3 col-sm-6 text-center successtory3"><h1>25L</h1> <p>Highest Package</p></div>
          <div className="col-lg-3 col-md-3 col-sm-6 text-center successtory3"><h1>100+</h1> <p>Hiring Partners</p></div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row g-4">
          <div className="Recommended">
            <h3>Recommended For You</h3>
            <p>Based on your interests and browsing history</p>

          </div>

          <div className="col-12 Recommended1"><h5>
            Advanced Excel with Data Analytics</h5>
            <p>Master Excel formulas, pivot tables, macros, Power Query, and data visualization</p>
            <p>⏱ 2 months
              📚 60 hours</p>
            <button type="button" className="btn btn-outline-info">view course <i className="fa-solid fa-right-long"></i></button>
          </div>
          <div className="col-12 Recommended1">
            <h5>Cyber Security </h5>
            <p>"Master cutting-edge cyber defense skills in 24 months to protect data and secure digital futures!"</p>
            <p>⏱ 36 months 📚 2880 hours</p>

            <button type="button" className="btn btn-outline-info">view course <i className="fa-solid fa-right-long"></i></button>

          </div>


          <div className="col-12 Recommended1 ">
            <h5 >Certified Ethical Hacker by TIPS-G</h5>
            <p>Master ethical hacking skills to protect systems and outsmart cyber threats in just months!</p>
            <p>⏱ 4 months 📚 120 hours</p>


            <button type="button" className="btn btn-outline-info">view course <i className="fa-solid fa-right-long"></i></button>

          </div>
          <div className="col-12 Recommended2 gap-2">

            <div ><div className="spinner-grow" role="status">
              <span className="visually-hidden">Loading...</span>
            </div></div>
            <p>  <i className="fa-solid fa-arrow-trend-up"></i>  These recommendations improve as you browse more courses</p>
          </div>
        </div>
      </div>

      <div className="container  mt-5 ">
        <div className="text-center">
          <button type="button" className="btn btn-primary"> <i className="fa-regular fa-star"></i> POWERED BY AI</button>
          <h1 >Experience the Power of AI</h1>
          <p >Get personalized course recommendations and career guidance using AI</p>

        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 bg-light"><h4 className='mt-3'>AI Course Recommender</h4>
            <p>Find your perfect IT career path</p>
            <p className='mt-2'>Question 1 of 3</p>
            <div className="progress">
              <div className="progress-bar " role="progressbar" style={{ width: "30%", backgroundColor: "blue" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>
            <h4 className='mt-4'>What interests you most?</h4>

            <div className="container ">
              <div className="row gy-3 p-3 ">
                <div className="col-12 "><button className='question'><i className="fa-solid fa-arrows-to-circle"></i> Ai & Ml</button></div>
                <div className="col-12 "><button className='question'> <i className="fa-solid fa-lock"></i> Cyber security</button></div>
                <div className="col-12 "><button className='question'><i className="fa-solid fa-laptop"></i>  Full stack web development</button> </div>
                <div className="col-12 "><button className='question'><i className="fa-solid fa-database"></i> Data Science</button></div>
              </div>
            </div>


          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 d-grid">
            <h4 className='mt-3'>AI Resume Analyzer</h4>
            <p>Get instant career recommendations</p>

            <p>Paste your resume or CV below</p>

            <textarea name="" className='input' type="text" placeholder='Copy and Paste your resume text here.. include your skills, eduction,experiences and projects.'  ></textarea>
            <p>✨ AI will analyze your skills and recommend the best IT courses for you</p>
            <button type="button" className="btn btn-success " disabled aria-label="Close">Analyze My Resume</button>
            <p className='mt-3 text-center' style={{ backgroundColor: "rgba(0, 187, 255, 0.5)" }}><b>What you'll get:</b> Skill assessment, top 3 course recommendations, skill gaps, expected salary, and career path guidance</p>
          </div>
        </div>
      </div>
      <div className="studentsuccess  mt-5 pt-5" style={{ backgroundColor: "rgba(0, 255, 255, 0.089)" }}>
        <div className="text-center">
          <button className='btn-outline-none' style={{ color: "purple", backgroundColor: "rgba(225, 147, 225, 0.6)", border: "none", borderRadius: "5px" }}>STUDENT SUCCESS</button>
          <p  className='fs-1'>Real Projects, Real Placements</p>
          <p className='fs-4 '>See what our students have built and where they got placed</p>

          <button type="button" className="btn btn-light">All Projects</button>
          <button type="button" className="btn btn-light">AI & ML</button>
          <button type="button" className="btn btn-light">Full Stack</button>
          <button type="button" className="btn btn-light">Data Science</button>
          <button type="button" className="btn btn-light">syber Secuity</button>
        </div>


        <div className="container mt-5 lh-1">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 col-sm-12 projectsCard">
              <div className="card" style={{ width: "18rem" }}>
                <div className="imgCard"><img src="https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop" className="card-img-top" alt="..." /></div>
                <div className="card-body">
                  <h5 className="card-title">E-Commerce Platform with AI Recommendations</h5>

                  <p className='rounded-circle name'>RS</p>

                  <p className="card-text">Full-featured shopping platform with AI-powered product recommendations</p>
                  <button className='projectsButton'>React</button>
                  <button className='projectsButton'>Node.js</button>
                  <button className='projectsButton'>MongoDB</button>
                  <button className='projectsButton'>TensorFlow.js</button>
                  <hr />
                  <p>Pascement</p>
                  <p style={{ color: "green" }}>₹8 LPA at Flipkart</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 projectsCard">
              <div className="card" style={{ width: "18rem" }}>
                <div className="imgCard"><img src="https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop" className="card-img-top" alt="..." /></div>
                <div className="card-body">
                  <h5 className="card-title">Smart Home Security System</h5>
                  <p className='rounded-circle name'>PP</p>
                  <p>IoT-based security system with facial recognition and intrusion detection</p>
                  <button className='projectsButton'>Python</button>
                  <button className='projectsButton'>OpenCV</button>
                  <button className='projectsButton'>Raspberry Pi</button>
                  <button className='projectsButton'>Machine Learning</button>
                  <hr />
                  <p>Pascement</p>
                  <p style={{ color: "green" }}>₹10 LPA at Wipro</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 projectsCard">
              <div className="card" style={{ width: "18rem" }}>
                <div className="imgCard"><img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop" className="card-img-top" alt="..." /></div>
                <div className="card-body">
                  <h5 className="card-title">Stock Market Prediction AI</h5>
                  <p className='rounded-circle name'>AV</p>
                  <p>ML model predicting stock trends with 85% accuracy using LSTM networks</p>
                  <button className='projectsButton'>Python</button>
                  <button className='projectsButton'>TensorFlow</button>
                  <button className='projectsButton'>Pandas</button>
                  <button className='projectsButton'>Keras</button>
                  <hr />
                  <p>Pascement</p>
                  <p style={{ color: "green" }}>₹12 LPA at Goldman Sachs</p>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 projectsCard">
              <div className="card" style={{ width: "18rem" }}>
                <div className="imgCard"><img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop" className="card-img-top" alt="..." /></div>
                <div className="card-body">
                  <h5 className="card-title">Healthcare Data Analytics Dashboard</h5>
                  <p className='rounded-circle name'>SR</p>
                  <p>Real-time dashboard analyzing patient data for hospitals</p>
                  <button className='projectsButton'>Python</button>
                  <button className='projectsButton'>Power BI</button>
                  <button className='projectsButton'>SQL</button>
                  <button className='projectsButton'>Tableau</button>
                  <hr />
                  <p>Pascement</p>
                  <p style={{ color: "green" }}>₹9 LPA at Apollo Hospitals</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 projectsCard">
              <div className="card" style={{ width: "18rem" }}>
                <div className="imgCard"><img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop" className="card-img-top" alt="..." /></div>
                <div className="card-body">
                  <h5 className="card-title">Social Media Sentiment Analyzer</h5>
                  <p className='rounded-circle name'>VS</p>
                  <p>NLP-based tool analyzing brand sentiment from social media posts</p>
                  <button className='projectsButton'>Python</button>
                  <button className='projectsButton'>NLTK</button>
                  <button className='projectsButton'>spaCy</button>
                  <button className='projectsButton'>Flask</button>
                  <hr />
                  <p>Pascement</p>
                  <p style={{ color: "green" }}>₹11 LPA at Amazon</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 projectsCard">
              <div className="card" style={{ width: "18rem" }}>
                <div className="imgCard"><img src="https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&h=400&fit=crop" className="card-img-top" alt="..." /></div>
                <div className="card-body">
                  <h5 className="card-title">Food Delivery App with Real-Time Tracking</h5>
                  <p className='rounded-circle name'>AG</p>
                  <p>Mobile-first delivery platform with live GPS tracking</p>
                  <button className='projectsButton'>React Native</button>
                  <button className='projectsButton'>Firebase</button>
                  <button className='projectsButton'>Google Maps API</button>
                  <button className='projectsButton'>Redux</button>
                  <hr />
                  <p>Pascement</p>
                  <p style={{ color: "green" }}>₹7 LPA at Zomato</p>
                </div>
              </div>
            </div>

          </div>


        </div>
        <div className="text-center mt-5">
          <button className='btt'>WHY CHOOSE US</button>
          <h1 >WHY CHOOSE USWhy Choose TIPS-G: Your Best Choice for IT Career Transformation</h1>
          <p>Industry-leading training with guaranteed placement and hands-on experience</p>
        </div>
        <div className="container p-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6 col-ms-12 ">
              <div className="card spacilityCard">
                <div className="card-body">
                  <p className='spacilityCard1 text-center align-items-center fs-2'><i className="fa-regular fa-circle-dot"></i></p>
                  <h4 className="card-title">100% Placement Guarantee</h4>
                  <p className="card-text">Guaranteed job placement with top IT companies. Our dedicated placement cell works tirelessly to ensure your success with <b>100+ partner companies.</b></p>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-ms-12 ">
              <div className="card spacilityCard">
                <div className="card-body">
                  <p className='spacilityCard1 text-center align-items-center fs-2'><i className="fa-solid fa-book-open"></i></p>
                  <h4 className="card-title">Expert-Led Training</h4>
                  <p className="card-text">Learn from industry professionals with 10+ years of experience. Real-world knowledge you can apply immediately in AI, Full Stack, and Data Science.</p>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-ms-12 ">
              <div className="card spacilityCard">
                <div className="card-body">
                  <p className='spacilityCard1 text-center align-items-center fs-2'><i className="fa-solid fa-basket-shopping"></i></p>
                  <h4 className="card-title">Live Project Experience</h4>
                  <p className="card-text">Work on real industry projects during your training. Build a portfolio that impresses employers and showcases your skills.</p>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-ms-12 ">
              <div className="card spacilityCard">
                <div className="card-body">
                  <p className='spacilityCard1 text-center align-items-center fs-2'><i className="fa-solid fa-scroll-torah"></i></p>
                  <h4 className="card-title">Industry Certification</h4>
                  <p className="card-text">Earn globally recognized certifications that add value to your resume and career prospects in IT.</p>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-ms-12 ">
              <div className="card spacilityCard">
                <div className="card-body">
                  <p className='spacilityCard1 text-center align-items-center fs-2'><i className="fa-solid fa-binoculars"></i></p>
                  <h4 className="card-title">Small Batch Size</h4>
                  <p className="card-text">Maximum 30 students per batch ensures personalized attention and better learning outcomes with expert guidance.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-ms-12 ">
              <div className="card spacilityCard">
                <div className="card-body">
                  <p className='spacilityCard1 text-center align-items-center fs-2'><i className="fa-solid fa-chess"></i></p>
                  <h4 className="card-title">Flexible Timings</h4>
                  <p className="card-text">Morning, evening, and weekend batcqFhes available. Learn at your own pace without compromising work or studies.</p>

                </div>
              </div>
            </div>
          </div>
        </div>
</div >

      <div className="text-center mt-5">
        <button className='btt1'>WHY CHOOSE US</button>
        <h1 className='mt-3'><b>Our Industry-Ready IT Training Courses</b></h1>
        <p>Choose from our wide range of professional courses in Full Stack Development, <br />Data Science & AI, Cyber Security, Digital Marketing, and Cloud Computing <br /> designed for career success</p>
      </div>

      <div className="container">
        <div className="row g-3">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card" style={{ width: "18rem" }}>
              <div className="Courses " >
                <div className="fs-1 text-center "><i className="fa-solid fa-user-graduate" ></i></div>
                <p className='fs-2 mb-5'><b>data science</b></p>
              </div>
              <div className="card-body">
                <button className='btt'>Data Science</button>
                <h5 className="card-title">Data Science</h5>
                <p className="card-text">"Unlock the absurdity of data with Data Science: Transform chaos into innovative insights!"</p>
                <div style={{ display: "flex", justifyContent: "space-between" }}><p style={{ color: "green" }}><i className="fa-regular fa-clock"></i>2880hrs</p>
                  <p >Certified</p></div>
                <button className="btn btn-primary w-100">View Details <i className="fa-sharp fa-solid fa-right"></i></button>
              </div>

            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card" style={{ width: "18rem" }}>
              <div className="Courses ">
                <div className="fs-1 text-center "><i className="fa-solid fa-user-graduate" ></i></div>
                <p className='fs-2 mb-5'><b>Cyber Security</b></p>
              </div>
              <div className="card-body">
                <button className='btt'>Cyber Security</button>
                <h5 className="card-title">Cyber Security</h5>
                <p className="card-text">"Master cutting-edge cyber defense skills in 24 months to protect data and secure digital futures!"</p>
                <div style={{ display: "flex", justifyContent: "space-between" }}><p style={{ color: "green" }}><i className="fa-regular fa-clock"></i>2880hrs</p>
                  <p >Certified</p></div>
                <button className="btn btn-primary w-100">View Details <i className="fa-sharp fa-solid fa-right"></i></button>
              </div>

            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card" style={{ width: "18rem" }}>
              <div className="Courses ">
                <div className="fs-1 text-center "><i className="fa-solid fa-user-graduate" ></i></div>
                <p className='fs-2 mb-5'><b>data science</b></p>
              </div>
              <div className="card-body">
                <button className='btt'>Data Science</button>
                <h5 className="card-title">Certified Ethical Hacker by TIPS-G</h5>
                <p className="card-text">Master ethical hacking skills to protect systems and outsmart cyber threats in just months!</p>
                <div style={{ display: "flex", justifyContent: "space-between" }}><p style={{ color: "green" }}><i className="fa-regular fa-clock"></i>120hrs</p>
                  <p >Certified</p></div>

                <button className="btn btn-primary w-100">View Details <i className="fa-sharp fa-solid fa-right"></i></button>
              </div>

            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card" style={{ width: "18rem" }}>
              <div className="Courses ">
                <div className="fs-1 text-center "><i className="fa-solid fa-user-graduate" ></i></div>
                <p className='fs-2 mb-5'><b>data science</b></p>
              </div>
              <div className="card-body">
                <button className='btt'>Data Science</button>
                <h5 className="card-title">Certified Artificial Intelligence & Machine Learning Engineer</h5>
                <p className="card-text">"Master AI & ML skills to elevate your career and drive innovation in just months!"</p>
                <div style={{ display: "flex", justifyContent: "space-between" }}><p style={{ color: "green" }}><i className="fa-regular fa-clock"></i>2880hrs</p>
                  <p >Certified</p></div>
                <button className="btn btn-primary w-100">View Details <i className="fa-sharp fa-solid fa-right"></i></button>
              </div>

            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card" style={{ width: "18rem" }}>
              <div className="Courses ">
                <div className="fs-1 text-center "><i className="fa-solid fa-user-graduate" ></i></div>
                <p className='fs-2 mb-5'><b>programming</b></p>
              </div>

              <div className="card-body">
                <button className='btt'>programming</button>
                <h5 className="card-title">Certified Full Stack Software Developer</h5>
                <p className="card-text">Explore the 3-year undergraduate course, Bachelor of Computer Applications (BCA), delving into computer</p>
                <div style={{ display: "flex", justifyContent: "space-between" }}><p style={{ color: "green" }}><i className="fa-regular fa-clock"></i>4320hrs</p>
                </div>
                <button className="btn btn-primary w-100">View Details <i className="fa-sharp fa-solid fa-right"></i></button>
              </div>

            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card" style={{ width: "18rem" }}>
              <div className="Courses ">
                <div className="fs-1 text-center "><i className="fa-solid fa-user-graduate" ></i></div>
                <p className='fs-2 mb-5'><b>office automation</b></p>
              </div>

              <div className="card-body">
                <button className='btt'>office automation</button>
                <h5 className="card-title">Advanced Excel with Data Analytics</h5>
                <p className="card-text">Master Excel formulas, pivot tables, macros, Power Query, and data visualization</p>
                <div style={{ display: "flex", justifyContent: "space-between" }}><p style={{ color: "green" }}><i className="fa-regular fa-clock"></i>60hrs</p>
                  <p >Certified</p></div>
                <button className="btn btn-primary w-100">View Details <i className="fa-sharp fa-solid fa-right"></i></button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <button style={{ width: "200px", height: "40px", borderRadius: "20px", border: "2px solid blue", color: "blue" }}>View All Corses <i className="fa-solid fa-chevron-right"></i></button>
      </div>

      <div className="text-center mt-5 lh-1">
        <button className='btn-outline-none mt-5' style={{ color: "purple", backgroundColor: "rgba(225, 147, 225, 0.6)", border: "none", borderRadius: "5px" }}>HELP CENTER</button>
        <p className='mt-4 fs-1'><b>Frequently Asked Questions</b></p>
        <p className='fs-4'>Find answers to common questions about our courses, admissions, and more</p> 
        
        
        </div>

      <div className="bg-danger text-center  text-light mt-5 p-5" >
        <div ><h1><b>Ready to Transform Your Career? <br /> Join TIPS-G Today!</b></h1>
          <p>Join 500+ successful students who landed their dream jobs. Start your journey today with 100% job placement assistance. <br /> Explore our scholarship opportunities and read success stories on our blog.</p></div>
        
        

        <div className="continer">
          <div className="row g-3">
            <div className="col-lg-3 col-md-1" ></div>
            <div className="col-lg-3 col-md-5 col-sm-12" >
              <button className='p-3 text-danger Transformbtn0' onClick={()=>Navigate('/applynow')}>Apply Now -Limited Seats! <i className="fa-solid fa-arrow-right"></i></button> </div>
            <div className="col-lg-3 col-md-5 col-sm-12" >
              <button className='p-3  Transformbtn1' onClick={()=>Navigate('/contact')}>Conect Us</button> </div>
            <div className="col-lg-3 col-md-1" ></div>
          </div>
        </div>
      </div>







    </div >
  )
}

export default Home