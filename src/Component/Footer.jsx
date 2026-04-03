import React from 'react'
import './Footer.css'
import rns from './rus.png'


function Footer() {
    return (
        <div style={{backgroundColor:"#111827",marginTop:"3rem", padding:"3rem"}}>
            <div className="container text-light">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card h-100 text-light" style={{backgroundColor:"#111827"}} >
                            <img src={rns} alt="LOGO" style={{ width: "160px",filter: "brightness(0) invert(1)" }} />
                            <div className="card-body">
                                <p className="card-text">India's leading IT training institute with 100% job placement guarantee. Transform your career with industry-ready skills.</p>
                                <p className='card-text'>
                                    <i className="bi bi-facebook"></i>
                                    <i className="bi bi-instagram"></i>
                                    <i className="bi bi-linkedin"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 text-light" style={{backgroundColor:"#111827"}}>
                            <div className="card-body">
                                <h5 className="card-title text-primary">Quick Links</h5>
                                <p className="card-text">About</p>
                                <p className="card-text">Our Courses</p>
                                <p className="card-text">Verify Certificate</p>
                                <p className="card-text">Scholarships</p>
                                <p className="card-text">Franchies Opportunity</p>
                                <p className="card-text">Blog & News</p>
                                <p className="card-text">Contact Us</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 text-light" style={{backgroundColor:"#111827"}}>
                            <div className="card-body">
                                <h5 className="card-title text-primary">Popular Courses</h5>
                                <p className="card-text">Full Stack Developer</p>
                                <p className="card-text">Data Science & AI</p>
                                <p className="card-text">Cyber Security</p>
                                <p className="card-text">Degital Marketing</p>
                                <p className="card-text">Cloud Computing</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 text-light" style={{backgroundColor:"#111827"}}>
                            <div className="card-body">
                                <h5 className="card-title text-primary">Contact Us</h5>
                                <p className="card-text"><i className="bi bi-geo-alt text-danger"></i> Gandhi Path Road, Vaishali Nagar, Jaipur - 302021</p>
                                <p className="card-text"><i className="bi bi-telephone text-success"></i> +91-7020609101</p>
                                <p className="card-text"><i className="bi bi-envelope text-primary"></i> info@tipsg.in</p>
                                <hr />
                                <p className="card-text">Government Approved</p>
                                <p className="card-text">ISO Certified</p>
                                <p className="card-text">500+ Placements</p>
                            </div>
                        </div>
                    </div>
                </div >
                <hr />
                <div className='d-flex justify-content-between'>

                    <div className=''><p>© 2026 TIPS-G. All rights reserved. | Empowering Careers Since 2018</p> 
                        <a href="#">Staff/Student Login</a></div>
                    <p>Privacy Policy • Terms of Service • Refund Policy</p>
                </div>
            </div >
        </div>
    )
}

export default Footer