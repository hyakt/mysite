import React from "react";

export const Interests: React.FC = () => (
  <div className="page">
    <div className="interests">
      <div className="interests__title">
        Interests
      </div>
      <div className="interests-icons">
        <div className="interests-icons__div">
          <img className="interests-icons__img" src="/emacs.svg" alt="emacs" />
        </div>
        <div className="interests-icons__div">
          <img className="interests-icons__img" src="/js.svg" alt="js" />
        </div>
        <div className="interests-icons__div">
          <span className="interests-icons__span">🍺</span>
        </div>
      </div>
    </div>
  </div>
);
