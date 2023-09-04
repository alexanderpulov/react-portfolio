import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Careers = styled.section`
  padding-bottom: 150px;

  @media ${theme.media.mobile} {
    display: none;
  }
`;

const Table = styled.table`
  width: 100%;
`;

const Th = styled.th`
  font-weight: 500;
  color: #6b7280;
  font-size: 16px;
  text-transform: uppercase;
  text-align: left;
`;

const Tr = styled.tr``;

const Td = styled.td`
  font-size: 16px;
  color: #6b7280;
  padding-top: 80px;

  span {
    color: #1f2937;
    font-weight: 600;
  }
`;

export const S = {
  Careers,
  Table,
  Th,
  Tr,
  Td,
};
