import { ThemeProvider } from "styled-components"
import useLocalStorage from "./Utils/useLocalStorage"

import light from "./styles/themes/light"
import dark from "./styles/themes/dark"

import Header from "./layouts/Header"
import GlobalStyle from "./styles/global"

function App() {
  const [theme, setTheme] = useLocalStorage('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
 
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
    </div>
    </ThemeProvider>
  )
}

export default App
