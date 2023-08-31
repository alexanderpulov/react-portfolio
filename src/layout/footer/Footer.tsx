import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { SectionTitle } from "../../components/SectionTitle";
import { Icon } from "../../components/Icon";
import { theme } from "../../styles/Theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Title>Contact with me</Title>

        <p>
          I’m not currently taking on new client work but feel free to contact
          me for any other inquiries.
        </p>
        <Social>
          <a href="">
            <Icon iconId="twitter" />
          </a>
          <a href="">
            <Icon iconId="dribbble" />
          </a>
          <a href="">
            <Icon iconId="facebook" />
          </a>
          <a href="">
            <Icon iconId="codepen" />
          </a>
          <a href="">
            <Icon iconId="mail" />
          </a>
          <a href="">
            <Icon iconId="instagram" />
          </a>
        </Social>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
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
  line-height: 48px;
  margin-bottom: 20px;
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;

  @media ${theme.media.mobile} {
    gap: 20px;
  }
`;
