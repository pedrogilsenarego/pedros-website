import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HackerLettering from "../../components/HackerLettering";
import { Colors } from "../../constants/pallete";
import { ROUTE_PATHS } from "../../constants/routes";

import { MusicContext } from "../../providers/MusicProvider";

const LandingPage = () => {
  const { setIsPlaying } = useContext(MusicContext);
  const [stopEffect, setStopEffect] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsPlaying(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden !important",
        backgroundColor: Colors.BLACKISH,
      }}
    >
      <div
        onClick={() => {
          setClicked(true);
          setIsPlaying(true);

          setTimeout(() => navigate(ROUTE_PATHS.HOME), 3000);
        }}
        style={{
          opacity: clicked ? 0 : 1,
          transition: "opacity 3s ease-in-out",
        }}
      >
        <HackerLettering
          clicked={clicked}
          stopEffect={stopEffect}
          setStopEffect={setStopEffect}
          message="<Web Engineering/>"
          color={Colors.WHITE_SMUDGE}
          borderColor={Colors.WHITE_TRANSPARENT}
        />
      </div>
    </div>
  );
};

export default LandingPage;
