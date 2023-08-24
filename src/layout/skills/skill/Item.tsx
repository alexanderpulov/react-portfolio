import React from "react";
import styled from "styled-components";
import { Icon } from "../../../components/Icon";

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
      <Link href="">
        <span>See Works</span>
        <Icon iconId="arrow" width="16" height="16" viewBox="0 0 16 16" />
      </Link>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  width: 311px;
`;

const Title = styled.h3`
  font-weight: 600;
  color: #1f2937;
  font-size: 18px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  color: #6b7280;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 20px;
`;

const Link = styled.a`
  width: 90px;
  display: inline-block;
  display: flex;
  color: #3730a3;
  font-weight: 500;
  font-size: 12px;
  transition: margin 0.3s ease-in-out;

  span {
    margin-right: 5px;
  }

  &:hover {
    margin-left: 10px;
  }
`;
