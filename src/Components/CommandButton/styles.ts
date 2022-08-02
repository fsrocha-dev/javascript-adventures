import styled from "styled-components";
import { shade, lighten } from 'polished'

type Props = {
  activeTheme: string
}

export const CButton = styled.button<Props>`
  display: flex;
  align-items: center;
  background: ${props => props.theme.colors.primary};
  border-radius: 8px;
  border: none;
  border: 1px solid transparent;
  color: ${props => props.theme.colors.secundary};
  margin: 0 1em;
  padding: .70em 1em;
  cursor: pointer;
  transition: .25s;
  &:hover {
    border: 1px solid ${props => props.theme.colors.purple};
  }
  .command_search {
    justify-content: center;
    align-items: center;
    display: flex;
  }
  &:hover .command_search{
    color: ${({ theme, activeTheme }) => activeTheme == 'light' ? shade(0.3, theme.colors.secundary) : lighten(0.3, theme.colors.secundary)}
  }
  .command_search_text {
    margin-left: 6px;
  }
  .command_icon {
    margin-left: 12px;
    padding: 0.2em 0.4em;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${props => props.theme.colors.border}
  }
  .command_icon span{
    font-size: 12px;
  }
`;