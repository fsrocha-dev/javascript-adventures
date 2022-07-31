import { ThemeProvider } from "styled-components"
import useLocalStorage from "./Utils/useLocalStorage"

import light from "./styles/themes/light"
import dark from "./styles/themes/dark"

import Header from "./layouts/Header"
import GlobalStyle from "./styles/global"

import CommandBar from "./Components/CommandBar"

function App() {
  const [theme, setTheme] = useLocalStorage('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
 
  return (
    <CommandBar toggleTheme={toggleTheme}>
      <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
      </div>
      </ThemeProvider>
    </CommandBar>
  )
}

export default App
