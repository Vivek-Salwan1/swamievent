import  { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return null; // Since this component only handles the scroll effect, it doesn't render anything
};

export default ScrollToTop;
