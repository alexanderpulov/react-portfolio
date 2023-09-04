import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Footer = styled.footer`
  background-color: #fef2f2;
  padding: 110px 0;
  text-align: center;

  p {
    font-size: 18px;
    color: #9ca3af;
    max-width: 664px;
    margin: 0 auto 100px;
  }
`;

const Title = styled.h3`
  color: #374151;
  font-size: 48px;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 20px;

  @media ${theme.media.mobile} {
    font-size: 38px;
  }
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;

  @media ${theme.media.mobile} {
    gap: 20px;
  }
`;

export const S = {
  Footer,
  Title,
  Social,
};
