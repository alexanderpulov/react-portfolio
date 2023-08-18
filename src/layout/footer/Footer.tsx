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

        <div>
          I’m not currently taking on new client work but feel free to contact
          me for any other inquiries.
        </div>
        <div>
          <Icon iconId="twitter" />
          <Icon iconId="dribbble" />
          <Icon iconId="facebook" />
          <Icon iconId="codepen" />
          <Icon iconId="mail" />
          <Icon iconId="instagram" />
        </div>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  background-color: #fef2f2;
  padding: 100px 0;
  text-align: center;
`;
