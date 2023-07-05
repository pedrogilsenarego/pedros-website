import "./index.css";

const Screen = () => {
  return (
    <>
      <div className="screen">
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
