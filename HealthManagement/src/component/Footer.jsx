import React from 'react';

const Footer = () => {
  // Social media data matching the icons in the image
  const socialMedia = [
    {
      id: 1,
      img: "data:image/svg+xml,%3Csvg fill='white' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.463-2.193 4.76-1.296 1.296-2.902 2.024-4.76 2.193v-2.159h1.607l.302-1.872h-1.909V9.321c0-.545.272-.875.875-.875h1.034V6.389c-.179-.024-.8-.074-1.495-.074-1.505 0-2.603 1.024-2.603 2.67v1.798H6.518v1.872h1.928V19.2C4.416 18.126 2.4 15.392 2.4 12.16 2.4 6.696 6.696 2.4 12.16 2.4c5.464 0 9.76 4.296 9.76 9.76 0 .4-.024.8-.072 1.2-.048-.4-.096-.8-.168-1.2-.024-.133-.048-.266-.072-.4-.024-.133-.048-.266-.096-.4z'/%3E%3C/svg%3E",
      link: "https://facebook.com"
    },
    {
      id: 2,
      img: "data:image/svg+xml,%3Csvg fill='white' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z'/%3E%3C/svg%3E",
      link: "https://twitter.com"
    },
    {
      id: 3,
      img: "data:image/svg+xml,%3Csvg fill='white' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/%3E%3C/svg%3E",
      link: "https://linkedin.com"
    }
  ];

  const ArrowIcon = () => (
    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );

  return (
    <footer className="relative w-full min-h-screen flex items-center justify-center" style={{
      background: '#000000'
    }}>
      {/* Grid background - updated to fade from all sides */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(white 1px, transparent 1px),
            linear-gradient(90deg, white 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse, black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse, black 0%, transparent 100%)'
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-8">
        {/* Main content - centered */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to take your mental well-being
            <br />
            <span style={{ color: 'orange' }}>to the next level?</span>
          </h1>

          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Reach out to me today and let's discuss how I can help you achieve your goals.
          </p>

          <button
            className="inline-flex items-center px-8 py-3 text-white font-medium rounded-md border border-gray-600 hover:bg-gray-700 transition-colors duration-200"
            style={{ backgroundColor: 'black' }}
          >
            Let's get in touch
            <ArrowIcon />
          </button>
        </div>

        {/* Footer bottom - exact positioning */}
        <div className="flex justify-between items-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2025 Aditya Aishwarya
          </p>

          <div className="flex gap-3">
            {socialMedia.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-colors duration-200"
              >
                <img
                  src={social.img}
                  alt="social"
                  className="w-4 h-4"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;