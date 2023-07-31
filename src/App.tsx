import { CssBaseline, StyledEngineProvider } from "@mui/material";

import { BrowserRouter } from "react-router-dom";
import MusicProvider from "./providers/MusicProvider";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <MusicProvider>
          <CssBaseline />
          <AppRoutes />
        </MusicProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;
