import React from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { Container } from "../../components/Container";
import skillsPhoto from "../../assets/img/skills.webp";
import { Item } from "./skill/Item";
import { FlexWrapper } from "../../components/FlexWrapper";
import { S } from "./Skills_Styles";

export const Skills: React.FC = () => {
  const skillsData = [
    {
      title: "Web design",
      description:
        "Provide our customers with optimized user-friendly experience to increase the efficiency of digital products.",
    },
    {
      title: "Mobile design",
      description:
        "Mobile application development is a highlight that businesses are interested in at the moment and in the future.",
    },
    {
      title: "Branding",
      description:
        "Understanding the business and their target customers, I’m the bridges to bring the brand closer to their clients.",
    },
    {
      title: "3D Modeling",
      description:
        "Help you translate your existing design or concept into CAD or to work with you to develop the ideal design. 3D Models great for modern digital art",
    },
    {
      title: "Photography",
      description:
        "While stock photography is a great option for sourcing high-quality photos, it’s important that you choose your photos thoughtfully.",
    },
    {
      title: "Video creating",
      description:
        "Create high-impact social videos with our easy video maker. Use custom video templates to find the right story for your business.",
    },
  ];

  return (
    <S.Skills id="skills">
      <Container>
        <SectionTitle>
          From beginning ideas to individual integrity, rich identity from the
          line <S.TitleSpan>on the paper to final projects</S.TitleSpan>
        </SectionTitle>
        <FlexWrapper>
          <S.Photo>
            <img src={skillsPhoto} alt="" />
          </S.Photo>

          <S.Content>
            {skillsData.map((s, index) => {
              return <Item title={s.title} description={s.description} />;
            })}
          </S.Content>
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};
