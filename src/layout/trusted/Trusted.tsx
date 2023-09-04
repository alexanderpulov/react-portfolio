import React from "react";
import photo1 from "../../assets/img/trusted/alphabet.png";
import photo2 from "../../assets/img/trusted/shopify.png";
import photo3 from "../../assets/img/trusted/amazon.png";
import photo4 from "../../assets/img/trusted/google.png";
import photo5 from "../../assets/img/trusted/netflix.png";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { S } from "./Trusted_Styles";

export const Trusted: React.FC = () => {
  const imgData = [
    {
      src: photo1,
    },
    {
      src: photo2,
    },
    {
      src: photo3,
    },
    {
      src: photo4,
    },
    {
      src: photo5,
    },
  ];

  return (
    <S.Trusted>
      <Container>
        <S.Title>Trusted by</S.Title>
        <FlexWrapper wrap="wrap" justify="space-around" align="center">
          {imgData.map((i, index) => {
            return <img key={index} src={i.src} alt="" />;
          })}
        </FlexWrapper>
      </Container>
    </S.Trusted>
  );
};
