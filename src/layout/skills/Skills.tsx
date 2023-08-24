import React from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { Container } from "../../components/Container";
import styled from "styled-components";
import skillsPhoto from "../../assets/img/skills.webp";
import { Item } from "./skill/Item";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>
          From beginning ideas to individual integrity, rich identity from the
          line <TitleSpan>on the paper to final projects</TitleSpan>
        </SectionTitle>
        <FlexWrapper>
          <Photo>
            <img src={skillsPhoto} alt="" />
          </Photo>

          <Content>
            <Item
              title="Web design"
              description="Provide our customers with optimized user-friendly experience to increase the efficiency of digital products."
            />
            <Item
              title="Mobile design"
              description="Mobile application development is a highlight that businesses are interested in at the moment and in the future."
            />
            <Item
              title="Branding"
              description="Understanding the business and their target customers, I’m the bridges to bring the brand closer to their clients."
            />
            <Item
              title="3D Modeling"
              description="Help you translate your existing design or concept into CAD or to work with you to develop the ideal design. 3D Models great for modern digital art"
            />
            <Item
              title="Photography"
              description="While stock photography is a great option for sourcing high-quality photos, it’s important that you choose your photos thoughtfully."
            />
            <Item
              title="Video creating"
              description="Create high-impact social videos with our easy video maker. Use custom video templates to find the right story for your business."
            />
          </Content>
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  padding: 66px 0 100px;
`;

const TitleSpan = styled.span`
  color: #3730a3;
`;

const Photo = styled.div`
  max-width: 440px;
  max-height: 622px;
  margin-right: 50px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-wrap: wrap;
`;
