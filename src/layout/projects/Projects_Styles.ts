import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { BtnProj } from "./project/BtnProj";
import photo1 from "../../assets/img/projects/project-1.webp";
import photo2 from "../../assets/img/projects/project-2.webp";
import photo3 from "../../assets/img/projects/project-3.webp";
import photo4 from "../../assets/img/projects/project-4.webp";

const Projects = styled.section`
  padding: 150px 0;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 20px;

  @media ${theme.media.tablet} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
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
    transform: scale(1.04);
  }

  &:hover {
    ${BtnProj} {
      opacity: 1;
    }
    &::after {
      transform: scale(1);
    }
  }

  @media ${theme.media.tablet} {
    ${BtnProj} {
      opacity: 1;
    }
    &::after {
      transform: scale(1);
    }
  }

  &:nth-child(1) {
    background: url(${photo1}) no-repeat center / cover;

    @media ${theme.media.tablet} {
      grid-area: 1 / 1 / 2 / 2;
    }
  }

  &:nth-child(2) {
    background: url(${photo2}) no-repeat center / cover;

    grid-column: 2;
    grid-row: 1 / 3;
    height: 880px;

    @media ${theme.media.desktop} {
      height: 640px;
    }

    @media ${theme.media.tablet} {
      grid-area: 2 / 1 / 3 / 2;
      height: 100%;
    }
  }

  &:nth-child(3) {
    background: url(${photo3}) no-repeat center / cover;

    @media ${theme.media.tablet} {
      grid-area: 3 / 1 / 4 / 2;
    }
  }

  &:nth-child(4) {
    background: url(${photo4}) no-repeat center / cover;
    grid-column: 1 / 3;
    height: 420px;

    @media ${theme.media.desktop} {
      height: 300px;
    }

    @media ${theme.media.tablet} {
      grid-area: 4 / 1 / 5 / 2;
      height: 420px;
    }
  }
`;

export const S = {
  Projects,
  Box,
  BoxItem,
};
