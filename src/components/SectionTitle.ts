import styled from "styled-components";
import { theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
  color: #1f2937;
  font-size: 48px;
  line-height: 1;
  text-align: center;
  font-weight: 600;
  max-width: 1040px;
  margin: 0 auto 150px;

  @media ${theme.media.mobile} {
    font-size: 38px;
  }
`;
