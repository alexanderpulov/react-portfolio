import React from "react";
import { Container } from "../../components/Container";
import { SectionTitle } from "../../components/SectionTitle";
import styled from "styled-components";
import photo1 from "../../assets/img/projects/project-1.webp";
import photo2 from "../../assets/img/projects/project-2.webp";
import photo3 from "../../assets/img/projects/project-3.webp";
import photo4 from "../../assets/img/projects/project-4.webp";
import { Icon } from "../../components/Icon";
import { BtnProj } from "../../components/BtnProj";

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <SectionTitle>
          It’s great to always give the customer the best feed.
        </SectionTitle>

        <Box>
          <BoxItem>
            <BtnProj>
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
            </BtnProj>
          </BoxItem>
          <BoxItem>
            <BtnProj>
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
            </BtnProj>
          </BoxItem>
          <BoxItem>
            <BtnProj>
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
            </BtnProj>
          </BoxItem>
          <BoxItem>
            <BtnProj>
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
            </BtnProj>
          </BoxItem>
        </Box>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  padding: 150px 0;
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
    transition: transform 0.3s ease-in-out;
    transform: scale(1.05);
  }

  &:hover {
    ${BtnProj} {
      opacity: 1;
    }
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
