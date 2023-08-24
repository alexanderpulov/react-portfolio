import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import photo1 from "../../assets/img/planning/planning-1.png";
import photo2 from "../../assets/img/planning/planning-2.png";
import photo3 from "../../assets/img/planning/planning-3.png";

export const Planning = () => {
  return (
    <StyledPlanning>
      <Container>
        <FlexWrapper justify="space-between">
          <Box>
            <Img src={photo1} alt="" />
            <Title>Business planning</Title>
            <Text>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </Text>
          </Box>
          <Box>
            <Img src={photo2} alt="" />
            <Title>Business planning</Title>
            <Text>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </Text>
          </Box>
          <Box>
            <Img src={photo3} alt="" />
            <Title>Business planning</Title>
            <Text>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </Text>
          </Box>
        </FlexWrapper>
      </Container>
    </StyledPlanning>
  );
};

const StyledPlanning = styled.section`
  padding-bottom: 150px;
`;

const Box = styled.div`
  max-width: 360px;
  text-align: center;
`;

const Img = styled.img`
  margin-bottom: 40px;
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: #374151;
  margin-bottom: 20px;
`;

const Text = styled.p`
  color: #9ca3af;
  font-size: 18px;
  line-height: 28px;
`;
