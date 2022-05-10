import { useEffect, useState } from 'react';
const mobileSize = 900;

const useIsMobile = () => {
  const [mobile, setMobile] = useState(null);

  useEffect(()=>{
    function handleWindowResize() {
      setMobile(window.innerWidth < mobileSize ? true : false);
    }
    
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  },[]);
  
  return mobile;
};

export default useIsMobile;
