import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/sheikh-abu-jubayer-457282177/"
        target="_blank"
        alt="LinkedIn"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a
        href="https://github.com/Jubayer-cmd"
        target="_blank"
        alt="GitHub"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
    </div>
    <div>
      <a
        href="https://www.facebook.com/skjubayer.islam/"
        target="_blank"
        alt="Facebook"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>
    </div>
  </div>
);

export default SocialMedia;
