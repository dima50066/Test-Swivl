import styled from 'styled-components';

export const FeedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const PostWrapper = styled.div`
  flex: 1 1 calc(50% - 8px);
  max-width: calc(50% - 8px);
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;

export const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
