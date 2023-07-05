import { useState } from "react";
import "./index.css";

const Screen = () => {
  const [press, setPress] = useState<boolean>(false);

  return (
    <>
      <div
        className="screen"
        onClick={() => setPress(!press)}
        style={{
          cursor: "pointer",
          transform: press
            ? "perspective(800px) rotateX(-15deg)"
            : "perspective(800px) rotateX(25deg)",
          transition: "all 2s ease-in-out",
        }}
      >
        <div className="screen-image" />
        <div className="screen-overlay"></div>
        <div className="screen-content">
          <div className="screen-user">
            <span className="name" data-value="PEDRO SENA REGO">
              PEDRO SENA REGO
            </span>
            <span className="subname" data-value="PEDRO SENA REGO">
              Web engineer
            </span>
            <a
              className="link"
              href="https://github.com/pedrogilsenarego"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Screen;
