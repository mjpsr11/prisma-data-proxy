import { globalTheme, globalThemeDark } from "../lib/theme";
import { ThemeProvider } from "@mui/material/styles";
import { useStore } from "../lib/store"
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { Box } from "@mui/system";

export default function Home() {

  const mode = useStore((state) => state.mode)
  const themes = useStore(state => state.themes)

  useEffect(() => {
    const getThemes = async () => {
      const results = await fetch('/api/get-themes').then(res => res.json())
      console.log(results[0].name)
      useStore.setState({ themes: results[0].name })
    }
    getThemes()
  }, [])

  return (
    <ThemeProvider theme={mode === "dark" ? globalThemeDark : globalTheme}>
      <Typography>Prisma data proxy test</Typography>
      <Box>{themes}</Box>
    </ThemeProvider>
  );
}
