import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import photo1 from "../../assets/img/planning/planning-1.png";
import photo2 from "../../assets/img/planning/planning-2.png";
import photo3 from "../../assets/img/planning/planning-3.png";
import { Box } from "./box/Box";

export const Planning = () => {
  return (
    <StyledPlanning>
      <Container>
        <FlexWrapper justify="space-between">
          <Box
            img={photo1}
            title="Business planning"
            text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <Box
            img={photo2}
            title="Financial planning"
            text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <Box
            img={photo3}
            title="Market Analytics"
            text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </FlexWrapper>
      </Container>
    </StyledPlanning>
  );
};

const StyledPlanning = styled.section`
  padding-bottom: 150px;
`;
