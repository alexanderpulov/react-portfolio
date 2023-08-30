import styled from "styled-components";
import { theme } from "../styles/Theme";

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
  font-weight: 500;
  display: ${(props) => props.display};
  margin: ${(props) => props.margin};
  transition: all 0.15s ease-in-out;

  &:hover {
    transform: scale(1.04);
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`;
