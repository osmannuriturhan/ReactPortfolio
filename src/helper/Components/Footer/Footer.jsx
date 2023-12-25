import "./Footer.scss";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Footer = () => {
  const location = useLocation();
  console.log(location);

  const [column, setColumn] = useState("");

  useEffect(() => {
    if (location.pathname === "/about" || location.pathname === "/projects") {
      setColumn("column");
      console.log(location.pathname);
    } else {
      setColumn("");
      console.log("home");
    }
  }, [location.pathname]);

  return (
    <footer c>
      <div className={column ? "social column" : "social"}>
        <a href="#twitter">
          <FaXTwitter />
        </a>
        <a href="https://www.linkedin.com/in/osman-nuri-turhan/">
          <FaLinkedin />
        </a>
        <a href="#telegram">
          <FaTelegramPlane />
        </a>
        <a href="https://github.com/osmannuriturhan">
          <FaGithub />
        </a>
      </div>
      <div className={column ? "footer column" : "footer"}>
        <FaRegCopyright />
        <span className="footer-span">
          Copyright {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
