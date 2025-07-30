import { useEffect } from 'react';

const AntiInspect = () => {
  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();
    document.addEventListener('contextmenu', disableRightClick);

    const disableKeys = (e) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
        
      }
    };
    document.addEventListener('keydown', disableKeys);

    const detectDevTools = setInterval(() => {
      const devtools = new Image();
      devtools.__defineGetter__('id', function () {
        alert('DevTools is open. Reloading...');
        window.location.reload();
      });
      console.log(devtools);
    }, 3000);

    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('keydown', disableKeys);
      clearInterval(detectDevTools);
    };
  }, []);

  return null;
};

export default AntiInspect;
