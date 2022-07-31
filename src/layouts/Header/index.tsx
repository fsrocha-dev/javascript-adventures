import { useContext } from 'react'
import Switch from 'react-switch'
import { Container } from './styles'
import { ThemeContext } from 'styled-components'

const Header = () => {
  const { colors } = useContext(ThemeContext)
  return (
    <Container>
      Olá Javascript Adventures
      <Switch 
        onChange={() => {}}
        checked={true}
        checkedIcon={false}
        uncheckedIcon={false}
        height={18}
        width={40}
        handleDiameter={10}
        offColor={colors.switchBg}
        onColor={colors.switchBg}
        className=""
      />
    </Container>
  )
}

export default Header