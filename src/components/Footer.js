import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineGithub,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="https://facebook.com/ossama.ayadi.9">
        <AiFillFacebook />{" "}
      </a>
      <a href="https://www.instagram.com/hv.ew/">
        <AiFillInstagram />{" "}
      </a>
      <a href="https://twitter.com/ayadioo">
        <AiFillTwitterSquare />{" "}
      </a>
      <a href="https://github.com/ayadi1/">
        <AiOutlineGithub />{" "}
      </a>
    </footer>
  );
}
