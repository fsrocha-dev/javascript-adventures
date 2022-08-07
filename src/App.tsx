import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";

import { ThemeProvider } from "styled-components";
import useLocalStorage from "./Utils/useLocalStorage";
import useUpdateLocalStorage from "./Utils/useUpdateLocalStorage";

import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

import Header from "./layouts/Header";
import MainContainer from './layouts/Main';
import GlobalStyle from "./styles/global";

import { useEffect } from 'react';
import CommandBar from "./Components/CommandBar";
import Sidebar from "./layouts/Sidebar";

function App() {
  const [theme, setTheme] = useLocalStorage('theme', light)

  useEffect(() => {
    useUpdateLocalStorage('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    const storageValue = localStorage.getItem('theme')
    const currentTheme = JSON.parse(storageValue || '{}').title;
    setTheme(currentTheme === 'light' ? dark : light)
  }
 
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainContainer>
          <Router>
            <Sidebar />
            <CommandBar toggleTheme={toggleTheme} currentTheme={theme.title}>
              <Header toggleTheme={toggleTheme} />
            </CommandBar>
            <Routes>
              <Route path="/lesson/:lesson"/>
            </Routes>
          </Router>
        </MainContainer>
      </ThemeProvider>
  )
}

export default App
