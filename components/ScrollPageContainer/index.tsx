import React, {
  Children,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";

export const ScrollPageContainer: React.FC = ({ children }) => {
  const [currentPageIndex, setCurrentPage] = useState(0);
  const lastPageIndex = useMemo(() => Children.count(children) - 1, [children]);

  const animationDelay = 800;
  const animationDelayBuffer = 200;
  const scrollableMomentum = 10;
  const scrolling = useRef<boolean>(false);
  const scrollContainer = useRef<any>(null);

  const scrollPage = useCallback((targetPageIndex: number): void => {
    scrolling.current = true;

    scrollContainer.current.style.transform = `translateY(-${targetPageIndex *
      100}vh)`;

    setTimeout(() => {
      scrolling.current = false;
    }, animationDelay + animationDelayBuffer);
  }, [scrolling.current]);

  const scrollPageDown = useCallback(() => {
    if (
      !scrolling.current &&
      scrollContainer.current &&
      currentPageIndex < lastPageIndex
    ) {
      scrollPage(currentPageIndex + 1);
      setCurrentPage(currentPageIndex + 1);
    }
  }, [
    scrollContainer.current,
    scrolling.current,
    currentPageIndex,
    lastPageIndex,
  ]);

  const scrollPageUp = useCallback(() => {
    if (
      !scrolling.current &&
      scrollContainer.current &&
      currentPageIndex !== 0
    ) {
      scrollPage(currentPageIndex - 1);
      setCurrentPage(currentPageIndex - 1);
    }
  }, [
    scrollContainer.current,
    scrolling.current,
    currentPageIndex,
    lastPageIndex,
  ]);

  const handleWheel = useCallback<React.WheelEventHandler>(
    (event) => {
      if (Math.abs(event.deltaY) > scrollableMomentum) {
        if (event.deltaY > 0) {
          scrollPageDown();
        } else {
          scrollPageUp();
        }
      }
    },
    [currentPageIndex, lastPageIndex],
  );

  return (
    <div
      ref={scrollContainer}
      onWheel={handleWheel}
      style={{ transition: `transform ${animationDelay}ms ease-in-out` }}
    >
      {children}
    </div>
  );
};
