import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from "@nextui-org/react";

import "./socials.scss";

function Socials() {
  return (
    <div className="socials-div">
      <h1>Contact Me!</h1>
      <img
        className="me"
        src="./mypic.jpg"
        alt="trying to find a cool picture hold on"
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

        <a>
          <Tooltip
            showArrow
            content="+6012-2862669"
            closeDelay={100}
            color="secondary"
          >
            <i id="phone">
              <FontAwesomeIcon icon={faPhone} id="phone" />
            </i>
          </Tooltip>
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
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Socials;
