import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";

import { ThemeProvider } from "styled-components";
import useLocalStorage from "./Utils/useLocalStorage";

import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

import Header from "./layouts/Header";
import MainContainer from './layouts/Main';
import GlobalStyle from "./styles/global";

import CommandBar from "./Components/CommandBar";
import Sidebar from "./layouts/Sidebar";

function App() {
  const [theme, setTheme] = useLocalStorage('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
 
  return (
    <CommandBar toggleTheme={toggleTheme} currentTheme={theme.title}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainContainer>
          <Router>
            <Sidebar />
            <Header toggleTheme={toggleTheme} />
            <Routes>
              <Route path="/lesson"/>
            </Routes>
          </Router>
        </MainContainer>
      </ThemeProvider>
    </CommandBar>
  )
}

export default App
