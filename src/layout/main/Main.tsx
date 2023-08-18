import React from "react";
import photo from "../../assets/img/me.jpg";
import styled from "styled-components";
import { Container } from "../../components/Container";

export const Main = () => {
  return (
    <Container>
      <StyledMain>
        <MainLeft>
          <MainName>Alexander Pulov</MainName>
          <MainTitle>Creative thinker Minimalism lover</MainTitle>
          <MainText>
            Hi, I’m Jessica. I’m UI/UX Designer. If you are looking for Designer
            to build your brands and grow your business Let’s shake hands with
            me.
          </MainText>
          <MainLink>
            <a href="">Hire me</a>
          </MainLink>
          <MainSmallText>I am currently open for part-time work.</MainSmallText>
        </MainLeft>
        <MainRight>{/* <MainPhoto src={photo} alt="" /> */}</MainRight>
      </StyledMain>
    </Container>
  );
};

const StyledMain = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
`;

const MainLeft = styled.div`
  max-width: 600px;
`;

const MainTitle = styled.h1`
  font-size: 72px;
  font-weight: 700;
  line-height: 72px;
`;

const MainRight = styled.div`
  border-radius: 6px;
  overflow: hidden;
  width: 478px;
  height: 525px;
  background: url(${photo}) no-repeat center bottom;
  background-size: cover;
`;

// const MainPhoto = styled.img`
//   transform: scaleX(-1);
// `;

const MainName = styled.div`
  color: #4338ca;
  font-weight: 500;
  font-size: 20px;
  position: relative;
  left: 110px;

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

const MainText = styled.div`
  color: #6b7280;
  font-size: 18px;
  margin-bottom: 50px;
`;

const MainSmallText = styled.div`
  color: #6b7280;
  font-size: 12px;
  padding: 20px 0;
  border-top: 1px solid #e5e7eb;
`;

const MainLink = styled.div`
  margin-bottom: 40px;

  a {
    text-decoration: none;
    color: #fff;
    padding: 10px 30px;
    background-color: #3730a3;
    border-radius: 6px;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #4c42cd;
    }
  }
`;
