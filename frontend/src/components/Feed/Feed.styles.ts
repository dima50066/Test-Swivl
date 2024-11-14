import styled from 'styled-components';

export const FeedWrapper = styled.div`
  padding-top: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: flex-start;
    padding-top: 48px;
  }

  @media (min-width: 1024px) {
    padding-top: 80px;
  }
`;
