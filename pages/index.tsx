import React from "react";
import "./index.css";

export default function Home() {
  return (
    <div className="container">
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
}
