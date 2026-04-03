import React, { useEffect } from 'react';
import './ApplyNow.css'

export default function ApplyNow() {
  // Dynamically load Bootstrap and FontAwesome to ensure they work in a standalone environment
  useEffect(() => {
    const loadStyle = (href) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
      return link;
    };

    const bsLink = loadStyle('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
    const faLink = loadStyle('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
    const googleFonts = loadStyle('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    return () => {
      document.head.removeChild(bsLink);
      document.head.removeChild(faLink);
      document.head.removeChild(googleFonts);
    };
  }, []);

  const courses = [
    "3 YEAR CYBER SECURITY GRADUATE PROGRAM",
    "DATA SCIENCE 3 YEAR GRADUATE PROGRAM",
    "Cyber Security",
    "Online Certified Ethical Hacker by TIPS-G",
    "Artificial Intelligence & Machine Learning 3 Year Graduate Program",
    "Certified Full Stack Software Developer",
    "Frontend Web Development Bootcamp",
    "Digital Marketing Professional Course",
    "Advanced Excel with Data Analytics"
  ];

  const features = [
    "100% Job Placement Guarantee",
    "Expert Trainers with 10+ Years Experience",
    "Live Project Training",
    "Industry Certifications",
    "Flexible Batch Timings",
    "Scholarship Opportunities"
  ];

  return (
    <>
      <div className="page-wrapper">
        {/* Header Section */}
        <div className="brand-logo">
          <div className="brand-name">
            <img src="src/assets/TipsGLogo.png" alt="" />
          </div>
          <div className="brand-tagline">Training The Innovators Of Tomorrow</div>
        </div>

        <div className="text-center">
          <h1 className="main-title">Start Your Learning Journey</h1>
          <p className="sub-title">Fill out the form and we'll get back to you soon</p>
        </div>

        {/* Main Content Area */}
        <div className="content-container">
          <div className="row g-4 justify-content-center">

            {/* Left Column: Form */}
            <div className="col-lg-8">
              <div className="form-card">
                <div className="d-flex align-items-center mb-4">
                  <i className="fa-solid fa-graduation-cap text-primary fs-5 me-2"></i>
                  <span className="fw-bold text-dark fs-6">Course Inquiry Form</span>
                </div>

                <form onSubmit={(e) => e.preventDefault()}>
                  {/* Personal Information */}
                  <div className="section-header">Personal Information</div>

                  <div className="mb-3">
                    <label className="custom-label d-block">Full Name *</label>
                    <input type="text" className="form-control custom-input" placeholder="Enter your full name" required />
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="custom-label d-block">Email *</label>
                      <input type="email" className="form-control custom-input" placeholder="your.email@example.com" required />
                    </div>
                    <div className="col-md-6">
                      <label className="custom-label d-block">Phone Number *</label>
                      <input type="text" className="form-control custom-input" placeholder="+91-XXXXXXXXXX" required />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="custom-label d-block">WhatsApp Number (if different)</label>
                    <input type="text" className="form-control custom-input" placeholder="+91-XXXXXXXXXX" />
                  </div>

                  <div className="mb-4">
                    <label className="custom-label d-block">Preferred Center *</label>
                    <select className="form-select custom-input" required defaultValue="">
                      <option value="" disabled>Select a center</option>
                      <option value="center1">TIPS-G chomu - chomu Jaipur</option>
                      <option value="center2">TIPS-G Kotputli - Kotputli - Behror </option>
                      <option value="center3">TIPS-G Alwar - Alwar </option>
                      <option value="center3">TIPS-G Jaipur HQ - Jaipur </option>
                    </select>
                  </div>

                  {/* Courses */}
                  <div className="section-header">Courses You're Interested In</div>

                  <div className="row g-2">
                    {courses.map((course, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="form-check course-box m-0" onClick={(e) => {
                          // Ensure clicking the box toggles the checkbox
                          if (e.target.tagName !== 'INPUT') {
                            const checkbox = e.currentTarget.querySelector('input');
                            checkbox.checked = !checkbox.checked;
                          }
                        }}>
                          <input className="form-check-input" type="checkbox" id={`course-${index}`} />
                          <label className="form-check-label w-100" htmlFor={`course-${index}`}>
                            {course}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Agreement */}
                  <div className="agreement-box">
                    <div className="form-check m-0 d-flex align-items-center">
                      <input className="form-check-input mt-0 me-2" type="checkbox" id="agreement" required />
                      <label className="form-check-label" htmlFor="agreement">
                        I agree to receive updates, course information, and promotional offers via email, SMS, and WhatsApp
                      </label>
                    </div>
                  </div>

                  {/* Submit */}
                  <button type="submit" className="btn-submit">
                    Submit Inquiry
                  </button>
                </form>
              </div>

              <div className="text-center footer-text">
                By submitting this form, you agree to our Terms of Service and Privacy Policy
              </div>
            </div>

            {/* Right Column: Features */}
            <div className="col-lg-4">
              <div className="features-card">
                <h5 className="fw-bold mb-4 text-dark fs-6">Why Choose TIPS-G?</h5>
                <ul className="feature-list">
                  {features.map((feature, index) => (
                    <li className="feature-item" key={index}>
                      <i className="fa-regular fa-circle-check feature-icon"></i>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}