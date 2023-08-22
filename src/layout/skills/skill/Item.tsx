import React from "react";
import styled from "styled-components";

type ItemPropsType = {
  title: string;
  description: string;
  href?: string;
};

export const Item = (props: ItemPropsType) => {
  return (
    <StyledItem>
      <Title>{props.title}</Title>
      <Text>{props.description}</Text>
      <a href="">See Works</a>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  width: 311px;
`;

const Title = styled.h3``;

const Text = styled.p``;
