import { createContext, useEffect, useState } from "react";

interface LandingPageContextType {
  boxesOpacity: boolean
  setBoxesOpacity: (value: boolean) => void
  height: number;
  x: number;
  setX: (x: number) => void;
}

export const LandingPageContext = createContext<LandingPageContextType>({
  boxesOpacity: false,
  setBoxesOpacity: () => { },
  height: window.innerHeight,
  x: 0,
  setX: () => { },

});

export const LandingPageContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [boxesOpacity, setBoxesOpacity] = useState<boolean>(false)
  const [height, setHeight] = useState(window.innerHeight);
  const [x, setX] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const contextValue: LandingPageContextType = {
    height,
    boxesOpacity,
    setBoxesOpacity,
    setX,
    x

  };

  return <LandingPageContext.Provider value={contextValue}>{children}</LandingPageContext.Provider>;
};
