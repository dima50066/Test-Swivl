import styled from 'styled-components';
import { colors, fontSize, fontWeight, fonts } from '../../styles/variables';

export const PostCardContainer = styled.div`
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  position: relative;
  padding: 24px;
  width: 374px;
  height: 280px;
  background-color: #fff;
  box-shadow: 0 12px 25px #0003;
  overflow: hidden;
`;

export const SharedText = styled.span`
  position: absolute;
  top: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${fonts.opensans};
  font-weight: ${fontWeight.semibold};
  font-size: ${fontSize.smBody};
  color: ${colors.primaryText};
`;

export const PostContent = styled.h3`
  font-family: ${fonts.montserrat};
  font-size: ${fontSize.xlTitle};
  font-weight: ${fontWeight.normal};
  color: ${colors.primaryText};
  min-height: 132px;
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
  font-size: 18px;
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

  button:hover {
    color: #d54c52;
  }
`;

export const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 8px;
`;
