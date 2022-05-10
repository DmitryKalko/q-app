import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import useIsMobile from "../../../hooks/useIsMobile";

// wrapper component for test custom hook
const UseIsMobileWrapper = ({handleResize}) => {
  const isMobile = useIsMobile();

  if(isMobile === false) handleResize(false);
  if(isMobile === true) handleResize(true);

  return <></>
}

describe("Custom hook: useIsMobile", () => {
    it("should have been called with 'false' ", () => {
      const handleResize = jest.fn();
      window.innerWidth = 1000; // change window size
      mount(<UseIsMobileWrapper handleResize={handleResize}/> );
      act(() => {
        window.dispatchEvent(new Event('resize')); // simulate resize event
      });
      expect(handleResize).toHaveBeenCalledWith(false);
    });

    it("should have been called with 'true' ", () => {
      const handleResize = jest.fn(); 
      window.innerWidth = 500; // change window size
      mount(<UseIsMobileWrapper handleResize={handleResize}/> );
      act(() => {
        window.dispatchEvent(new Event('resize')); // simulate resize event
      });
      expect(handleResize).toHaveBeenCalledWith(true);
    });
});
