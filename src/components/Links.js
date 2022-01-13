import React from "react";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
export default function Links() {
  return (
    <div>
      <div className="info">
        <h1>oussama ayadi</h1>
        <h2>Frontend Developer</h2>
        <p>@ayadi</p>
      </div>
      <div className="links">
        <a href="email:ayadiossama44@gmail.com">
          {" "}
          <AiOutlineMail /> Email
        </a>
        <a href="https://www.linkedin.com/in/oussama-ayadi1/">
          {" "}
          <AiFillLinkedin /> LinkedIn
        </a>
      </div>
    </div>
  );
}
