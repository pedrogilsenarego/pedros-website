import { useSelector } from "react-redux";
import { Colors } from "../constants/pallete";
import { Contrast } from "../slicer/general/general.types";
import { State } from "../slicer/types";

const useColorGenerator = () => {
  const contrast = useSelector<State, Contrast>(
    (state) => state.general.contrast
  );

  const colorsMapper = (() => {
    switch (contrast) {
      case "grey":
        return {
          main: Colors.DARK_BLUE_TRANSPARENT,
          text: Colors.WHITE_TRANSPARENT_MID,
        };
      case "tealc":
        return {
          main: Colors.TEALC,
          text: Colors.WHITE,
        };
      case "fuchsia":
        return {
          main: Colors.FUCHSIA,
          text: Colors.WHITE,
        };

      default:
        return {
          main: Colors.DARK_BLUE_TRANSPARENT,
          text: Colors.WHITE_TRANSPARENT_MID,
        };
    }
  })();

  const contrastColor = colorsMapper;

  return { contrastColor };
};

export default useColorGenerator;
