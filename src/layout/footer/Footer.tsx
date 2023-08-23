import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { SectionTitle } from "../../components/SectionTitle";
import { Icon } from "../../components/Icon";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <SectionTitle>Contact with me</SectionTitle>

        <p>
          I’m not currently taking on new client work but feel free to contact
          me for any other inquiries.
        </p>
        <div>
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
        </div>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #fef2f2;
  padding: 60px 0;
  text-align: center;
`;
