import React from "react";

export const Profile: React.FC = () => (
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
