import { useMediaQuery, useTheme } from "@mui/material";
import GeneralCursor from "./GeneralCursor";

const Cursor = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return mobile ? null : <GeneralCursor />;
};

export default Cursor;
