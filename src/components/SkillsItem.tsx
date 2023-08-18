import React from "react";
import styled from "styled-components";

type SkillsItemPropsType = {
  title: string;
  description: string;
  href?: string;
};

export const SkillsItem = (props: SkillsItemPropsType) => {
  return (
    <StyledSkillsItem>
      <SkillsTitle>{props.title}</SkillsTitle>
      <SkillsText>{props.description}</SkillsText>
      <a href="">See Works</a>
    </StyledSkillsItem>
  );
};

const StyledSkillsItem = styled.div`
  width: 311px;
`;

const SkillsTitle = styled.h3``;

const SkillsText = styled.p``;
