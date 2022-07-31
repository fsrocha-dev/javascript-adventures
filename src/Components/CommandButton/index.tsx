import { useKBar } from 'kbar'
import { CButton } from './styles'
import { TbSearch, TbCommand } from 'react-icons/tb'

interface Props {
  currentTheme: string
}

function CommandButton({ currentTheme }: Props) {
  return (
  <CButton activeTheme={currentTheme} onClick={useKBar().query.toggle}>
    <span className='command_search'>
      <TbSearch size={15} className='command_search_icon'/>
      <span className='command_search_text'>Buscar</span>
    </span>
    <span className="command_icon">
      <TbCommand size={15} />
      <span>K</span>
    </span>
  </CButton>)
}

export default CommandButton