import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <a href="https://linkedin.com" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
      </a>
      <a href="https://instagram.com" target="_blank">
        <FontAwesomeIcon icon={faInstagram} className="social-icon" />
      </a>
      <a href="https://x.com" target="_blank">
        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
      </a>
      <a href="https://Youtube.com" target="_blank">
        <FontAwesomeIcon icon={faYoutube} className="social-icon" />
      </a>
    </footer>
  );
}
