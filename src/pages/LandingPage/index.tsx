import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HackerLettering from "../../components/HackerLettering";
import { Colors } from "../../constants/pallete";
import { ROUTE_PATHS } from "../../constants/routes";
import WatchLab from "./Boxes";
import {
  LandingPageContext,
  LandingPageContextProvider,
} from "./LandingPageContext";

const LandingPage = () => {
  const { height } = useContext(LandingPageContext);
  const audio =
    "https://res.cloudinary.com/daantetcr/video/upload/v1680862176/personalWebsite/Air_-_Alone_in_Kyoto__ColdMP3.com_h7eva5.mp3";

  const [isPlaying, setIsPlaying] = useState(false);
  const [musicUrl, setMusicUrl] = useState("");
  const navigate = useNavigate();

  const togglePlay = () => {
    setIsPlaying(true);
  };

  const fetchMusic = async () => {
    try {
      const response = await fetch(audio);
      const blob = await response.blob();
      setMusicUrl(URL.createObjectURL(blob));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchMusic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LandingPageContextProvider>
      <div
        style={{
          width: "100vw",
          height: `${height}px`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden !important",
        }}
      >
        {musicUrl && (
          <audio
            key={isPlaying.toString()}
            src={musicUrl}
            autoPlay={isPlaying}
            onEnded={togglePlay}
          />
        )}
        <div onClick={() => navigate(ROUTE_PATHS.HOME)}>
          <HackerLettering
            startAudio={togglePlay}
            message="<Web Engineering/>"
            color={Colors.BLACKISH}
            borderColor={Colors.BLACKISH_TRANSPARENT}
          />
          <WatchLab />
        </div>
      </div>
    </LandingPageContextProvider>
  );
};

export default LandingPage;
