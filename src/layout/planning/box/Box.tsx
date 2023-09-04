import React from "react";
import { S } from "../Planning_Styles";

type BoxPropsType = {
  img?: string;
  title?: string;
  text?: string;
};

export const Box: React.FC<BoxPropsType> = (props: BoxPropsType) => {
  return (
    <S.Box>
      <S.Img src={props.img} alt="" />
      <S.Title>{props.title}</S.Title>
      <S.Text>{props.text}</S.Text>
    </S.Box>
  );
};
