import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMarkdown = styled(ReactMarkdown)`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 10%;
  font-size: 16px;
  color: ${props => props.theme.colors.text};
  line-height: 30px;
  p {
    text-align: justify;
    width: 100%;
  }
  table,
  tr,
  td,
  th {
    border: 1px solid #555;
  }
  h1,
  h2,
  h3 {
    margin-top: 25px;
  }
  pre {
    margin-top: 5px;
  }
  h2,
  h3 {
    color: ${props => props.theme.colors.purple};
  }
  summary {
    font-size: 16px;
  }
  details {
    font-size: 15px;
    line-height: 20px;
  }
  blockquote {
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
  }
  ul {
    margin-left: 30px;
  }
  ul li {
    /* padding: 5px 0; */
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.secundary};
  }
  a:hover {
    text-decoration: none;
    color: #fff;
  }
`;
