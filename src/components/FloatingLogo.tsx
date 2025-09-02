import { useState, useEffect } from "react";

const FloatingLogo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show logo when user scrolls down more than 200px
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`fixed top-6 left-6 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="w-16 h-16 rounded-full bg-zenlore-navy border-2 border-zenlore-gold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Scroll to top"
      >
        <img 
          src="./lovable-uploads/a996b871-738a-4698-ab48-a48cd59045bf.png" 
          alt="Zenlore Logo" 
          className="w-full h-full object-cover rounded-full scale-110 transition-transform duration-300 group-hover:scale-125"
        />
      </button>
    </div>
  );
};

export default FloatingLogo;