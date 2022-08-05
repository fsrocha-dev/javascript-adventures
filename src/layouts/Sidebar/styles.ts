import styled from "styled-components";
import { down } from '../../styles/MediaQueries/queries';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.primary};
  order: -1;
  flex: 0 0 270px;
  padding: 20px 30px;
  height: 100vh;
  transition: 0.25s;
  transition-timing-function: ease-out;
  transform: translateX(0);
  ${down('lg')} {
    transition-timing-function: ease-in;
    /* transition: 0.25s; */
    transform: translateX(-100%);
    position: fixed;
  }
`;

export const SidebarTitle = styled.div`
  height: 40px;
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

export const SidebarGroup = styled.div`
  border-top: 1px solid ${props => props.theme.colors.border};
  height: 100%;
  margin-top: 20px;
  padding-top: 25px;
  h2 {
    font-weight: bold;
    font-size: 14px;
  }
`

export const SidebarItems = styled.div`
  margin: 15px 0;
  a {
    color: ${props => props.theme.colors.secundary};
    text-decoration: none;
    transition: .25s;
  }
  a:hover {
    color: ${props => props.theme.colors.purple};
  }
`


// #6970ff
// #9297fb
// rgb(146,151,251)