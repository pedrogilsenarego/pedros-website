import { Drawer } from "vaul";

export function DrawerC() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute top-0 w-[1000px] z-10 h-[400px] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.15] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#A4A4A3, transparent 50%)" }}
      />

      <div className="max-w-2xl mx-auto text-center pt-64">
        <div className="flex gap-4 justify-center mt-6">
          <Drawer.Root shouldScaleBackground>
            <Drawer.Trigger asChild>
              <button
                type="button"
                className="rounded-full bg-red px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Open Drawer
              </button>
            </Drawer.Trigger>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Portal>
              <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] h-full mt-24 max-h-[96%] fixed bottom-0 left-0 right-0">
                <div className="p-4 bg-white rounded-t-[10px] flex-1">
                  <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
                  <div className="max-w-md mx-auto">
                    <Drawer.Title className="font-medium mb-4">
                      Drawer for React.
                    </Drawer.Title>
                    <p className="text-gray-600 mb-2">
                      This component can be used as a Dialog replacement on
                      mobile and tablet devices.
                    </p>
                    <p className="text-gray-600 mb-2">
                      It comes unstyled and has gesture-driven animations.
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-gray-100 border-t border-gray-200 mt-auto">
                  <div className="flex gap-6 justify-end max-w-md mx-auto">
                    <a
                      className="text-xs text-gray-600 flex items-center gap-0.25"
                      href="https://github.com/emilkowalski/vaul"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                      <svg
                        fill="none"
                        height="16"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        width="16"
                        aria-hidden="true"
                        className="w-3 h-3 ml-1"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14L21 3"></path>
                      </svg>
                    </a>
                    <a
                      className="text-xs text-gray-600 flex items-center gap-0.25"
                      href="https://twitter.com/emilkowalski_"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Twitter
                      <svg
                        fill="none"
                        height="16"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        width="16"
                        aria-hidden="true"
                        className="w-3 h-3 ml-1"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14L21 3"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
          <a
            href="https://github.com/emilkowalski/vaul"
            className="font-semibold text-sm px-4 py-2.5 hover:bg-gray-100 rounded-full"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
