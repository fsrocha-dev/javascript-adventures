import { useContext } from 'react'
import Switch from 'react-switch'
import { Container } from './styles'
import { ThemeContext } from 'styled-components'
import { TbSun, TbMoon } from 'react-icons/tb'
import CommandButton from '../../Components/CommandButton'

interface Props {
  toggleTheme(): void
}

const Header = ({ toggleTheme }: Props) => {
  const { colors, title } = useContext(ThemeContext)
  return (
    <Container>
      <CommandButton />
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        checkedHandleIcon={
          <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <TbMoon size={14} />
        </div>}
        uncheckedHandleIcon={
          <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <TbSun size={14} />
        </div>}
        height={22}
        width={40}
        handleDiameter={19}
        offColor={colors.switchBg}
        offHandleColor={colors.primary}
        onColor={colors.switchBg}
        onHandleColor={colors.primary}
      />
    </Container>
  )
}

export default Header