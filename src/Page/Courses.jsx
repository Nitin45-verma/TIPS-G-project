import React, { useState, useEffect } from 'react';

import './Courses.css'

// --- Custom Icons (Inline SVGs) ---
const SearchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
);
const ChevronRight = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
);
const StarIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
);

const Courses = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
        document.head.appendChild(link);
        return () => document.head.removeChild(link);
    }, []);

    const courseSections = [
        {
            title: "Web Development Training Bootcamps",
            courses: [{
                id: 1,
                name: "Frontend Web Development Bootcamp",
                type: "SPECIALIZATION IN WEB DEVELOPMENT",
                gradient: "linear-gradient(135deg, #6366f1, #a855f7)",
                icon: "🌐"
            }]
        },
        {
            title: "Digital Marketing Professional Programs",
            courses: [{
                id: 2,
                name: "Digital Marketing Professional Course",
                type: "SPECIALIZATION IN DIGITAL MARKETING",
                gradient: "linear-gradient(135deg, #3b82f6, #2563eb)",
                icon: "📢"
            }]
        },
        {
            title: "Office Automation & Data Analytics Courses",
            courses: [{
                id: 3,
                name: "Advanced Excel with Data Analytics",
                type: "SPECIALIZATION IN OFFICE AUTOMATION",
                gradient: "linear-gradient(135deg, #ec4899, #f43f5e)",
                icon: "📊"
            }]
        }
    ];

    return (
        <>
            
            <div className="bg-light" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>

                {/* Hero */}
                <header className="hero-bg text-center">
                    <div className="container">
                        <span className="badge rounded-pill bg-primary bg-opacity-25 mb-3 px-3 py-2">OUR OFFERING</span>
                        <h1 className="display-4 fw-bold mb-4">Our Industry-Ready IT Training Courses in India | TIPS-G</h1>
                        <p className="lead mb-5 opacity-75 mx-auto" style={{ maxWidth: '800px' }}>
                            Explore our expert range of programming courses, web development bootcamps, and data analytics training.
                        </p>
                        
                    </div>
                </header>

                {/* Recommendations */}
                <div className="search-box mx-auto d-flex align-items-center gap-2 mt-5" style={{  position:"sticky", top:"58px" , zIndex:"1"}}>
                            <div className="ps-3 "><SearchIcon /></div>
                            <input type="text" className="form-control border-0 shadow-none" placeholder="Search for courses..." />
                            <button className="btn btn-primary px-4 py-2 rounded-3 fw-bold">Search</button>
                        </div>
                <section className="container my-5">
                    <div className="recom-card card">
                        <div className="recom-header d-flex align-items-center gap-3">
                            <StarIcon />
                            <div>
                                <h5 className="mb-0 fw-bold">Recommended for You</h5>
                                <small className="opacity-75">Based on industry trends</small>
                            </div>
                        </div>
                        <div className="list-group list-group-flush">
                            {['Full Stack Web Development', 'Cyber Security', 'Data Science'].map((c, i) => (
                                <div key={i} className="list-group-item p-4 d-flex justify-content-between align-items-center border-0 border-bottom">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="bg-light rounded-circle d-flex align-items-center justify-content-center fw-bold text-muted" style={{ width: 35, height: 35 }}>{i + 1}</div>
                                        <h6 className="mb-0 fw-bold text-dark">{c}</h6>
                                    </div>
                                    <button className="btn btn-link text-decoration-none fw-bold p-0" >View Course <ChevronRight /></button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Main Grid */}
                <main className="container pb-5" >
                    <div className="row g-4">
                        {/* Sidebar */}
                        <aside className="col-lg-3">
                            <div className="sidebar-card card p-4 sticky-top" style={{ top: '125px', zIndex: "0" }}>
                                <h6 className="fw-bold mb-4">Advanced Filters</h6>
                                <div className="mb-4">
                                    <label className="text-muted small fw-bold text-uppercase mb-3 d-block">Category</label>
                                    <div className="d-flex flex-column gap-1">
                                        {['All', 'Web Dev', 'Cyber Security', 'Marketing'].map(cat => (
                                            <button
                                                key={cat}
                                                onClick={() => setActiveCategory(cat)}
                                                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <button className="btn btn-primary w-100 fw-bold py-2 rounded-3 mt-2">Apply Filters</button>
                            </div>
                        </aside>

                        {/* Courses */}
                        <section className="col-lg-9">
                            {courseSections.map((section, idx) => (
                                <div key={idx} className="mb-5">
                                    <div className="d-flex align-items-center gap-3 mb-4">
                                        <div className="bg-primary rounded" style={{ width: 40, height: 4 }}></div>
                                        <h4 className="fw-bold mb-0">{section.title}</h4>
                                    </div>
                                    <div className="row g-4">
                                        {section.courses.map(course => (
                                            <div key={course.id} className="col-md-6">
                                                <div className="course-card card h-100">
                                                    <div className="course-top" style={{ background: course.gradient }}>
                                                        <div className="course-icon-bg">{course.icon}</div>
                                                        <small className="fw-bold opacity-75 mb-2" style={{ letterSpacing: '1px' }}>{course.type}</small>
                                                        <h4 className="fw-bold px-3">{course.name}</h4>
                                                    </div>
                                                    <div className="card-body p-4 text-center">
                                                        <h5 className="fw-bold mb-3">{course.name}</h5>
                                                        <p className="text-muted small mb-4">Master industry-relevant skills with our expert-led bootcamp training programs.</p>
                                                        <button className="btn btn-main w-100 d-flex align-items-center justify-content-center gap-2">
                                                            View Course Details <ChevronRight />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </section>
                    </div>
                </main>

                {/* CTA */}
                <section className="footer-cta text-center mt-5">
                    <div className="container">
                        <h2 className="fw-bold mb-3">Can't Find Your Ideal Course?</h2>
                        <p className="mb-5 opacity-75">Get expert career guidance from our counselors today.</p>
                        <button className="btn btn-light rounded-pill px-5 py-3 fw-bold text-danger shadow-lg">
                            Book Free Counselling
                        </button>
                    </div>
                </section>

            </div>
            
        </>
    );
};

export default Courses;