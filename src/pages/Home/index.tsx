import Screen from "../../components/Screen";
import { Colors } from "../../constants/pallete";
import SideBar from "../../presentional/SideBar";
import Contact from "./Contact";
import Skills from "./Skills";
import Work from "./Work";
const Home = () => {
  return (
    <div
      style={{
        backgroundColor: Colors.BLACKISH,
      }}
    >
      <SideBar />
      <div
        style={{
          paddingRight: "10vw",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Screen />
      </div>
      <Work />
      <Skills />
      <div
        style={{
          paddingRight: "10vw",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Contact />
      </div>
    </div>
  );
};

export default Home;
