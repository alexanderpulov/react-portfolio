import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { FlexWrapper } from "../../components/FlexWrapper";

const Skills = styled.section`
  padding: 100px 0 150px;

  @media screen and (max-width: 1189px) {
    padding: 100px 0 90px;
  }

  @media ${theme.media.tablet} {
    ${FlexWrapper} {
      flex-direction: column;
    }
  }
`;

const TitleSpan = styled.span`
  color: #3730a3;
`;

const Photo = styled.div`
  margin-right: 50px;

  @media ${theme.media.mobile} {
    margin-right: 0;
  }

  img {
    @media ${theme.media.tablet} {
      margin-bottom: 60px;
    }

    @media ${theme.media.mobile} {
      width: 100%;
    }
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const S = {
  Skills,
  TitleSpan,
  Photo,
  Content,
};
