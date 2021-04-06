import React, { useState } from "react";

import "./index.css";

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
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div
      className="scroll-container"
      onClick={({ currentTarget }) => {
        setCurrentPage(currentPage + 1);
        currentTarget.style.transform = `translateY(-${currentPage * 100}vh)`;
      }}
    >
      <Profile />
      <Skill />
      <Portfolio />
    </div>
  );
}
