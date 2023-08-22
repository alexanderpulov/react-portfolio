import React from "react";
import styled from "styled-components";
import photo1 from "../../assets/img/trusted/alphabet.png";
import photo2 from "../../assets/img/trusted/shopify.png";
import photo3 from "../../assets/img/trusted/amazon.png";
import photo4 from "../../assets/img/trusted/google.png";
import photo5 from "../../assets/img/trusted/netflix.png";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Trusted = () => {
  return (
    <StyledTrusted>
      <Container>
        <h3>Trusted by</h3>
        <FlexWrapper justify="space-between">
          <img src={photo1} alt="" />
          <img src={photo2} alt="" />
          <img src={photo3} alt="" />
          <img src={photo4} alt="" />
          <img src={photo5} alt="" />
        </FlexWrapper>
      </Container>
    </StyledTrusted>
  );
};

const StyledTrusted = styled.section`
  background-color: #fef2f2;
  padding: 50px 0;
`;
