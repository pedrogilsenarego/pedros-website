import { useContext } from "react";
import { FaReact } from "react-icons/fa";
import { Drawer } from "vaul";
import { Colors } from "../../constants/pallete";
import { MusicContext } from "../../providers/MusicProvider"; // Import the MusicContext
import "./index.css";

export function DrawerC() {
  const musicContext = useContext(MusicContext);

  return (
    <div className="relative">
      <Drawer.Root shouldScaleBackground>
        <Drawer.Trigger asChild>
          <FaReact
            size={"50px"}
            color={Colors.WHITE_SMUDGE}
            className={"menu-icon"}
            style={{
              position: "fixed",
              right: "65px",
              top: "calc(50% - 17.5px)", // Center vertically
              cursor: "pointer",
            }}
          />
        </Drawer.Trigger>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Portal>
          <Drawer.Content
            style={{ backgroundColor: Colors.WHITE_SMUDGE }}
            className="flex flex-col rounded-t-[5px] mt-24 max-h-[96%] fixed bottom-0 left-0 right-0 z-10"
          >
            <div
              style={{ minHeight: "40vh" }}
              className="p-4 rounded-t-[10px] flex-1 "
            >
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
              <div className="max-w-md mx-auto">
                <Drawer.Title className="font-medium mb-4">
                  Drawer for React.
                </Drawer.Title>
                <div
                  onMouseEnter={() => musicContext.togglePause()}
                  onClick={() => musicContext.togglePause()}
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
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
