import { Colors } from "../../../../../constants/pallete";
import { useMediaQuery, useTheme } from "@mui/material";
import { i18n } from "../../../../../translations/i18n";
import { useContext, useEffect, useState } from "react";
import { LandingPageContext } from "../../../LandingPageContext";
import TypeWriterEffect from "react-typewriter-effect";

const Message = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const { boxesOpacity, x } = useContext(LandingPageContext);
  const [message, setMessage] = useState([
    i18n.t("initial.firstSentence"),
    i18n.t("initial.secondSentence"),
  ]);
  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    setMessage(getMessageForX(x));
    if (firstTime) setFirstTime(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [x]);

  const getMessageForX = (x) => {
    switch (x) {
      case 0:
        return [
          i18n.t("initial.firstSentence"),
          i18n.t("initial.secondSentence"),
        ];
      case -100:
        return [i18n.t("initial.blueFirst")];
      case -200:
        return [i18n.t("initial.purpleFirst")];
      case -300:
        return [i18n.t("initial.redFirst")];
      default:
        return [
          i18n.t("initial.firstSentence"),
          i18n.t("initial.secondSentence"),
        ];
    }
  };

  return (
    <>
      {boxesOpacity && (
        <div
          style={{
            backgroundColor: Colors.BLACKISH,
            borderRadius: mobile ? "4px" : "8px",
            padding: mobile ? "2px 10px 2px 10px" : "0px 16px 0px 16px",
          }}
        >
          <TypeWriterEffect
            key={x}
            textStyle={{
              color: Colors.WHITE_SMUDGE,
              fontWeight: 500,
              fontFamily: "Termina",
              fontSize: mobile ? "1rem" : "1.5rem",
            }}
            startDelay={firstTime ? 1800 : 200}
            cursorColor={Colors.WHITE_SMUDGE}
            multiText={message}
            multiTextDelay={900}
            typeSpeed={60}
          />
        </div>
      )}
    </>
  );
};

export default Message;
