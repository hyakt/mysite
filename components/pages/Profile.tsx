import React from "react";

export const Profile: React.FC = () => (
  <div className="page">
    <div className="profile">
      <div className="profile__name">
        Hayato Kajiyama
      </div>
      <div className="profile-center">
        <div className="socials">
          <a
            className="socials__a"
            href="http://github.com/hyakt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.svg" alt="github" />
          </a>
          <a
            className="socials__a"
            href="http://twitter.com/hyakt0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/twitter.svg" alt="twitter" />
          </a>
          <a
            className="socials__a"
            href="https://www.linkedin.com/in/hyakt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.svg" alt="linkedin" />
          </a>
        </div>
        <div className="profile-img">
          <img className="profile-img__img" src="/profile.png" alt="profile" />
        </div>
        <div className="profile-blog">
          <a href="/posts">
            ➡️Blog
          </a>
        </div>
      </div>
      <div>
        <div className="profile__subtitle">
          Frontend-End Engineer
        </div>
      </div>
      <div className="profile-scroll">
        ⏬
      </div>
    </div>
  </div>
);
