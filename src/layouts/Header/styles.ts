import styled from "styled-components";

export const Container = styled.div`
  height: 65px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secundary};
  display: flex;
  align-items: center;
  padding: 0 30px;
`;