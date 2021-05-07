import React, {
  Children,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import "./index.css";

type Props = {
  animationDelay?: number;
  animationDelayBuffer?: 200;
  scrollableMomentum?: 10;
};

export const ScrollPageContainer: React.FC<Props> = (
  {
    children,
    animationDelay = 800,
    animationDelayBuffer = 200,
    scrollableMomentum = 10,
  },
) => {
  const [currentPageIndex, setCurrentPage] = useState(0);
  const lastPageIndex = useMemo(() => Children.count(children) - 1, [children]);
  const navigatorCircles = useMemo(
    () =>
      Array.from(
        { length: lastPageIndex + 1 },
        (_, i) => i === currentPageIndex && true,
      ),
    [currentPageIndex],
  );

  useEffect(()=>{
    document.querySelector("body")?.classList.add("fixed")
    return () => {
      document.querySelector("body")?.classList.remove("fixed")
    }
  }, []);

  const scrolling = useRef<boolean>(false);
  const scrollContainer = useRef<any>(null);
  const scrollNavigator = useRef<any>(null);
  const previousTouchMove = useRef<any>(null);

  const scrollPage = useCallback((targetPageIndex: number): void => {
    scrolling.current = true;

    scrollContainer.current.style.transform = `translateY(-${targetPageIndex *
      100}vh)`;
    scrollNavigator.current.style.transform = `translateY(${targetPageIndex *
      100}vh)`;

    setTimeout(() => {
      scrolling.current = false;
      previousTouchMove.current = null;
    }, animationDelay + animationDelayBuffer);
  }, [
    scrolling.current,
    animationDelay,
    animationDelayBuffer,
    previousTouchMove.current,
  ]);

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
    previousTouchMove.current,
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
    previousTouchMove.current,
  ]);

  const handleTouchMove = useCallback<React.TouchEventHandler>(
    (event) => {
      if (previousTouchMove.current) {
        if (event?.touches[0]?.clientY > previousTouchMove.current) {
          scrollPageUp();
        } else {
          scrollPageDown();
        }
      } else {
        previousTouchMove.current = event.touches[0].clientY;
      }
    },
    [scrollPageUp, scrollPageDown],
  );

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
    [scrollPageUp, scrollPageDown],
  );

  return (
    <div
      ref={scrollContainer}
      onWheel={handleWheel}
      onTouchMove={handleTouchMove}
      style={{ transition: `transform ${animationDelay}ms ease-in-out` }}
    >
      <div
        ref={scrollNavigator}
        className="scroll-navigator"
        style={{ transition: `transform ${animationDelay}ms ease-in-out` }}
      >
        {navigatorCircles.map((e, i) =>
          e ? <div key={i}>●</div> : <div key={i}>○</div>
        )}
      </div>
      {children}
    </div>
  );
};
