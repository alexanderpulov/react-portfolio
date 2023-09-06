import React from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { S } from "./Careers_Styles";
import { Container } from "../../components/Container";

export const Careers: React.FC = () => {
  const tableData = [
    {
      company: "Massa Fames",
      city: "New York",
      position: "Junior Front-End Developer",
      year: 2016,
    },
    {
      company: "Massa Fames",
      city: "New York",
      position: "Junior Front-End Developer",
      year: 2016,
    },
    {
      company: "Massa Fames",
      city: "New York",
      position: "Junior Front-End Developer",
      year: 2016,
    },
    {
      company: "Massa Fames",
      city: "New York",
      position: "Junior Front-End Developer",
      year: 2016,
    },
    {
      company: "Massa Fames",
      city: "New York",
      position: "Junior Front-End Developer",
      year: 2016,
    },
  ];

  return (
    <S.Careers>
      <Container>
        <SectionTitle>Careers</SectionTitle>
        <S.Table>
          <thead>
            <tr>
              <S.Th>COMPANY</S.Th>
              <S.Th>POSITION</S.Th>
              <S.Th>YEAR</S.Th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((t) => {
              return (
                <S.Tr>
                  <S.Td>
                    <span>{t.company}</span> / {t.city}
                  </S.Td>
                  <S.Td>{t.position}</S.Td>
                  <S.Td>{t.year}</S.Td>
                </S.Tr>
              );
            })}
          </tbody>
        </S.Table>
      </Container>
    </S.Careers>
  );
};