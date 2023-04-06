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
        <div
          style={{
            backgroundColor: Colors.BLACKISH,
            borderRadius: mobile ? "4px" : "8px",
            padding: mobile ? "0px 8px 0px 8px" : "0px 16px 0px 16px",
          }}
        >
          <TypeWriterEffect
            textStyle={{
              color: Colors.WHITE_SMUDGE,
              fontWeight: 500,
              fontFamily: "Termina",
              fontSize: mobile ? "1rem" : "1.5rem",
            }}
            startDelay={2000}
            cursorColor={Colors.WHITE_SMUDGE}
            multiText={[
              i18n.t("initial.firstSentence"),
              i18n.t("initial.secondSentence"),
            ]}
            multiTextDelay={1000}
            typeSpeed={50}
          />
        </div>
      )}
    </>
  );
};

export default Message;
