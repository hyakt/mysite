import React, { Children, useCallback, useRef, useState } from "react";

import "./index.css";

const ScrollPageContainer: React.FC = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const childrenCount = Children.count(children);

  const animationDelay = 800;
  const animationDelayBuffer = 200;
  const scrolling = useRef<boolean>(false);

  const handleWheel = useCallback<React.WheelEventHandler>(
    ({ currentTarget }) => {
      if (!scrolling.current) {
        scrolling.current = true;
        currentPage === childrenCount - 1
          ? setCurrentPage(0)
          : setCurrentPage(currentPage + 1);
        currentTarget.style.transform = `translateY(-${currentPage * 100}vh)`;

        setTimeout(() => {
          scrolling.current = false;
        }, animationDelay + animationDelayBuffer);
      }
    },
    [currentPage, childrenCount],
  );

  return (
    <div
      className="scroll-container"
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
    </ScrollPageContainer>
  );
}
