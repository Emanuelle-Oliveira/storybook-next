import theme from "./theme";
import {ThemeProvider as StyleThemeProvider} from "styled-components";

// Provẽ o theme para toda a pagina
// <ThemeProvider> no index
export default function ThemeProvider({children}) {
  return (
    <StyleThemeProvider theme={theme}>
      {children}
    </StyleThemeProvider>
  );
}