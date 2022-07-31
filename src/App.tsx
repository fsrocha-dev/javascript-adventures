import { ThemeProvider } from "styled-components"
import light from "./styles/themes/light"
import dark from "./styles/themes/dark"
import Header from "./layouts/Header"
import GlobalStyle from "./styles/global"
import { useState } from "react"

function App() {
  const [theme, setTheme] = useState(light)

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
