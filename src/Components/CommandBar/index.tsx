import {
  KBarAnimator, KBarPortal, KBarPositioner, KBarProvider, KBarResults, KBarSearch, useMatches
} from 'kbar';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { lessons } from '../../data/lessons';

import { transparentize } from 'polished';
import styled from 'styled-components';

import { TbBrandGithub, TbBrandLinkedin, TbExchange, TbFile, TbMenu2 } from 'react-icons/tb';

type Props = {
  children: JSX.Element,
  toggleTheme: React.Dispatch<React.SetStateAction<string>>,
  currentTheme: string
}

function CommandBar({ children, toggleTheme, currentTheme }: Props) {
  const navigateTo = useNavigate();
  
  const actions = [
    {
      id: 'licoes',
      name: 'Procurar nas lições...',
      shortcut: ['l'],
      keywords: 'lições licoes indice índice topicos tópicos',
      section: 'Lições',
      icon: <TbMenu2 />
    },
    ...lessons.map(({ title, tags, slug }) => ({
      id: slug,
      name: title,
      keywords: tags,
      parent: 'licoes',
      perform: () => navigateTo(`/lessons/${slug}`),
      icon: <TbFile />
    })),
    {
      id: 'linkedin',
      name: 'LinkedIn',
      shortcut: ['f', 'l'],
      keywords: 'go-linkedin',
      section: 'Follow',
      perform: () =>
        window.open('https://www.linkedin.com/in/frankrochadev/', '_blank'),
      icon: <TbBrandLinkedin />
    },
    {
      id: 'github',
      name: 'Este projeto no github',
      shortcut: ['f', 'g'],
      keywords: 'github projeto',
      section: 'Follow',
      perform: () =>
        window.open('https://github.com/fsrocha-dev/javascript-adventures', '_blank'),
      icon: <TbBrandGithub />
    },
    {
      id: 'theme',
      name: 'Alternar tema',
      shortcut: ['t'],
      keywords: 'tema theme toggle',
      section: 'Preferências',
      perform: () => toggleTheme(''),
      icon: <TbExchange />
    },
  ];

  return (
    <KBarProvider actions={actions} options={{ enableHistory: true }}>
      <KBarPortal>
        <StyledKBarPositioner>
          <KBarAnimator style={animatorStyle}>
            <StyledKBarSearch defaultPlaceholder="O que deseja encontrar ?" />
            <RenderResults />
          </KBarAnimator>
        </StyledKBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  )
}

function RenderResults() {
  const { results } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <StyledKBarGroupName>{item}</StyledKBarGroupName>
        ) : (
          <ResultItem action={item} active={active} />
        )
      }
    />
  )
}

const ResultItem = React.forwardRef(({ action, active }, ref) => {
  return (
    <StyledKBarResults ref={ref} setActive={active}>
      <div style={actionStyle}>
        {action.icon && action.icon}
        <div style={actionRowStyle}>
          <span>{action.name}</span>
        </div>
      </div>
      {action.shortcut?.length ? (
        <div aria-hidden style={shortcutStyle}>
          {action.shortcut.map((shortcut: string) => (
            <kbd key={shortcut} style={kbdStyle}>
              {shortcut}
            </kbd>
          ))}
        </div>
      ) : null}
    </StyledKBarResults>
  )
})

const StyledKBarPositioner = styled(KBarPositioner)`
    position: fixed;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    inset: 0px;
    padding: 14vh 16px 16px;
    background: ${props => transparentize(0.5, 'rgb(41, 41, 53)')};
    box-sizing: border-box;
`;

const StyledKBarSearch = styled(KBarSearch)`
    padding: 12px 16px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
    outline: none;
    border: none;
    margin: 0;
    background: ${props => transparentize(0.1, props.theme.colors.switchBg)};
    color: #f2f2f2;
`;

const StyledKBarGroupName = styled.div`
    padding: 8px 16px;
    font-size: 11px;
    font-weight: bold;
    color: ${props => props.theme.colors.purple};
    text-transform: uppercase;
    letter-spacing: 1px;
    background: ${props => transparentize(0.1, props.theme.colors.switchBg)};
`

const StyledKBarResults = styled.div<{ setActive: boolean }>`
    padding: 12px 16px;
    background: ${(props) => props.setActive ? props.theme.colors.purple : transparentize(0.1, props.theme.colors.switchBg)};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    cursor: pointer;
    color: ${(props) => props.setActive ? '#f2f2f2' : transparentize(0.2, props.theme.colors.text)};
`

const animatorStyle = {
  maxWidth: '600px',
  width: '100%',
  color: '#f2f2f2',
  borderRadius: '8px',
  overflow: 'hidden',
  border: '1px solid #646cff',
  backdropFilter: 'blur(2px)'
}

const groupNameStyle = {
  padding: '8px 16px',
  fontSize: '10px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  background: 'rgba(255, 255, 255, 0.05)'
}

const iconStyle = {
  fontSize: '20px',
  position: 'relative',
  top: '-2px'
}

const kbdStyle = {
  padding: '4px 8px',
  textTransform: 'uppercase',
  color: '#8f9ba8',
  background: 'rgba(255, 255, 255, .1)',
}

const shortcutStyle = {
  display: 'grid',
  gridAutoFlow: 'column',
  gap: '4px'
}

const actionStyle = {
  display: 'flex',
  gap: '8px',
  alignItems: 'center'
}

const actionRowStyle = {
  display: 'flex',
  flexDirection: 'column'
}

export default CommandBar