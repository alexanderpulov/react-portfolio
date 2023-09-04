import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { FlexWrapper } from "../../components/FlexWrapper";

const Planning = styled.section`
  padding-bottom: 90px;

  @media ${theme.media.tablet} {
    ${FlexWrapper} {
      flex-direction: column;
      align-items: center;
    }
  }
`;

// BOX
const Box = styled.div`
  max-width: 360px;
  text-align: center;
  margin: 0 20px 60px;
`;

const Img = styled.img`
  margin-bottom: 40px;
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 30px;
  color: #374151;
  margin-bottom: 20px;

  @media ${theme.media.mobile} {
    font-size: 26px;
  }
`;

const Text = styled.p`
  color: #9ca3af;
  font-size: 18px;
  line-height: 28px;
`;

export const S = {
  Planning,
  Box,
  Img,
  Title,
  Text,
};
