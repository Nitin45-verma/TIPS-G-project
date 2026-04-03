import React from 'react'
import './Scholarship.css'



const Scholarship = () => {

    const scholarships = [
        {
            id: 1,
            title: "कृषि Scholarship",
            description: "Special scholarship for students from farming background",
            benefits: ["Special farm goodies", "Talent-based prizes up to ₹10 Lakh"],
            seats: "7/60",
            prize: "₹10.0L",
            discount: "90%"
        },
        {
            id: 2,
            title: "SC/ST OBC Scholarship",
            description: "Reserved category scholarship program",
            benefits: ["Free access to other industrial courses", "Talent-based prizes up to ₹1 Lakh"],
            seats: "5/60",
            prize: "₹10.0L",
            discount: "90%"
        }
        ,
        {
            id: 3,
            title: "Defense Scholarship",
            description: "For defense personnel and their families",
            benefits: ["Free access to other industrial courses", "Talent-based prizes up to ₹5 Lakh"],
            seats: " 4/60",
            prize: "₹10.0L",
            discount: "90%"
        }
        ,
        {
            id: 4,
            title: "बेटी पढ़ाओ Scholarship",
            description: "Empowering women through education",
            benefits: ["Free access to other industrial courses", "Talent-based prizes up to ₹7 Lakh"],
            seats: "11/50",
            prize: "₹10.0L",
            discount: "90%"
        }
    ];

    return (
        <div>
            {/* Header */}
            <div className="Scholarship text-center text-white p-5 mb-5">
                <button className='Scholarshipbutton mt-5 ' >FINANCIAL AID</button>
                <p className='fs-1 text-white'><b>Scholarship Programs</b></p>
                <p className='fs-4'>Get up to <b className='fs-2 text-warning'>90% OFF</b> on course fees</p>
                <p>We believe financial constraints should never stop your dreams. Apply for our scholarship programs and transform your future.</p>
            </div>

            <div className="container mt-5">

                {/* card-section */}
                <div className="row justify-content-center g-4">
                    {scholarships.map((item) => (
                        <div className="col-md-5 col-sm-12" key={item.id}>
                            <div className="card scholarship-card h-100">
                                <div className="card-top-border"></div>
                                <div className="card-body p-4">

                                    {/* top-section */}
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div>
                                            <h2 className="fw-bold fs-4 mb-1">{item.title}</h2>
                                            <p className="text-secondary small">{item.description}</p>
                                        </div>
                                        <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '45px', height: '45px' }}>
                                            <span className="text-white fw-bold">🎗️</span>
                                        </div>
                                    </div>

                                    {/* Benefits Section */}
                                    <div className="benefits-box  mb-4 p-3" style={{ backgroundColor: "rgba(81, 194, 216, 0.55) ", borderRadius: "15px" }}>
                                        <h6 className="fw-bold mb-3 d-flex align-items-center">
                                            <span className="me-2 text-primary">🎁</span> Benefits & Eligibility:
                                        </h6>
                                        {item.benefits.map((benefit, index) => (
                                            <div className="mb-2 d-flex align-items-center small" key={index}>
                                                <span className="text-success me-2">✔</span> {benefit}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Pricing Info */}
                                    <div className="row text-center mb-4">
                                        <div className="col-6 border-end">
                                            <p className="text-secondary x-small mb-0">Scholarship Value</p>
                                            <h5 className="fw-bold">Up to <span className="text-primary">{item.discount}</span> <small className="text-secondary fs-7">OFF</small></h5>
                                        </div>
                                        <div className="col-6">
                                            <p className="text-secondary x-small mb-0">Prize Money</p>
                                            <h5 className="fw-bold text-success">{item.prize}</h5>
                                        </div>
                                    </div>

                                    {/* Seats Urgency */}
                                    <div className="urgency-bar p-3 mb-4 d-flex align-items-center">
                                        <span className="me-2">👥</span> Only {item.seats} seats left!
                                    </div>

                                    <button className="btn btn-primary w-100 apply-btn border-0">
                                        Check Eligibility & Apply &nbsp; →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* CTA */}
                <section className="footer-cta text-center mt-5">
                    <div className="container">
                        <h2 className="fw-bold mb-3">Can't Find Your Ideal Course? Get Expert Career Guidance</h2>
                        <p className="mb-5 opacity-75">Our career counselors are here to help you choose the perfect program for your goals</p>
                        <button className="btn btn-light rounded-pill px-5 py-3 fw-bold text-danger shadow-lg">Talk to Our Counselor  <i className="fa-solid fa-arrow-right-long"></i>
                        </button>
                    </div>
                </section>
        </div>
    )
}

export default Scholarship