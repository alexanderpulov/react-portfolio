import React from "react";
import { Container } from "../../components/Container";
import { SectionTitle } from "../../components/SectionTitle";
import styled from "styled-components";
import photo1 from "../../assets/img/projects/project-1.webp";
import photo2 from "../../assets/img/projects/project-2.webp";
import photo3 from "../../assets/img/projects/project-3.webp";
import photo4 from "../../assets/img/projects/project-4.webp";
import { Icon } from "../../components/Icon";

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <SectionTitle>
          It’s great to always give the customer the best feed.
        </SectionTitle>

        <Box>
          <BoxItem></BoxItem>
          <BoxItem>
            <Link>
              <div>
                <h3>Project title here</h3>
                <span>Photograph</span>
              </div>
              <Icon
                iconId="arrow-black"
                width="30"
                height="30"
                viewBox="0 0 15 15"
              />
            </Link>
          </BoxItem>
          <BoxItem></BoxItem>
          <BoxItem></BoxItem>
        </Box>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  padding: 100px 0;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 40px;
  left: 50%;
  margin-left: -248px;
  min-width: 496px;
  height: 95px;
  background-color: #fff;
  z-index: 1;
  padding: 23px 27px;
  cursor: pointer;

  h3 {
    font-weight: 500;
    color: #1f2937;
    font-size: 18px;
    line-height: 28px;
  }

  span {
    font-weight: 500;
    font-size: 14px;
    color: #9ca3af;
  }
`;
