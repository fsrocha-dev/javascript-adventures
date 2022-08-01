import { MainContainer } from './styles'

interface Props {
  children: JSX.Element,
}

const Main = ({ children }: Props) => {  
  return (
    <MainContainer>
      {children}
    </MainContainer>
  )
}

export default Main