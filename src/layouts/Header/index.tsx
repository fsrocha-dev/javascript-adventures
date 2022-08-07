import { useContext, useEffect, useState } from 'react';
import { TbMoon, TbSun } from 'react-icons/tb';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import CommandButton from '../../Components/CommandButton';
import { Container } from './styles';

interface Props {
  toggleTheme(): void
}

const Header = ({ toggleTheme }: Props) => {
  const { colors, title } = useContext(ThemeContext)
  const [headerScrolled, setHeaderScrolled ] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  function handleScroll() {
    const scrollTop = window.pageYOffset
    console.log(scrollTop)
    if (scrollTop > 50) {
      setHeaderScrolled(true)
    } else {
      setHeaderScrolled(false)
    }
  }
  
  return (
    <Container hasScrolled={headerScrolled} currentTheme={title}>
      <CommandButton currentTheme={title} />
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