import styled from "styled-components";
import { shade, lighten } from 'polished'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.primary};
  order: -1;
  flex: 0 0 270px;
  padding: 0 30px;
`;

export const SidebarTitle = styled.div`
  border-bottom: 1px solid ${props => shade(0.6, props.theme.colors.secundary)};
  height: 75px;
  display: flex;
  align-items: center;
  font-size: 15px;
  /* font-weight: 600; */
  transition: opacity .25s;

  img {
    width: 30px;
    margin-right: 10px;
  }
`;