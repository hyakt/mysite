import React, {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import "./index.css";

const ScrollPageContainer: React.FC = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const childrenCount = Children.count(children);

  const animationDelay = 800;
  const animationDelayBuffer = 200;
  const scrolling = useRef<boolean>(false);
  const scrollContainer = useRef<any>(null);

  const scrollDown = () => {
    if (!scrolling.current && scrollContainer.current) {
      if (currentPage > childrenCount - 2) return;

      scrolling.current = true;

      scrollContainer.current.style.transform =
        `translateY(-${(currentPage + 1) * 100}vh)`;

      setCurrentPage(currentPage + 1);

      setTimeout(() => {
        scrolling.current = false;
      }, animationDelay + animationDelayBuffer);
    }
  };

  const scrollUp = () => {
    if (!scrolling.current && scrollContainer.current) {
      if (currentPage === 0) return;
      scrolling.current = true;

      scrollContainer.current.style.transform =
        `translateY(${(childrenCount - (currentPage + 2)) * 100}vh)`;

      setCurrentPage(currentPage - 1);

      setTimeout(() => {
        scrolling.current = false;
      }, animationDelay + animationDelayBuffer);
    }
  };

  const handleWheel = useCallback<React.WheelEventHandler>(
    (event) => {
      if (Math.abs(event.deltaY) > 10) {
        if (event.deltaY > 0) {
          scrollDown();
        } else {
          scrollUp();
        }
      }
    },
    [currentPage, childrenCount],
  );

  return (
    <div
      className="scroll-container"
      ref={scrollContainer}
      onWheel={handleWheel}
      style={{ transition: `transform ${animationDelay}ms ease-in-out` }}
    >
      {children}
    </div>
  );
};

const Profile: React.FC = () => (
  <div className="page">
    <div className="profile">
      <div className="profile__name">
        Hayato Kajiyama
      </div>
      <div className="profile-img">
        <img className="profile-img__img" src="/profile.png" alt="profile" />
      </div>
      <div>
        <div className="profile__subtitle">
          Frontend-End Engineer
        </div>
      </div>
    </div>
  </div>
);

const Skill: React.FC = () => (
  <div className="page">
    skill
  </div>
);

const Portfolio: React.FC = () => (
  <div className="page">
    portfolio
  </div>
);

export default function Home() {
  return (
    <ScrollPageContainer>
      <Profile />
      <Skill />
      <Portfolio />
      <Profile />
    </ScrollPageContainer>
  );
}
