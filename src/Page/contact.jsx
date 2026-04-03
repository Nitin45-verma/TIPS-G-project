import React, { useState, useEffect } from 'react';
import './contact.css'

const Header = () => (
    <section className="bg-gradient-header pt-5 pb-5 pb-md-5">
        <div className="container text-center pt-4 pb-5">
            <span className="badge-soft-light text-uppercase d-inline-block mb-3" style={{ fontSize: '0.75rem' }}>
                GET IN TOUCH
            </span>
            <h1 className="display-4 fw-bold text-white mb-2">
                Contact <span className="text-gradient">TIPS-G</span>
            </h1>
            <p className="lead text-white-50 fs-6">
                Have questions? We're here to help you 24/7. Reach out and start your journey today.
            </p>
        </div>
    </section>
);

const ContactInfoCards = () => (
    <div className="container overlap-cards mb-5">
        <div className="row g-4 justify-content-center">
            {/* Phone Card */}
            <div className="col-md-4">
                <div className="card border-0 shadow-sm rounded-4 h-100 text-center p-4">
                    <div className="icon-box-lg bg-blue-light">
                        <i className="bi bi-telephone"></i>
                    </div>
                    <h6 className="fw-bold text-primary mb-1">CALL US ON (24/7)</h6>
                    <h5 className="fw-bold text-dark mb-0">+91-782089101</h5>
                </div>
            </div>
            {/* Email Card */}
            <div className="col-md-4">
                <div className="card border-0 shadow-sm rounded-4 h-100 text-center p-4">
                    <div className="icon-box-lg bg-red-light">
                        <i className="bi bi-envelope"></i>
                    </div>
                    <h6 className="fw-bold text-danger mb-1">MAIL US</h6>
                    <h5 className="fw-bold text-dark mb-0">info@tipsg.in</h5>
                </div>
            </div>
            {/* Visit Card */}
            <div className="col-md-4">
                <div className="card border-0 shadow-sm rounded-4 h-100 text-center p-4">
                    <div className="icon-box-lg bg-green-light">
                        <i className="bi bi-geo-alt"></i>
                    </div>
                    <h6 className="fw-bold text-success mb-1">VISIT US</h6>
                    <p className="text-muted small mb-0 lh-sm px-2">
                        12/3 Main Street, Wall Street Road, New York
                    </p>
                </div>
            </div>
        </div>
    </div>
);

const ContactFormAndImage = () => (
    <section className="container py-5">
        <div className="row g-5 align-items-center">
            {/* Form Column */}
            <div className="col-lg-6">
                <div className="card border-0 shadow rounded-4 p-4 p-md-5">
                    <h3 className="fw-bold mb-2">Send Us a Message</h3>
                    <p className="text-muted mb-4 small">Fill out the form and we'll get back to you within 24 hours.</p>

                    <form>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Your Name *" required />
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3 mb-md-0">
                                <input type="email" className="form-control" placeholder="Email Address *" required />
                            </div>
                            <div className="col-md-6">
                                <input type="tel" className="form-control" placeholder="Phone Number *" required />
                            </div>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Subject (Optional)" />
                        </div>
                        <div className="mb-4">
                            <textarea className="form-control" rows="4" placeholder="Your Message / Query *" required></textarea>
                        </div>
                        <button type="button" className="btn btn-primary w-100 rounded-3 py-2 fw-semibold d-flex justify-content-center align-items-center gap-2">
                            Send Message <i className="bi bi-send"></i>
                        </button>
                    </form>
                </div>
            </div>

            {/* Image Column */}
            <div className="col-lg-6">
                <div className="image-frame-container">
                    <div className="image-frame-bg"></div>
                    {/* Using a high quality stock image URL that matches the theme of a professional woman */}
                    <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                        alt="Professional Woman in Office"
                        className="image-frame-img"
                    />
                </div>
            </div>
        </div>
    </section>
);

const FAQItem = ({ item, isActive, onClick }) => {
    return (
        <div
            className={`card faq-card rounded-4 mb-3 ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            <div className="card-body p-3 p-md-4 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                    <div className="faq-icon-wrapper flex-shrink-0">
                        <i className="bi bi-hexagon-fill"></i>
                    </div>
                    <div>
                        <span className={`badge ${item.category === 'Course' ? 'badge-course' : 'badge-general'} mb-1 d-inline-block`}>
                            {item.category}
                        </span>
                        <h6 className="mb-0 fw-bold text-dark fs-6">{item.question}</h6>
                    </div>
                </div>
                <i className={`bi bi-chevron-${isActive ? 'up' : 'down'} text-muted flex-shrink-0 ms-2`}></i>
            </div>
            {/* Collapsible Content Area - simulated as closed in the original image but added for functionality */}
            {isActive && (
                <div className="card-body pt-0 px-4 pb-4 text-muted border-top border-light mt-2" style={{ fontSize: '0.9rem' }}>
                    <p className="mt-3 mb-0">
                        Detailed answer for "{item.question}" goes here. This section provides the necessary information to address the user's query effectively.
                    </p>
                </div>
            )}
        </div>
    );
};

const FAQSection = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [activeFaq, setActiveFaq] = useState(null);

    const filters = ['All', 'Courses', 'General'];

    const faqs = [
        { id: 1, category: 'Course', question: 'Do students get a certificate after completing a course?' },
        { id: 2, category: 'Course', question: 'Do TIPS-G courses include practical projects?' },
        { id: 3, category: 'Course', question: 'What is the duration of courses at TIPS-G?' },
        { id: 4, category: 'Course', question: 'Are TIPS-G courses available online?' },
        { id: 5, category: 'Course', question: 'Which courses are available at TIPS-G?' },
        { id: 6, category: 'General', question: 'What makes TIPS-G different from other IT training institutes?' },
        { id: 7, category: 'General', question: 'Where is TIPS-G located?' },
        { id: 8, category: 'General', question: 'Is TIPS-G a government recognized or certified institute?' },
        { id: 9, category: 'General', question: 'What is TIPS-G?' },
    ];

    const filteredFaqs = activeFilter === 'All'
        ? faqs
        : faqs.filter(faq => faq.category === (activeFilter === 'Courses' ? 'Course' : 'General'));

    return (
        <section className="container py-5 bg-white">
            <div className="text-center mb-5">
                <span className="badge-soft-primary text-uppercase d-inline-block mb-3">
                    HELP DESK
                </span>
                <h2 className="fw-bold mb-2">Frequently Asked Questions</h2>
                <p className="text-muted small">Find answers to common questions about our courses, admissions, and more.</p>

                {/* Filters */}
                <div className="d-flex justify-content-center gap-2 mt-4">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            className={`btn-filter ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-10">
                    {filteredFaqs.map(faq => (
                        <FAQItem
                            key={faq.id}
                            item={faq}
                            isActive={activeFaq === faq.id}
                            onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const MapSection = () => (
    <section className="container py-4">
        <div className="rounded-4 overflow-hidden shadow-sm border border-light" style={{ height: '400px' }}>
            <iframe
                title="TIPS-G Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d113911.26185361025!2d75.71188371191068!3d26.88514169528243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </section>
);

const LocationCard = ({ title, status, email, phone, address }) => (
    <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
        <div className="card location-card rounded-4 p-4 text-white">
            <div className="d-flex align-items-center mb-4">
                <div className="loc-icon-box text-white me-3">
                    <i className="bi bi-building"></i>
                </div>
                <div>
                    <h6 className="mb-0 fw-bold d-inline-block">{title}</h6>
                    {status === 'Active' && <span className="badge-status">Active</span>}
                </div>
            </div>
            <div className="mt-2">
                <p className="loc-text"><i className="bi bi-envelope me-2 opacity-75"></i> Email: {email}</p>
                <p className="loc-text"><i className="bi bi-telephone me-2 opacity-75"></i> Phone: {phone}</p>
                <p className="loc-text mb-0 d-flex align-items-start">
                    <i className="bi bi-geo-alt me-2 mt-1 opacity-75"></i>
                    <span style={{ lineHeight: '1.4' }}>{address}</span>
                </p>
            </div>
        </div>
    </div>
);

const FooterSection = () => (
    <section className="bg-gradient-footer pt-5 pb-5 mt-4">
        <div className="container py-4">
            <div className="text-center mb-5">
                <span className="badge-soft-light text-uppercase d-inline-block mb-3" style={{ fontSize: '0.75rem', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                    OUR CENTERS
                </span>
                <h2 className="fw-bold text-white mb-2">Visit Our Centers</h2>
                <p className="text-white-50 small">We have multiple branches across the region.</p>
            </div>

            <div className="row g-4">
                <LocationCard
                    title="TIPS-G Chomu"
                    status="Active"
                    email="info@tipsg.in"
                    phone="+91-782089101"
                    address="First Floor, Agarwal Tower, Chomu"
                />
                <LocationCard
                    title="TIPS-G Kotputli"
                    status="Active"
                    email="info@tipsg.in"
                    phone="+91-782089101"
                    address="Ground Floor, Sharma Complex, Main Market, Kotputli"
                />
                <LocationCard
                    title="TIPS-G Alwar"
                    status="Active"
                    email="info@tipsg.in"
                    phone="+91-782089101"
                    address="1st Floor, Subhash Chowk, Opp. Jain Mandir"
                />
                <LocationCard
                    title="TIPS-G Jaipur HO"
                    status="Active"
                    email="info@tipsg.in"
                    phone="+91-782089101"
                    address="3rd Floor, Near Mansarovar Metro Station, Jaipur"
                />
            </div>
        </div>
    </section>
);

const FloatingActionButton = () => (
    <a href="#register" className="fab-button">
        <i className="bi bi-star-fill"></i> Register Now
    </a>
);

export default function Contact() {
    useEffect(() => {
    }, []);

    return (
        <div className="position-relative">
            <Header />
            <ContactInfoCards />
            <ContactFormAndImage />
            <FAQSection />
            <MapSection />
            <FooterSection />
            <FloatingActionButton />
        </div>
    );
}