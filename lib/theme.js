import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { useStore } from "../lib/store";
import { NoEncryption } from "@mui/icons-material";


// Create a theme instance.
export const globalTheme = createTheme({
  palette: {
  },
  margin: 0,
});

export const globalThemeDark = createTheme({
  palette: {
    mode: 'dark',
  },
  margin: 0,
});

export const buttonTheme = createTheme({
  palette: {
    primary: {
      main: grey[100],
    },
  },
});
