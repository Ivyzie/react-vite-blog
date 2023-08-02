import "./socials.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Socials() {
  return (
    <>
      <h1>Socials</h1>
      <img
        className="me"
        src="http://gravatar.com/avatar/25b1fc64ba12614875c1e467d7e4c86e?s=512"
        alt=""
      />

      <div className="social">
        <a href="https://github.com/Ivyzie">
          <i id="github">
            <FontAwesomeIcon icon={faGithub} id="github" />
          </i>
        </a>

        <a href="https://www.linkedin.com/in/ivan-chan-98a553269/">
          <i id="linkedin">
            <FontAwesomeIcon icon={faLinkedin} id="linkedin" />
          </i>
        </a>

        <a href="https://twitch.tv/ivyzie">
          <i id="twitch">
            <FontAwesomeIcon icon={faTwitch} id="twitch" />
          </i>
        </a>

        <a href="https://instagram.com/ivancjz">
          <i id="instagram">
            <FontAwesomeIcon icon={faInstagram} id="instagram" />
          </i>
        </a>
      </div>
    </>
  );
}

export default Socials;
