import React, { useState } from 'react';
import './Blog.css'


const Blog = () => {
  const [activeFilter, setActiveFilter] = useState('All Posts');

  const categories = [
    { name: 'All Posts', count: 9 },
    { name: 'News', count: 5 },
    { name: 'Articles', count: 0 },
    { name: 'Success Stories', count: 0 },
    { name: 'Media', count: 0 }
  ];

  const posts = [
    {
      id: 1,
      title: "Future-Proof Your Career: Top 5 IT Skills Demanding Your Attention in 2025",
      category: "Career Tips",
      excerpt: "Discover the top 5 IT skills like AI, Cybersecurity, Cloud Computing, Data Science and DevOps that will be in high demand in 2025. Future-proof your career with...",
      date: "08/03/2025",
      readTime: "5 min",
      author: "TIPS-G Content Team",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Echoes of Innovation: Unpacking the AI Impact Summit 2026 and...",
      category: "News",
      excerpt: "The AI Impact Summit 2026 concluded, defining global AI policy and showcasing India's innovation. Discover the 'New Delhi Declaration' and TIPS-G's story...",
      date: "01/01/2026",
      readTime: "5 min",
      author: "TIPS-G Content Team",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "TIPS-G by RNS IT Solutions: After 12th Guaranteed IT Job Training...",
      category: "News",
      excerpt: "TIPS-G (Training, Internship, Placement, Salary & Graduate) RNS IT Solutions Pvt. Ltd. offers a unique career-focused IT training program for 12th pass...",
      date: "30/12/2025",
      readTime: "5 min",
      author: "TIPS-G Team",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "RNS Group of Companies: TIPS-G Guaranteed On-Job Training...",
      category: "News",
      excerpt: "RNS Group of Companies ke saath jud kar payein aaj ki hi industrial exposure aur practical training. Humara focus karke IT aur business world mein apni alag...",
      date: "25/12/2025",
      readTime: "3 min",
      author: "TIPS-G Team",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      title: "How to Start Your Cyber Security Career: Complete Beginner's Guid...",
      category: "Course Guide",
      excerpt: "Want to become a Cyber Security expert? Learn the roadmap, certifications, skills, and courses needed to break into this high-demand field in 2025.",
      date: "20/12/2025",
      readTime: "8 min",
      author: "TIPS-G Security Team",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      title: "Python vs Java: Which Programming Language Should Y...",
      category: "Course Guide",
      excerpt: "Choosing your first programming language? Compare Python vs Java for beginners - ease of learning, job opportunities, salary, and career paths.",
      date: "15/12/2025",
      readTime: "6 min",
      author: "TIPS-G Tech Team",
      img: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />

      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <div className="badge-insights">Insights & Updates</div>
          <h1 className="hero-title">Blog & <span>News</span></h1>
          <p className="hero-subtitle">Stay updated with the latest insights, success stories, and industry trends</p>
        </div>
      </div>

      <div className="container">
        {/* Search & Filter */}
        <div className="filter-container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="search-input-group d-flex align-items-center bg-white px-3">
                <i className="fa-solid fa-magnifying-glass text-muted"></i>
                <input type="text" className="form-control" placeholder="Search articles, news, and stories..." />
              </div>
              <div className="filter-pills justify-content-center">
                {categories.map(cat => (
                  <div
                    key={cat.name}
                    className={`filter-pill ${activeFilter === cat.name ? 'active' : ''}`}
                    onClick={() => setActiveFilter(cat.name)}
                  >
                    {cat.name} <span className="count-badge">{cat.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Stories Section */}
        <div className="section-header">
          <h2 className="section-title">Featured Stories</h2>
          <span className="trending-badge"><i className="fa-solid fa-fire me-2"></i>Trending</span>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-lg-7">
            <div className="featured-main-card" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200")' }}>
              <div className="featured-overlay">
                <span className="featured-tag"><i className="fa-solid fa-star me-1"></i> Featured</span>
                <span className="career-tag">Career Tips</span>
                <h3 className="mb-3">Future-Proof Your Career: Top 5 IT Skills Demanding Your Attention in 2025</h3>
                <p className="opacity-75 small">Discover the top 5 IT skills like AI, Cybersecurity, Cloud Computing, Data Science and DevOps that will be in high demand in 2025. Future-proof your career with...</p>
                <div className="d-flex align-items-center gap-3 mt-4 small opacity-75">
                  <span><i className="fa-regular fa-calendar me-1"></i> 08/03/2026</span>
                  <span><i className="fa-regular fa-clock me-1"></i> 5 min</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="small-featured-card h-100 d-flex flex-column gap-3 bg-transparent shadow-none">
              <div className="card h-50 border-0 shadow-sm overflow-hidden" style={{ borderRadius: '16px' }}>
                <div className="row g-0 h-100">
                  <div className="col-5">
                    <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400" className="img-fluid h-100 object-fit-cover" alt="AI Impact" />
                  </div>
                  <div className="col-7 p-3">
                    <span className="text-primary fw-bold small" style={{ fontSize: '0.65rem' }}>NEWS</span>
                    <h6 className="mt-1 fw-bold">Echoes of Innovation: Unpacking the AI Impact...</h6>
                    <div className="text-muted mt-2" style={{ fontSize: '0.7rem' }}>08/03/2026 • 5 min read</div>
                  </div>
                </div>
              </div>
              <div className="card h-50 border-0 shadow-sm overflow-hidden" style={{ borderRadius: '16px' }}>
                <div className="row g-0 h-100">
                  <div className="col-5">
                    <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400" className="img-fluid h-100 object-fit-cover" alt="Cyber Security" />
                  </div>
                  <div className="col-7 p-3">
                    <span className="text-primary fw-bold small" style={{ fontSize: '0.65rem' }}>COURSE GUIDE</span>
                    <h6 className="mt-1 fw-bold">How to Start Your Cyber Security Career: Complete...</h6>
                    <div className="text-muted mt-2" style={{ fontSize: '0.7rem' }}>30/12/2025 • 8 min read</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Posts Section */}
        <div className="section-header">
          <div>
            <h2 className="section-title">All Posts</h2>
            <p className="text-muted small">9 articles found</p>
          </div>
        </div>

        <div className="row">
          {posts.map(post => (
            <div className="col-md-6 col-lg-4" key={post.id}>
              <div className="post-card">
                <img src={post.img} className="post-img" alt={post.title} />
                <div className="post-body">
                  <span className="post-category">{post.category}</span>
                  <h4 className="post-title">{post.title}</h4>
                  <p className="post-excerpt">{post.excerpt}</p>

                  <div className="mt-auto">
                    <div className="post-footer">
                      <span><i className="fa-regular fa-calendar me-1"></i> {post.date}</span>
                      <span><i className="fa-regular fa-clock me-1"></i> {post.readTime}</span>
                    </div>
                    <div className="post-author">
                      <div className="author-avatar">
                        <i className="fa-solid fa-user"></i>
                      </div>
                      <span className="author-name">{post.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Enquire Button */}
      <button className="enquire-btn">
        <i className="fa-solid fa-headset me-2"></i> Enquire Now
      </button>

      {/* Spacing for bottom */}
      <div className="py-5"></div>
    </>
  );
};

export default Blog;