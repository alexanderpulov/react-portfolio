import React from "react";
import styled from "styled-components";
import photo1 from "../../assets/img/trusted/alphabet.png";
import photo2 from "../../assets/img/trusted/shopify.png";
import photo3 from "../../assets/img/trusted/amazon.png";
import photo4 from "../../assets/img/trusted/google.png";
import photo5 from "../../assets/img/trusted/netflix.png";
import { Container } from "../../components/Container";

export const Trusted = () => {
  return (
    <StyledTrusted>
      <Container>
        <h3>Trusted by</h3>
        <PhotoWrapper>
          <img src={photo1} alt="" />
          <img src={photo2} alt="" />
          <img src={photo3} alt="" />
          <img src={photo4} alt="" />
          <img src={photo5} alt="" />
        </PhotoWrapper>
      </Container>
    </StyledTrusted>
  );
};

const StyledTrusted = styled.div`
  background-color: #fef2f2;
  padding: 100px 0;
`;

const PhotoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
