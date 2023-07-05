import { CssBaseline, StyledEngineProvider } from "@mui/material";

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <AppRoutes />
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;
