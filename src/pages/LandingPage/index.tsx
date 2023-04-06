
import HackerLettering from "../../components/HackerLettering";
import { Colors } from "../../constants/pallete";
import WatchLab from "./Boxes";
import { LandingPageContextProvider } from "./LandingPageContext";



const LandingPage = () => {


  return (
    <LandingPageContextProvider>
      <div

        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative"

        }}
      >

        <HackerLettering message="<Web Engineering/>" color={Colors.BLACKISH} borderColor={Colors.BLACKISH_TRANSPARENT} />
        <WatchLab />
      </div>
    </LandingPageContextProvider>
  );
};

export default LandingPage;
