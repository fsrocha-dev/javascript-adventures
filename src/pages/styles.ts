import ReactMarkdown from "react-markdown";
import styled from "styled-components";

export const StyledMarkdown = styled(ReactMarkdown)`
display: flex;
width: 100%;
flex-direction: column;
padding: 0 10%;
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
h1, h2, h3, p, div, details, pre {
  margin: 20px 0px;
}
summary {
  font-size: 18px;
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
`;