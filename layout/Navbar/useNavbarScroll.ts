import { useState, useEffect } from 'react';

const useHeaderScroll = () => {
  const [hideHeader, setHideHeader] = useState(false);
  const [currentY, setCurrentY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { pageYOffset } = window;
      if (pageYOffset - currentY < 0 || currentY < 100) {
        setHideHeader(false);
      } else {
        setHideHeader(true);
      }
      return setCurrentY(pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentY]);

  return { hideHeader, currentY };
};

export default useHeaderScroll;
