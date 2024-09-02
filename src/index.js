import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot from react-dom/client
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import { SnackbarProvider } from "notistack";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  spacing: 8, // Customize spacing or other theme settings if needed
});

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={4}>
          <App />
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
