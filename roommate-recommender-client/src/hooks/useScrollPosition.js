import { useEffect } from "react";
import { useState } from "react";

export const useScrollPosition = () => {
  //holds position of page scroll
  const [scrollPosition, setScrollPosition] = useState(0);
  //
  useEffect(() => {
    //sets state b calling window.pageyoffset
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    //any time one scroll the event happens
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    //remove it whne component unmounts
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};
