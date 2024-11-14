import styled from 'styled-components';
import { colors, fontSize, fontWeight, fonts } from '../../styles/variables';

export const PostCardContainer = styled.div`
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  position: relative;
  padding: 16px;
  width: 100%;
  max-width: 320px;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: auto;

  @media (min-width: 768px) {
    padding: 24px;
    width: 374px;
    height: 280px;
    box-shadow: 0 12px 25px #0003;
  }
`;

export const SharedText = styled.span`
  position: absolute;
  top: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${fonts.opensans};
  font-weight: ${fontWeight.semibold};
  font-size: ${fontSize.smBody};
  color: ${colors.primaryText};

  @media (min-width: 768px) {
    top: 24px;
    gap: 8px;
  }
`;

export const PostContent = styled.h3`
  font-family: ${fonts.montserrat};
  font-size: ${fontSize.lgTitle};
  font-weight: ${fontWeight.normal};
  color: ${colors.primaryText};
  min-height: 100px;

  @media (min-width: 768px) {
    font-size: ${fontSize.xlTitle};
    min-height: 132px;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  font-family: ${fonts.opensans};
  font-size: ${fontSize.tabText};
  color: ${colors.primaryText};
  font-weight: ${fontWeight.semibold};
`;

export const Metadata = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PostFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  width: 100%;
`;

export const ShareButton = styled.div`
  display: flex;
  justify-content: flex-end;
  font-family: ${fonts.opensans};
  font-weight: ${fontWeight.normal};
  font-size: 16px;
  text-align: right;
  color: #f05d63;

  button {
    background: none;
    border: none;
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    cursor: pointer;
    padding: 0;
  }

  button:hover,
  button:focus {
    color: #d54c52;
    outline: none;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Avatar = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 6px;

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`;
