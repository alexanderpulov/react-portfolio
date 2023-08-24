import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../components/SectionTitle";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";

export const Careers = () => {
  return (
    <StyledCareers>
      <Container>
        <SectionTitle>Careers</SectionTitle>
        <Table>
          <thead>
            <tr>
              <Th>COMPANY</Th>
              <Th>POSITION</Th>
              <Th>YEAR</Th>
            </tr>
          </thead>
          <tbody>
            <Tr>
              <Td>
                <span>Massa Fames</span> / New York
              </Td>
              <Td>Junior Front-End Developer</Td>
              <Td>2016</Td>
            </Tr>
            <Tr>
              <Td>
                <span>Massa Fames</span> / New York
              </Td>
              <Td>Junior Front-End Developer</Td>
              <Td>2016</Td>
            </Tr>
            <Tr>
              <Td>
                <span>Massa Fames</span> / New York
              </Td>
              <Td>Junior Front-End Developer</Td>
              <Td>2016</Td>
            </Tr>
            <Tr>
              <Td>
                <span>Massa Fames</span> / New York
              </Td>
              <Td>Junior Front-End Developer</Td>
              <Td>2016</Td>
            </Tr>
            <Tr>
              <Td>
                <span>Massa Fames</span> / New York
              </Td>
              <Td>Junior Front-End Developer</Td>
              <Td>2016</Td>
            </Tr>
          </tbody>
        </Table>
      </Container>
    </StyledCareers>
  );
};

const StyledCareers = styled.section`
  padding-bottom: 100px;
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
