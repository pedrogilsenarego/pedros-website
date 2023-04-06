import { Colors } from "../../../../../constants/pallete";
import { useMediaQuery, useTheme } from "@mui/material";
import { i18n } from "../../../../../translations/i18n";
import { useContext } from "react";
import { LandingPageContext } from "../../../LandingPageContext";
import TypeWriterEffect from "react-typewriter-effect";

const Message = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const { boxesOpacity } = useContext(LandingPageContext);

  return (
    <>
      {boxesOpacity && (
        <TypeWriterEffect
          textStyle={{
            color: Colors.BLACKISH,
            fontWeight: 500,
            fontFamily: "Termina",
            fontSize: mobile ? "1rem" : "1.5rem",
          }}
          startDelay={2000}
          cursorColor={Colors.BLACKISH}
          multiText={[
            i18n.t("initial.firstSentence"),
            i18n.t("initial.secondSentence"),
          ]}
          multiTextDelay={1000}
          typeSpeed={50}
        />
      )}
    </>
  );
};

export default Message;
