// theme changer

import { useState, createContext } from "react";
import Main from "./components/Main";

import { ThemeProvider } from "styled-components";
import { themes } from "./assets/theme";

export const SetThemeContext = createContext(() => {});

function App() {
  const [themeState, setThemeState] = useState("dark");

  return (
    <>
      <ThemeProvider theme={themes[themeState]}>
        <SetThemeContext.Provider value={setThemeState}>
          <Main theme={themes[themeState]} />
        </SetThemeContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
