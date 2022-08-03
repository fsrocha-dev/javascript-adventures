import React from 'react'
import {
  KBarAnimator,
  KBarProvider,
  KBarPortal,
  useDeepMatches,
  KBarPositioner,
  KBarSearch,
  KBarResults
} from 'kbar'

type Props = {
  children: JSX.Element,
  toggleTheme: React.Dispatch<React.SetStateAction<string>>,
  currentTheme: string
}

type StyleResultProps = {
  active: Boolean
}

function CommandBar({ children, toggleTheme, currentTheme }: Props) {
  const actions = [];

  const searchStyle = {
    padding: '12px 16px',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',
    border: 'none',
    margin: 0,
    background: currentTheme === 'light' ? '#ffffff' : 'rgba(255, 255, 255, 0.05)',
    color: '#f2f2f2',
  }

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner style={positionerStyle}>
          <KBarAnimator className="kbar-blur" style={animatorStyle}>
            <KBarSearch style={searchStyle} defaultPlaceholder="O que deseja encontrar ?" />
            <KBarResults 
              items={[]} 
              onRender={({ item, active }) =>
              typeof item === 'string' ? (
                <div style={groupNameStyle}>{item}</div>
              ) : (
                <ResultItem action={item} active={active} />
              )
            }
            />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      { children }
    </KBarProvider>
  )
}

function RenderResults() {
  const { results } = useDeepMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div style={groupNameStyle}>{item}</div>
        ) : (
          <ResultItem action={item} active={active} />
        )
      }
    />
  )
}

const ResultItem = React.forwardRef(({ action, active }, ref) => {
  return (
    <div ref={ref} style={getResultStyle(active)}>
      <div style={actionStyle}>
        {action.icon && action.icon}
        <div style={actionRowStyle}>
          <span>{action.name}</span>
        </div>
      </div>
      {action.shortcut?.length ? (
        <div aria-hidden style={shortcutStyle}>
          {action.shortcut.map(shortcut => (
            <kbd key={shortcut} style={kbdStyle}>
              {shortcut}
            </kbd>
          ))}
        </div>
      ) : null}
    </div>
  )
})

const positionerStyle = {
  position: 'fixed',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  inset: '0px',
  padding: '14vh 16px 16px',
  background: 'rgba(41, 41, 53, .5)',
  boxSizing: 'border-box'
}

const animatorStyle = {
  maxWidth: '600px',
  width: '100%',
  color: '#f2f2f2',
  borderRadius: '8px',
  overflow: 'hidden',
  border: '1px solid #646cff'
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
  background: 'rgba(255, 255, 255, .1)'
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

const getResultStyle = ({active}: StyleResultProps) => {
  return {
    padding: '12px 16px',
    background: active ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 0,
    cursor: 'pointer',
    color: active ? '#f2f2f2' : '#8f9ba8'
  }
}

export default CommandBar