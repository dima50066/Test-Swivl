import styled from 'styled-components';
import { colors, fontSize, fontWeight, fonts } from '../../styles/variables';

export const PostCardContainer = styled.div`
  width: 374px;
  height: 280px;
  background-color: #fff;
`;

export const PostContent = styled.h3`
  font-family: ${fonts.montserrat};
  font-size: ${fontSize.xlTitle};
  font-weight: ${fontWeight.normal};
  color: ${colors.primaryText};
`;

export const AuthorInfo = styled.div`
  font-family: ${fonts.opensans};
  font-size: ${fontSize.tabText};
  color: ${colors.primaryText};
  font-weight: ${fontWeight.semibold};
`;

export const Metadata = styled.div`
  /* Add styles for likes, comments, etc. */
`;

export const ActionButtons = styled.div`
  font-family: ${fonts.opensans};
  font-weight: ${fontWeight.normal};
  font-size: ${fontSize.lgBody};
  text-align: right;
  color: #f05d63;
`;
