import styled from "styled-components";
import { shade, lighten } from 'polished'

export const CButton = styled.button`
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
  &:hover .command_search_icon{
    color: ${props => lighten(0.2, props.theme.colors.secundary)};
  }
  .command_icon {
    border-radius: 4px;
    border: 1px solid ${props => shade(0.4, props.theme.colors.secundary)}
  }
`;