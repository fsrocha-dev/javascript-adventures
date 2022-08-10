import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import rehypeRaw from "rehype-raw";
import CodeBlock from '../Components/CodeBlock/CodeBlock';
import VideoBlock from '../Components/VideoBlock/VideoBlock';

import { StyledMarkdown } from './styles';

const MarkdownLessons = () => {
  const location = useLocation()
  const currentSlug = location.pathname.split('/')[2]
  const [lesson, setLesson] = useState('')

  useEffect(() => {
    import(`../markdown/${currentSlug}.md`).then((res) => {
      setLesson(res.html)
    }).catch((e) => alert('nao tem essa licao'))
  }, [location]);

  return (
    <StyledMarkdown 
      skipHtml={false}
      rehypePlugins={[rehypeRaw]}
      components={{
        code: CodeBlock,
        iframe: VideoBlock
      }}>
      {lesson}
    </StyledMarkdown>
  )
}

export default MarkdownLessons