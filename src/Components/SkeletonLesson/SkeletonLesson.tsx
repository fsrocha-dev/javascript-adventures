import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useTheme } from 'styled-components';
import { SkeletonContainer } from './index';

function SkeletonLesson() {
  const theme = useTheme();

  return (
    <SkeletonContainer>
      <SkeletonTheme 
        baseColor={theme.colors.skeletonBase} 
        highlightColor={theme.colors.skeletonHighlightColor}>
        <Skeleton height={40} />
        <Skeleton />
        <Skeleton height={300}/>
        <Skeleton count={1} />
        <Skeleton count={3} />
        <Skeleton count={3} />
      </SkeletonTheme>
    </SkeletonContainer>
  )
}

export default SkeletonLesson