import { RefObject } from "react";

const useTextHighlighter = (ref) => {
  // Given a ref to an element, iterate through the children and set their opacity
  // based on their position in the viewport

  const isInViewport = (elem) => {
    if (!elem) return false;
    const bounding = elem.getBoundingClientRect();
    const height = window.innerHeight || document.documentElement.clientHeight;
    const topBoundary = height * 0.2;
    const bottomBoundary = height * 0.8;
    const middleOnScreen = bounding.top + bounding.height / 2;
    return middleOnScreen >= topBoundary && middleOnScreen <= bottomBoundary;
  };

  const scrollHandler = () => {
    if (ref.current) {
      const children = ref.current?.children;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        child.style.opacity = isInViewport(child) ? "1" : "0.5";
      }
    }
  };

  return scrollHandler;
};

export default useTextHighlighter;
