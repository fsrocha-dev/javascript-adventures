import { Link, useLocation } from 'react-router-dom';
import logoUrl from '../../assets/logo.webp';
import { SidebarContainer, SidebarGroup, SidebarItems, SidebarTitle } from './styles';

import { useEffect, useState } from 'react';
import { lessons } from '../../data/lessons';

type MenuItens = {
  slug: string; 
  title: string; 
  tags: string; 
  active: boolean
}

const Sidebar = () => {
  const [menu, updateMenu] = useState<MenuItens[]>(
    [],
  );
  const location = useLocation()
  const currentSlug = location.pathname.split('/')[2]

  useEffect(() => {
    updateMenu(() => { return lessons.map(l => ({ slug: l.slug, title: l.title, tags: l.tags, active: currentSlug === l.slug ? true : false  }))})
  }, [location])

  return (
    <SidebarContainer>
      <SidebarTitle>
        <img src={logoUrl} />
        JavaScript Adventures
      </SidebarTitle>
      <SidebarGroup>
        <h2>Índice</h2>
        <SidebarItems>
          {
            menu.map((l) => <Link key={l.slug} to={`/lessons/${l.slug}`} className={l.active == true ? 'active' : ''}>{ l.title }</Link>)
          } 
        </SidebarItems>
      </SidebarGroup>
    </SidebarContainer>
  )
}

export default Sidebar