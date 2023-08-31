import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

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
  margin: 0 20px 60px;
`;

const Img = styled.img`
  margin-bottom: 40px;
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 30px;
  color: #374151;
  margin-bottom: 20px;

  @media ${theme.media.mobile} {
    font-size: 26px;
  }
`;

const Text = styled.p`
  color: #9ca3af;
  font-size: 18px;
  line-height: 28px;
`;
