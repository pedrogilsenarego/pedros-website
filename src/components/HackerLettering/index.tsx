import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { useContext, useEffect, useState } from "react";

import { LandingPageContext } from "../../pages/LandingPage/LandingPageContext";

interface Props {
  message: string;
  color?: string;
  borderColor?: string;
  stopEffect: boolean;
  clicked: boolean;
  setStopEffect: (stopEffect: boolean) => void;
}

const HackerLettering = ({
  message,
  color,
  borderColor,
  stopEffect,
  setStopEffect,
  clicked,
}: Props) => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const letters = "ABCDEFGHIJKLMNOPQRSTUVXWYZ0123456789+-";
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);

  const [counter, setCounter] = useState<number>(-1);
  const [showName, setShowName] = useState<boolean>(false);
  const [goHome, setGoHome] = useState<boolean>(false);
  const [mobileFirstTouch, setMobileFirstTouch] = useState<boolean>(false);
  const [hide, setHide] = useState<boolean>(false);
  const { setBoxesOpacity } = useContext(LandingPageContext);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newRandomNumbers = message.split("").map(() => {
        return Math.floor(Math.random() * 37);
      });
      setRandomNumbers(newRandomNumbers);
    }, 50);
    return () => clearInterval(intervalId);
  }, [message]);

  useEffect(() => {
    if (stopEffect || clicked) {
      const intervalId = setInterval(() => {
        if (counter <= message.length) setCounter(counter + 1);
      }, 100);
      return () => clearInterval(intervalId);
    }
    if (!stopEffect) setCounter(-1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stopEffect, counter, clicked]);

  useEffect(() => {
    if (stopEffect) {
      setShowName(true);
    }
  }, [stopEffect]);

  /* const handleGoBox = (e: any) => {
    e.preventDefault();
    setMobileFirstTouch(true);

    setTimeout(() => {
      setGoHome(true);
      startAudio();
      setTimeout(() => {
        setBoxesOpacity(true);
        setHide(true);
      }, 1700);
    }, 500);
  };

  const handleMobile = (e: any) => {
    e.preventDefault();
    if (!mobileFirstTouch) {
      setMobileFirstTouch(true);
      startAudio();
    } else
      setTimeout(() => {
        setGoHome(true);
        setTimeout(() => {
          setBoxesOpacity(true);
          setHide(true);
        }, 1700);
      }, 500);
  };*/

  return (
    <>
      {!hide && (
        <div
          //onClick={(e) => (mobile ? handleMobile(e) : handleGoBox(e))}
          style={{
            zIndex: 1000,
            rowGap: mobile ? "15px" : "20px",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            display: "flex",
            opacity: goHome && mobileFirstTouch ? 0 : 1,
            transition: "opacity 2s ease-in-out",
          }}
        >
          <div
            style={{ cursor: "pointer", display: "flex", position: "relative" }}
            onMouseEnter={(e) => {
              setStopEffect(true);
            }}
            onMouseLeave={() => setStopEffect(false)}
          >
            {message.split("").map((item, pos) => {
              return (
                <div
                  key={pos}
                  style={{
                    border: `solid 1px ${borderColor || "#ffffff36"}`,

                    width: mobile ? "1.1rem" : "2.3rem",
                    height: mobile ? "1.2rem" : "3rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {item === " " ? (
                    "\u00A0"
                  ) : (
                    <Typography
                      color={color || "white"}
                      style={{
                        fontFamily: "Source Code Pro",
                        opacity: pos <= counter ? 1 : 0.6,
                        textTransform: "uppercase",
                        fontSize: mobile ? "0.8rem" : "1.5rem",
                        fontWeight: 800,
                      }}
                    >
                      {pos <= counter ? item : letters[randomNumbers[pos]]}
                    </Typography>
                  )}
                </div>
              );
            })}
          </div>
          <Typography
            style={{
              letterSpacing: "6px",
              fontSize: mobile ? "0.8rem" : "18px",
              opacity: showName ? 1 : 0,
              transition: "opacity 3s ease-in-out",
              color: color,
              cursor: "pointer",
              fontFamily: "Termina",
            }}
          >
            &#128900; Pedro Sena Rego &#128900;
          </Typography>
        </div>
      )}
    </>
  );
};

export default HackerLettering;
