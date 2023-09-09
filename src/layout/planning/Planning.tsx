import React from "react";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import photo1 from "../../assets/img/planning/planning-1.png";
import photo2 from "../../assets/img/planning/planning-2.png";
import photo3 from "../../assets/img/planning/planning-3.png";
import { Box } from "./box/Box";
import { S } from "./Planning_Styles";

export const Planning: React.FC = () => {
  const boxData = [
    {
      img: photo1,
      title: "Business planning",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      img: photo2,
      title: "Financial planning",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      img: photo3,
      title: "Market Analytics",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <S.Planning id="planning">
      <Container>
        <FlexWrapper justify="space-between">
          {boxData.map((b) => {
            return <Box img={b.img} title={b.title} text={b.text} />;
          })}
        </FlexWrapper>
      </Container>
    </S.Planning>
  );
};
