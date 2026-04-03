import React, { useEffect } from 'react';

export default function LoginForm() {
  useEffect(() => {
    // Inject Bootstrap CSS
    if (!document.getElementById('bootstrap-css')) {
      const link = document.createElement('link');
      link.id = 'bootstrap-css';
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
      document.head.appendChild(link);
    }
    
    // Inject Bootstrap Icons
    if (!document.getElementById('bootstrap-icons')) {
      const iconLink = document.createElement('link');
      iconLink.id = 'bootstrap-icons';
      iconLink.rel = 'stylesheet';
      iconLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css';
      document.head.appendChild(iconLink);
    }
  }, []);

  // Custom CSS to perfectly match the provided design
  const customCss = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    body {
        font-family: 'Inter', sans-serif;
        background-color: #f4f6f9;
        margin: 0;
    }

    .auth-wrapper {
        min-height: 100vh;
        background-color: #f4f6f9;
    }

    .auth-card {
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        width: 100%;
        max-width: 420px;
    }

    .logo-container {
        width: 76px;
        height: 76px;
        border-radius: 50%;
        background-color: white;
        box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 5px;
    }

    .logo-text-top {
        color: #d12027;
        font-weight: 900;
        font-size: 1.8rem;
        line-height: 0.9;
        font-family: 'Arial Black', Impact, sans-serif;
        letter-spacing: -0.5px;
        transform: scaleY(1.1);
    }

    .logo-text-bottom {
        color: #0b2e59;
        font-size: 0.35rem;
        font-weight: 700;
        text-align: center;
        line-height: 1.1;
        margin-top: 4px;
        letter-spacing: 0.5px;
    }

    .title-text {
        color: #111827;
        font-weight: 700;
        font-size: 1.4rem;
        letter-spacing: -0.3px;
    }

    .subtitle-text {
        color: #6b7280;
        font-size: 0.9rem;
        font-weight: 500;
    }

    .btn-google {
        border: 1px solid #e5e7eb;
        background-color: white;
        color: #374151;
        font-weight: 600;
        font-size: 0.9rem;
        border-radius: 8px;
        transition: background-color 0.2s;
    }
    
    .btn-google:hover {
        background-color: #f9fafb;
    }

    .divider-wrapper {
        display: flex;
        align-items: center;
        text-align: center;
        color: #9ca3af;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin: 1.5rem 0;
    }
    
    .divider-wrapper::before, .divider-wrapper::after {
        content: '';
        flex: 1;
        border-bottom: 1px solid #f3f4f6;
    }
    
    .divider-wrapper::before { margin-right: 12px; }
    .divider-wrapper::after { margin-left: 12px; }

    .form-label-custom {
        font-size: 0.8rem;
        color: #4b5563;
        font-weight: 500;
        text-align: center;
        display: block;
        margin-bottom: 0.5rem;
    }

    .input-icon-wrapper {
        position: relative;
    }
    
    .input-icon-wrapper i {
        position: absolute;
        left: 14px;
        top: 50%;
        transform: translateY(-50%);
        color: #9ca3af;
        font-size: 1.1rem;
    }
    
    .input-icon-wrapper .form-control {
        padding-left: 42px;
        padding-top: 0.7rem;
        padding-bottom: 0.7rem;
        border: 1px solid #f3f4f6;
        border-radius: 8px;
        font-size: 0.95rem;
        color: #111827;
        box-shadow: none;
    }
    
    .input-icon-wrapper .form-control::placeholder {
        color: #9ca3af;
        font-weight: 400;
    }
    
    .input-icon-wrapper .form-control:focus {
        border-color: #d1d5db;
        box-shadow: 0 0 0 2px rgba(243, 244, 246, 1);
    }

    .btn-submit {
        background-color: #111827;
        color: white;
        font-weight: 600;
        border-radius: 8px;
        padding: 0.75rem;
        font-size: 0.95rem;
        margin-top: 1rem;
        transition: background-color 0.2s;
    }
    
    .btn-submit:hover {
        background-color: #1f2937;
        color: white;
    }

    .footer-link {
        color: #6b7280;
        font-size: 0.8rem;
        text-decoration: none;
        font-weight: 500;
    }
    
    .footer-link:hover {
        color: #374151;
    }
    
    .footer-link-dark {
        color: #111827;
        font-weight: 600;
    }
  `;

  return (
    <div className="auth-wrapper d-flex align-items-center justify-content-center p-3">
      <style dangerouslySetInnerHTML={{ __html: customCss }} />

      <div className="card auth-card border-0 p-4 p-sm-5 bg-white">
        
        {/* Mock Logo matching the image */}
        <div className="logo-container mx-auto mb-4">
          <div className="logo-text-top">TIPS</div>
          <div className="logo-text-bottom">TRAINING THE<br />LEADERS OF TOMORROW</div>
        </div>

        {/* Headings */}
        <h1 className="title-text text-center mb-1">Welcome to TIPS-G</h1>
        <h2 className="title-text text-center mb-3">Intelligent CRM</h2>
        <p className="subtitle-text text-center mb-4">Sign in to continue</p>

        {/* Google OAuth Button */}
        <button className="btn btn-google w-100 d-flex align-items-center justify-content-center py-2 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18px" height="18px" className="me-2">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div className="divider-wrapper">OR</div>

        {/* Form area */}
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label className="form-label-custom">Email</label>
            <div className="input-icon-wrapper">
              <i className="bi bi-envelope"></i>
              <input type="email" className="form-control" placeholder="you@example.com" />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label-custom">Password</label>
            <div className="input-icon-wrapper">
              <i className="bi bi-lock"></i>
              <input type="password" className="form-control" placeholder="........" />
            </div>
          </div>

          <button type="submit" className="btn btn-submit w-100 border-0">Sign in</button>
        </form>

        {/* Footer actions */}
        <div className="d-flex justify-content-between mt-4">
          <a href="#" className="footer-link">Forgot password?</a>
          <span className="footer-link">
            Need an account? <a href="#" className="footer-link footer-link-dark">Sign up</a>
          </span>
        </div>
      </div>
    </div>
  );
}