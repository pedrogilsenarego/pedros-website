
import { useContext } from "react";
import HackerLettering from "../../components/HackerLettering";
import { Colors } from "../../constants/pallete";
import WatchLab from "./Boxes";
import { LandingPageContext, LandingPageContextProvider } from "./LandingPageContext";



const LandingPage = () => {
  const { height } = useContext(LandingPageContext);

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
          overflow: "hidden !important"

        }}
      >

        <HackerLettering message="<Web Engineering/>" color={Colors.BLACKISH} borderColor={Colors.BLACKISH_TRANSPARENT} />
        <WatchLab />
      </div>
    </LandingPageContextProvider>
  );
};

export default LandingPage;
