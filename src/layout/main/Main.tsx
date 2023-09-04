import React from "react";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Btn } from "../../components/Btn";
import { S } from "./Main_Styles";

export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <S.MainLeft>
            <S.Name>Alexander Pulov</S.Name>
            <S.Title>Creative thinker Minimalism lover</S.Title>
            <S.Text>
              Hi, I’m Alexander. I’m UI/UX Designer. If you are looking for
              Designer to build your brands and grow your business Let’s shake
              hands with me.
            </S.Text>

            <Btn
              display="inline-block"
              background="#3730A3"
              color="#fff"
              margin="0 20px 20px 0"
              href=""
            >
              Hire me
            </Btn>
            <Btn
              display="inline-block"
              background="#fff"
              color="#3730A3"
              href=""
            >
              Download CV
            </Btn>

            <S.SmallText>I am currently open for part-time work.</S.SmallText>
          </S.MainLeft>
          <S.MainRight></S.MainRight>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
