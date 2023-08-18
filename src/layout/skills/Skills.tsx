import React from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { Container } from "../../components/Container";
import styled from "styled-components";
import skillsPhoto from "../../assets/img/skills.webp";
import { SkillsItem } from "../../components/SkillsItem";

export const Skills = () => {
  return (
    <Container>
      <StyledSkills>
        <SectionTitle>
          From beginning ideas to individual integrity, rich identity from the
          line <TitleSpan>on the paper to final projects</TitleSpan>
        </SectionTitle>

        <SkillsBox>
          <PhotoWrapper>
            <img src={skillsPhoto} alt="" />
          </PhotoWrapper>

          <SkillsItemWrapper>
            <SkillsItem
              title="Web design"
              description="Provide our customers with optimized user-friendly experience to increase the efficiency of digital products."
            />
            <SkillsItem
              title="Mobile design"
              description="Mobile application development is a highlight that businesses are interested in at the moment and in the future."
            />
            <SkillsItem
              title="Branding"
              description="Understanding the business and their target customers, I’m the bridges to bring the brand closer to their clients."
            />
            <SkillsItem
              title="3D Modeling"
              description="Help you translate your existing design or concept into CAD or to work with you to develop the ideal design. 3D Models great for modern digital art"
            />
            <SkillsItem
              title="Photography"
              description="While stock photography is a great option for sourcing high-quality photos, it’s important that you choose your photos thoughtfully."
            />
            <SkillsItem
              title="Video creating"
              description="Create high-impact social videos with our easy video maker. Use custom video templates to find the right story for your business."
            />
          </SkillsItemWrapper>
        </SkillsBox>
      </StyledSkills>
    </Container>
  );
};

const StyledSkills = styled.div`
  padding: 50px 0 150px;
`;

const TitleSpan = styled.span`
  color: #3730a3;
`;

const SkillsBox = styled.div`
  display: flex;
`;

const SkillsItemWrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
`;

const PhotoWrapper = styled.div`
  max-width: 440px;
  max-height: 622px;
`;
