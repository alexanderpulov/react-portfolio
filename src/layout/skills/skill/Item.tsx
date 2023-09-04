import React from "react";
import { Icon } from "../../../components/Icon";
import { S } from "./Item_Styles";

type ItemPropsType = {
  title: string;
  description: string;
  href?: string;
};

export const Item: React.FC<ItemPropsType> = (props: ItemPropsType) => {
  return (
    <S.Item>
      <S.Title>{props.title}</S.Title>
      <S.Text>{props.description}</S.Text>
      <S.Link href="">
        <span>See Works</span>
        <Icon iconId="arrow" width="16" height="16" viewBox="0 0 16 16" />
      </S.Link>
    </S.Item>
  );
};
