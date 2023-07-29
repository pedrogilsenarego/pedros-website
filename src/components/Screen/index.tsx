import "./index.css";

const Screen = () => {
  return (
    <>
      <div>
        <div
          className="screen"
          style={{
            top: "2px",
            left: "2px",
            cursor: "pointer",
            //transform: "perspective(800px) rotateX(25deg)",
          }}
        >
          <div
            className="screen-image"
            style={{
              backgroundImage:
                "url(https://avatars.githubusercontent.com/u/87972406?v=4)",
            }}
          />
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
      </div>
    </>
  );
};

export default Screen;

/*
  <div style={{ marginLeft: "50px" }}>
        <div className="screen" onClick={() => setPress(!press)}>
          <div className="screen-overlay"></div>
        </div>
      </div>
<div

style={{
  width: "304px",
  height: "484px",
  backgroundColor: "#00000066",
  position: "relative",
  transition: "all 2s ease-in-out",

  clipPath:
    "polygon(0% 4.2%,7.2% 0%,30% 0%,34% 1.5%,66% 1.5%,70% 0%,92.8% 0%,100% 4.2%,100% 95.8%,92.8% 100%,70% 100%,66% 98.5%,34% 98.5%,30% 100%,7.2% 100%,0% 95.8%)",
}}
>*/
