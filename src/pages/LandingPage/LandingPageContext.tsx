import { createContext, useState } from "react";

interface LandingPageContextType {
  boxesOpacity: boolean
  setBoxesOpacity: (value: boolean) => void
}

export const LandingPageContext = createContext<LandingPageContextType>({
  boxesOpacity: false,
  setBoxesOpacity: () => { }

});

export const LandingPageContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [boxesOpacity, setBoxesOpacity] = useState<boolean>(false)

  const contextValue: LandingPageContextType = {
    boxesOpacity,
    setBoxesOpacity
  };

  return <LandingPageContext.Provider value={contextValue}>{children}</LandingPageContext.Provider>;
};
