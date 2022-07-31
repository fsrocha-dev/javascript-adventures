import { ThemeProvider } from "styled-components"
import light from "./styles/themes/light"
import dark from "./styles/themes/dark"
import Header from "./layouts/Header"
import GlobalStyle from "./styles/global"

function App() {
 
  return (
    <ThemeProvider theme={dark}>
    <div className="App">
      <GlobalStyle />
      <Header />
    </div>
    </ThemeProvider>
  )
}

export default App
