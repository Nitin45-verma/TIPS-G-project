import React, { useState } from 'react';
import './Instructors.css'
import { useNavigate } from 'react-router-dom';

const Instructors = () => {
  const Navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('All Instructors');

  const filters = [
    'All Instructors', 'AI & ML', 'Cyber Security', 'Full Stack',
    'Data Science', 'Cloud & DevOps', 'Mobile Development'
  ];

  return (
    <div className="tips-g-page" style={{ fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="badge-pill-custom">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            Meet Our Team
          </div>
          <h1 className="display-4 fw-bold mb-4">Learn From Industry Experts</h1>
          <p className="lead mx-auto mb-5" style={{ maxWidth: '700px', opacity: 0.9 }}>
            Our instructors bring 10-15 years of real-world experience from top tech companies
            like Google, Amazon, Flipkart, and McKinsey
          </p>

          <div className="row justify-content-center mt-5">
            <div className="col-md-3 mb-4">
              <div className="stats-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
              </div>
              <h2 className="fw-bold mb-0">15+</h2>
              <p className="small opacity-75">Years Avg Experience</p>
            </div>
            <div className="col-md-3 mb-4">
              <div className="stats-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
              </div>
              <h2 className="fw-bold mb-0">100%</h2>
              <p className="small opacity-75">Industry Certified</p>
            </div>
            <div className="col-md-3 mb-4">
              <div className="stats-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h2 className="fw-bold mb-0">5000+</h2>
              <p className=" opacity-75">Students Trained</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-4 shadow-sm">
        <div className="container text-center">
          <div className="d-flex flex-wrap justify-content-center">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`btn btn-filter ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button> 
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Learn Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="display-6 fw-bold mb-3">Ready to Learn From the Best?</h2>
          <p className="mb-4 opacity-90">Join thousands of students who transformed their careers with expert guidance</p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-light px-4 py-2 fw-semibold text-primary" onClick={()=>Navigate('/courses')}>Explore Courses</button>
            <button className="btn btn-outline-light px-4 py-2 fw-semibold" style={{ minWidth: '150px' }}>Schedule a Demo Class</button>
          </div>
        </div>
      </section>
      

    
    </div>
  );
};

export default Instructors;