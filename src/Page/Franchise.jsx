import React, { useState, useEffect } from 'react';
import './Franchise.css'

const Franchise = () => {
  // Inject Bootstrap CSS
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    state: '',
    experience: '',
    funding: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add success logic here
  };

  const CheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-success me-2">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  const CheckCircleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success me-2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );

  return (
    <div style={{ fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#333' }}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-badge">BEST OPPORTUNITY</div>
          <h1 className="hero-title display-4 fw-bold mb-5">
            Join the <span>Revolution</span> in Indian<br />Education
          </h1>

          <div className="row g-4">
           <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="feature-card">
                <CheckIcon />
                <h5 className="mt-3">Assured Earnings up to ₹1 Cr</h5>
                <p className="small text-white-50">Earn handsome profit on your investment</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="feature-card">
                <CheckIcon />
                <h5 className="mt-3">Government Approved</h5>
                <p className="small text-white-50">Fully compliance with NEP 2020 guidelines</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="feature-card">
                <CheckIcon />
                <h5 className="mt-3">Break-even in 6 Months</h5>
                <p className="small text-white-50">Quick ROI with high demand courses</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="feature-card">
                <CheckIcon />
                <h5 className="mt-3">100% Placement Guarantee</h5>
                <p className="small text-white-50">Attach students with top corporate names</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="section-header">
            <h4 className="section-badge">ABOUT TIPS-G</h4>
            <h2 className="fw-bold">Why Choose TIPS-G Franchise?</h2>
          </div>
          <div className="row g-4">
            {[
              { title: "Hardware and Tool Kit Transfer", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400", desc: "Proper assistance to set up your lab and classroom." },
              { title: "Dedicated Marketing Support", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400", desc: "Complete marketing guides and promotional materials." },
              { title: "Huge Earning Potential", img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=400", desc: "Stable revenue stream from various courses and regions." },
              { title: "High Ticket Customers", img: "https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&q=80&w=400", desc: "Access to premium segments for better margins." },
              { title: "Certified Trainers", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400", desc: "Expert guidance from professional industry experts." },
              { title: "Minimal Infrastructure", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400", desc: "Low set up cost with high scalability potential." }
            ].map((item, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card why-choose-card">
                  <img src={item.img} alt={item.title} className="why-choose-img" />
                  <div className="card-body">
                    <h6 className="fw-bold mb-2">{item.title}</h6>
                    <p className="small text-muted mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earning Potential Section */}
      <section className="py-5">
        <div className="container py-4">
          <div className="section-header">
            <span className="section-badge" style={{ color: '#28a745' }}>EARNING ANALYSIS</span>
            <h2 className="fw-bold">Your Earning Potential</h2>
            <p className="text-muted">Calculate your possible earnings based on center scale.</p>
          </div>
          <div className="row g-4">
            {[
              { perc: "10%", revenue: "₹1.5 Cr", border: "v1" },
              { perc: "15%", revenue: "₹2.25 Cr", border: "v2" },
              { perc: "20%", revenue: "₹3 Cr", border: "v3" }
            ].map((plan, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card earning-card">
                  <div className={`earning-header ${plan.border}`}>
                    <small className="text-muted d-block mb-1">PROFIT PERCENTAGE</small>
                    <h2 className="fw-bold text-primary">{plan.perc}</h2>
                  </div>
                  <div className="potential-box">
                    <small className="text-muted d-block">Est. Annual Revenue</small>
                    <h4 className="fw-bold text-primary mb-0">{plan.revenue}</h4>
                  </div>
                  <div className="earning-stats">
                    <div className="stat-row">
                      <span className="stat-label">Net Profit</span>
                      <span className="stat-value">₹45 Lakhs</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">ROI Ratio</span>
                      <span className="stat-value">₹28 Lakhs</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Yearly ROI</span>
                      <span className="stat-value">₹32 Lakhs</span>
                    </div>
                    <button className="btn btn-primary w-100 mt-3 py-2 fw-bold">Learn More &rsaquo;</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="form-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="badge bg-warning text-dark mb-3 px-3 py-2 fw-bold">JOIN THE NETWORK</div>
              <h2 className="display-5 fw-bold mb-4">Apply for <span style={{ color: '#ffca28' }}>TIPS-G</span> Franchise</h2>
              <p className="lead text-white-50 mb-4">Join the India's fastest growing community of educational franchise partners. Our team will contact you within 24 hours.</p>

              <ul className="list-unstyled mb-5">
                <li className="mb-3 d-flex align-items-center"><CheckCircleIcon /> Low Investment High Returns</li>
                <li className="mb-3 d-flex align-items-center"><CheckCircleIcon /> Complete Training & Support</li>
                <li className="mb-3 d-flex align-items-center"><CheckCircleIcon /> Proven Business Model</li>
                <li className="mb-3 d-flex align-items-center"><CheckCircleIcon /> Strong Brand Recognition</li>
              </ul>

              <div className="p-4 rounded-3" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <p className="small mb-2 fw-bold">Contact Us Directly</p>
                <p className="mb-1 small">📞 +91 999 000 0000</p>
                <p className="mb-0 small">📧 franchise@tipsg.in</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="form-container shadow-lg">
                <h4 className="fw-bold mb-4">Franchise Application Form</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row g-2">
                    <div className="col-md-6">
                      <label className="small fw-bold mb-1">Full Name*</label>
                      <input type="text" name="fullName" className="form-control" placeholder="Enter name" required />
                    </div>
                    <div className="col-md-6">
                      <label className="small fw-bold mb-1">Email Address*</label>
                      <input type="email" name="email" className="form-control" placeholder="Enter email" required />
                    </div>
                  </div>
                  <label className="small fw-bold mb-1">Mobile Number*</label>
                  <input type="tel" name="mobile" className="form-control" placeholder="+91" required />

                  <div className="row g-2">
                    <div className="col-md-6">
                      <label className="small fw-bold mb-1">City*</label>
                      <input type="text" name="city" className="form-control" placeholder="Your city" required />
                    </div>
                    <div className="col-md-6">
                      <label className="small fw-bold mb-1">State*</label>
                      <input type="text" name="state" className="form-control" placeholder="Your state" required />
                    </div>
                  </div>

                  <div className="row g-2">
                    <div className="col-md-6">
                      <label className="small fw-bold mb-1">Education Background</label>
                      <select name="experience" className="form-select">
                        <option>Choose Option</option>
                        <option>Bachelor's</option>
                        <option>Master's</option>
                        <option>Entrepreneur</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="small fw-bold mb-1">Funding Status</label>
                      <select name="funding" className="form-select">
                        <option>Choose Status</option>
                        <option>Ready</option>
                        <option>Arranging</option>
                      </select>
                    </div>
                  </div>

                  <label className="small fw-bold mb-1">Additional Message</label>
                  <textarea name="message" className="form-control" rows="3" placeholder="Tell us why you want to join us"></textarea>

                  <button type="submit" className="btn btn-danger submit-btn mt-2">Submit Franchise Application &rsaquo;</button>
                  <p className="text-center small text-muted mt-3 mb-0">By clicking you agree to our <a href="#">Terms & Conditions</a></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="section-header">
            <span className="section-badge">ONBOARDING</span>
            <h2 className="fw-bold">Simple 4-Step Process</h2>
          </div>
          <div className="row position-relative">
            <div className="col-md-3 process-step">
              <div className="process-line d-none d-md-block"></div>
              <div className="step-number">01</div>
              <h6 className="fw-bold">Submit Application</h6>
              <p className="small text-muted">Fill out the form to express your interest.</p>
            </div>
            <div className="col-md-3 process-step">
              <div className="process-line d-none d-md-block"></div>
              <div className="step-number">02</div>
              <h6 className="fw-bold">Discussion Call</h6>
              <p className="small text-muted">Our team will call you for an initial chat.</p>
            </div>
            <div className="col-md-3 process-step">
              <div className="process-line d-none d-md-block"></div>
              <div className="step-number">03</div>
              <h6 className="fw-bold">Site Visit & Agreement</h6>
              <p className="small text-muted">Verification of location and legal documents.</p>
            </div>
            <div className="col-md-3 process-step">
              <div className="step-number">04</div>
              <h6 className="fw-bold">Launch Your Center</h6>
              <p className="small text-muted">Grand opening and start admitting students.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="cta-footer">
        <div className="container">
          <h2 className="fw-bold mb-3">Ready to Transform Your Future?</h2>
          <p className="mb-4 text-white-50">Join India's fastest growing education franchise. Limited territories available.</p>
          <button className="btn-apply-now shadow">Apply Now &rsaquo;</button>
          <div className="mt-5 pt-4 border-top border-white border-opacity-10">
            <p className="small mb-0 text-white-50">© 2026 TIPS-G Education. All Rights Reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Franchise;