import { createContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { ROUTE_PATHS } from "../constants/routes";

interface Props {
  children: React.ReactNode;
}

interface MusicContextType {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  switchAudio: () => void;
}

export const MusicContext = createContext<MusicContextType>({
  isPlaying: false,
  setIsPlaying: () => {},
  switchAudio: () => {},
});

const MusicProvider = ({ children }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioIndex, setAudioIndex] = useState(0);
  const location = useLocation();
  const audios = [
    "https://res.cloudinary.com/daantetcr/video/upload/v1680862176/personalWebsite/Air_-_Alone_in_Kyoto__ColdMP3.com_h7eva5.mp3",
    "https://res.cloudinary.com/daantetcr/video/upload/v1690918676/personalWebsite/Rhye_-_The_Fall_320_kbps_kmcwk6.mp3",
  ];

  const [musicUrl, setMusicUrl] = useState("");
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    fetchMusic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioIndex]);

  const fetchMusic = async () => {
    try {
      const response = await fetch(audios[audioIndex]);
      const blob = await response.blob();
      setMusicUrl(URL.createObjectURL(blob));
    } catch (error) {
      console.error(error);
    }
  };

  /*const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };*/
  const togglePause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };
  const switchAudio = () => {
    setAudioIndex((prevAudioIndex) => (prevAudioIndex + 1) % audios.length); // Update audioIndex using modulo operator
  };
  const contextValue: MusicContextType = {
    isPlaying,
    setIsPlaying,
    switchAudio,
  };

  return (
    <MusicContext.Provider value={contextValue}>
      {location.pathname !== ROUTE_PATHS.LANDING_PAGE && (
        <>
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
          <div
            onClick={() => switchAudio()}
            style={{
              height: "100px",
              width: "100px",
              backgroundColor: "red",
              position: "absolute",
              top: 200,
              right: 10,
              zIndex: 1000,
            }}
          ></div>
        </>
      )}

      {musicUrl && (
        <audio
          ref={audioRef}
          key={isPlaying.toString()}
          src={musicUrl}
          autoPlay={isPlaying}
          onEnded={switchAudio}
        />
      )}
      {children}
    </MusicContext.Provider>
  );
};

export default MusicProvider;
