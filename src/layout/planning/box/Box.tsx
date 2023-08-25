import React from "react";
import styled from "styled-components";

type BoxPropsType = {
  img?: string;
  title?: string;
  text?: string;
};

export const Box = (props: BoxPropsType) => {
  return (
    <StyledBox>
      <Img src={props.img} alt="" />
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
    </StyledBox>
  );
};

const StyledBox = styled.div`
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
