import { SidebarContainer, SidebarTitle } from './styles'
import logoUrl from '../../assets/logo.webp'

const Sidebar = () => {  
  return (
    <SidebarContainer>
      <SidebarTitle>
        <img src={logoUrl} />
        JavaScript Adventures
      </SidebarTitle>
    </SidebarContainer>
  )
}

export default Sidebar