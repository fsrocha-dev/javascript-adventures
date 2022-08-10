import { FC } from 'react';
import { CodeProps } from 'react-markdown/lib/ast-to-react';
import { StyledIframeVideo, StyledVideoContainer } from './styles';

const VideoBlock: FC<CodeProps> = function ({
	node,
	inline,
	className,
	children,
	...props
}) {
  return (
    <StyledVideoContainer>
      <StyledIframeVideo {...props }></StyledIframeVideo>
    </StyledVideoContainer>
  )
};

export default VideoBlock;