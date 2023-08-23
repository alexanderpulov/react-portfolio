import styled from "styled-components";

type BtnPropsType = {
  color?: string;
  background?: string;
  display?: string;
  margin?: string;
};

export const Btn = styled.a<BtnPropsType>`
  color: ${(props) => props.color};
  padding: 10px 30px;
  background-color: ${(props) => props.background};
  border: #3730a3 1px solid;
  border-radius: 6px;
  transition: background-color 0.2s ease-in-out;
  display: ${(props) => props.display};
  margin: ${(props) => props.margin};
`;
