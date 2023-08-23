import React from "react";
import { Container } from "../../components/Container";
import { SectionTitle } from "../../components/SectionTitle";
import styled from "styled-components";
import photo1 from "../../assets/img/projects/project-1.webp";
import photo2 from "../../assets/img/projects/project-2.webp";
import photo3 from "../../assets/img/projects/project-3.webp";
import photo4 from "../../assets/img/projects/project-4.webp";

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <SectionTitle>
          It’s great to always give the customer the best feed.
        </SectionTitle>

        <Box>
          <BoxItem>
            <Link>123</Link>
          </BoxItem>
          <BoxItem></BoxItem>
          <BoxItem></BoxItem>
          <BoxItem></BoxItem>
        </Box>

        {/* <ProjTop>
          <ItemLeft>
            <img src={photo1} alt="" />
            <img src={photo2} alt="" />
          </ItemLeft>
          <div>
            <img src={photo3} alt="" />
          </div>
        </ProjTop>
        <div>
          <img src={photo4} alt="" />
        </div> */}
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  padding: 60px 0;
`;

const ProjTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`;

const BoxItem = styled.div`
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: inherit;
    background-size: cover;
    transform-origin: center;
    transition: transform 0.4s ease-in-out;
    transform: scale(1.05);
  }

  &:hover {
    &::after {
      transform: scale(1);
    }
  }

  &:nth-child(1) {
    background: url(${photo1}) no-repeat center / cover;
  }

  &:nth-child(2) {
    background: url(${photo2}) no-repeat center / cover;
    grid-column: 2;
    grid-row: 1 / 3;
    height: 900px;
  }

  &:nth-child(3) {
    background: url(${photo3}) no-repeat center / cover;
  }

  &:nth-child(4) {
    background: url(${photo4}) no-repeat center / cover;
    grid-column: 1 / 3;
    height: 435px;
  }
`;

const Link = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  margin-left: -248px;
  width: 496px;
  height: 95px;
  background-color: aqua;
  z-index: 1;
`;
