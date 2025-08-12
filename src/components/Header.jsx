import { useState } from "react";
import headerImage from "../assets/header.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const [imageError, setImageError] = useState(false);

  return (
    <header>
      <img
        src={headerImage}
        alt="Two dogs standing on the grass, and a shining dog in the middle"
        loading="eager"
        fetchPriority="high"
        onError={() => setImageError(!imageError)}
      />
      <div className="personal-info">
        <h1>Barking Dog</h1>
        <p className="career">
          Full Stack Developer
          <br />
          <span className="company">Barking Dog Inc</span>
        </p>
      </div>
      <div className="action-buttons">
        <button
          aria-label="Send email to Brian's Email"
          onClick={() => window.open("johnnyboy@gooda.my")}
        >
          Email
        </button>
        <button aria-label="redirect to Brian's LinkedIn profile">
          <a href="https://LinkedIn.com" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
            <span>LinkedIn</span>
          </a>
        </button>
      </div>
    </header>
  );
}
