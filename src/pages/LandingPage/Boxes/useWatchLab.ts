import {useState} from "react"

const useWatchLab = () => {
  const [boxInfoMenu, setBoxInfoMenu] = useState<string>("whiteBox");

  const configCentralButtons = {
    boxInfoMenu,
    setBoxInfoMenu,
  };


  return {configCentralButtons}
}

export default useWatchLab