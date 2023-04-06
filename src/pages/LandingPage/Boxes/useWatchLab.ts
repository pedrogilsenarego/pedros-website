import {useState} from "react"

const useWatchLab = () => {
  const [boxInfoMenu, setBoxInfoMenu] = useState<string>("whiteBox");
  const [x, setX] = useState(0);

  const configCentralButtons = {
    boxInfoMenu,
    setBoxInfoMenu,
    setX,
    x,
  };

  const configSlider = {
    x,
  };

  return {configCentralButtons, configSlider}
}

export default useWatchLab