import { FaReact } from "react-icons/fa";
import { Drawer } from "vaul";
import { Colors } from "../../constants/pallete";
import "./index.css";

export function DrawerC() {
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
              right: "70px",
              top: "calc(50% - 17.5px)", // Center vertically
              cursor: "pointer",
            }}
          />
        </Drawer.Trigger>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Portal>
          <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] mt-24 max-h-[96%] fixed bottom-0 left-0 right-0 z-10">
            <div className="p-4 bg-white rounded-t-[10px] flex-1">
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
              <div className="max-w-md mx-auto">
                <Drawer.Title className="font-medium mb-4">
                  Drawer for React.
                </Drawer.Title>
                <p className="text-gray-600 mb-2">
                  This component can be used as a Dialog replacement on mobile
                  and tablet devices.
                </p>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
