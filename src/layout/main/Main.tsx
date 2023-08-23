import React from "react";
import photo from "../../assets/img/main-photo.webp";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Btn } from "../../components/Btn";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <MainLeft>
            <Name>Alexander Pulov</Name>
            <Title>Creative thinker Minimalism lover</Title>
            <Text>
              Hi, I’m Jessica. I’m UI/UX Designer. If you are looking for
              Designer to build your brands and grow your business Let’s shake
              hands with me.
            </Text>

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
              Read more
            </Btn>

            <SmallText>I am currently open for part-time work.</SmallText>
          </MainLeft>
          <MainRight></MainRight>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  padding: 60px 0;
`;

const MainLeft = styled.div`
  max-width: 600px;
`;

const Name = styled.div`
  color: #4338ca;
  font-weight: 500;
  font-size: 20px;
  position: relative;
  left: 110px;
  margin-bottom: 40px;

  &::before {
    content: "";
    display: inline-block;
    width: 100px;
    height: 1px;
    background-color: #3730a3;
    position: absolute;
    top: 50%;
    left: -110px;
  }
`;

const Title = styled.h1`
  font-size: 72px;
  font-weight: 700;
  line-height: 72px;
  color: #1f2937;
  margin-bottom: 40px;
`;

const Text = styled.p`
  color: #6b7280;
  font-size: 18px;
  margin-bottom: 40px;
`;

const SmallText = styled.p`
  color: #6b7280;
  font-size: 12px;
  padding: 20px 0;
  border-top: 1px solid #e5e7eb;
`;

const MainRight = styled.div`
  border-radius: 6px;
  overflow: hidden;
  width: 478px;
  height: 525px;
  background: url(${photo}) no-repeat center bottom;
  background-size: cover;
`;
