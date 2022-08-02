import { Link } from 'react-router-dom';
import { SidebarContainer, SidebarGroup, SidebarTitle, SidebarItems } from './styles';
import logoUrl from '../../assets/logo.webp'

const Sidebar = () => {  
  return (
    <SidebarContainer>
      <SidebarTitle>
        <img src={logoUrl} />
        JavaScript Adventures
      </SidebarTitle>
      <SidebarGroup>
        <h2>Índice</h2>
        <SidebarItems>
          <Link to='/lesson'>Uma nova maneira de pensar em javascript</Link>
        </SidebarItems>
      </SidebarGroup>
    </SidebarContainer>
  )
}

export default Sidebar