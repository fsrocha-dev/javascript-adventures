import { CButton } from './styles'
import { TbSearch, TbCommand } from 'react-icons/tb'

function CommandButton() {
  return (
  <CButton>
    <span className='command_search_icon'>
      <TbSearch size={15}/>
      <span>Buscar</span>
    </span>
    <span className="command_icon">
      <TbCommand />
      K
    </span>
  </CButton>)
}

export default CommandButton