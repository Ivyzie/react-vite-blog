import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

import "./socials.scss";

function Socials() {
  return (
    <>
      <h1>Contact Me!</h1>
      <img
        className="me"
        src="./mypic.jpg"
        alt="trying to find a cool selfie hold on"
      />

      <div className="social">
        <a href="https://github.com/Ivyzie" rel="noreferrer" target="_blank">
          <i id="github">
            <FontAwesomeIcon icon={faGithub} id="github" />
          </i>
        </a>

        <a
          href="https://www.linkedin.com/in/ivan-chan-98a553269/"
          rel="noreferrer"
          target="_blank"
        >
          <i id="linkedin">
            <FontAwesomeIcon icon={faLinkedin} id="linkedin" />
          </i>
        </a>

        <a href="https://twitch.tv/ivyzie" rel="noreferrer" target="_blank">
          <i id="twitch">
            <FontAwesomeIcon icon={faTwitch} id="twitch" />
          </i>
        </a>

        <a
          href="https://instagram.com/ivancjz"
          rel="noreferrer"
          target="_blank"
        >
          <i id="instagram">
            <FontAwesomeIcon icon={faInstagram} id="instagram" />
          </i>
        </a>

        <a
          href="https://discordapp.com/users/247618965600206858"
          rel="noreferrer"
          target="_blank"
        >
          <i id="discord">
            <FontAwesomeIcon icon={faDiscord} id="discord" />
          </i>
        </a>
      </div>
    </>
  );
}

export default Socials;
