import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DrawerC } from "../../components/Drawer";
import { Colors } from "../../constants/pallete";
import SideBar from "../../presentional/SideBar";
import { scrollTo } from "../../slicer/general/general.actions";
import Contact from "./Contact";
import Initial from "./Initial";
import Skills from "./Skills";
import Work from "./Work";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(scrollTo("Home"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      style={{
        backgroundColor: Colors.BLACKISH,
      }}
    >
      <SideBar />
      <Initial />
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
