import React, { lazy, useEffect } from "react";
import {
  Route, Routes
} from "react-router-dom";

import { ThemeProvider } from "styled-components";
import useLocalStorage from "./Utils/useLocalStorage";
import useUpdateLocalStorage from "./Utils/useUpdateLocalStorage";

import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

import Header from "./layouts/Header";
import MainContainer from './layouts/Main';
import { Content } from "./layouts/Main/styles";
import GlobalStyle from "./styles/global";

import CommandBar from "./Components/CommandBar";
import SkeletonLesson from "./Components/SkeletonLesson/SkeletonLesson";
import Sidebar from "./layouts/Sidebar";

//Lazy components import
const MarkdownLessons = lazy(() => import("./pages/MarkdownLessons"));

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
          <>
            <Sidebar />
            <Content>
              <CommandBar toggleTheme={toggleTheme} currentTheme={theme.title}>
                <Header toggleTheme={toggleTheme} />
              </CommandBar>
              <Routes>
                <Route path="/lessons/:lesson" element={
                  <React.Suspense fallback={<SkeletonLesson />}>
                    <MarkdownLessons />
                  </React.Suspense>
                }/>
              </Routes>
            </Content>
          </>
        </MainContainer>
      </ThemeProvider>
  )
}

export default App
