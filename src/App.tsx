import { CssBaseline, StyledEngineProvider } from "@mui/material";

import { BrowserRouter } from "react-router-dom";
import Cursor from "./presentional/Cursor";
import Manager from "./presentional/Manager";
import MusicProvider from "./providers/MusicProvider";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <MusicProvider>
          <CssBaseline />
          <Manager />
          <Cursor />
          <AppRoutes />
        </MusicProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;
