import { useLayoutEffect, useState } from 'react';

const flexibleButton = () => {
  const getWidth = () => {
    let vmin = Math.min(window.innerWidth, window.innerHeight) / 2;
    console.log(vmin);
    return vmin;
  };

  const [vmin, setVmin] = useState(() => getWidth() / 4);

  const handleResize = () => {
    setVmin(getWidth() / 4);
  };

  useLayoutEffect(() => {
    setVmin(getWidth() / 4);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return vmin;
};

export default flexibleButton;