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
    <Container>
      <SectionTitle>
        It’s great to always give the customer the best feed.
      </SectionTitle>

      <ProjTop>
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
      </div>
    </Container>
  );
};

const ProjTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
