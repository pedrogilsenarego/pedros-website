import { createContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { ROUTE_PATHS } from "../constants/routes";

interface Props {
  children: React.ReactNode;
}

interface MusicContextType {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}

export const MusicContext = createContext<MusicContextType>({
  isPlaying: false,
  setIsPlaying: () => {},
});

const MusicProvider = ({ children }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const location = useLocation();
  const audio =
    "https://res.cloudinary.com/daantetcr/video/upload/v1680862176/personalWebsite/Air_-_Alone_in_Kyoto__ColdMP3.com_h7eva5.mp3";

  const [musicUrl, setMusicUrl] = useState("");
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    fetchMusic();
  }, []);

  const fetchMusic = async () => {
    try {
      const response = await fetch(audio);
      const blob = await response.blob();
      setMusicUrl(URL.createObjectURL(blob));
    } catch (error) {
      console.error(error);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  const togglePause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };
  const contextValue: MusicContextType = {
    isPlaying,
    setIsPlaying,
  };

  return (
    <MusicContext.Provider value={contextValue}>
      {location.pathname !== ROUTE_PATHS.LANDING_PAGE && (
        <div
          onClick={() => togglePause()}
          style={{
            height: "100px",
            width: "100px",
            backgroundColor: "white",
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 1000,
          }}
        ></div>
      )}

      {musicUrl && (
        <audio
          ref={audioRef}
          key={isPlaying.toString()}
          src={musicUrl}
          autoPlay={isPlaying}
          onEnded={togglePlay}
        />
      )}
      {children}
    </MusicContext.Provider>
  );
};

export default MusicProvider;
