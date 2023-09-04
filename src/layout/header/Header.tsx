import React from "react";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Btn } from "../../components/Btn";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import { S } from "./Header_Styles";

export const Header: React.FC = () => {
  return (
    <S.Header>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <a href="">
            <S.LogoBg>
              <S.LogoText>AP</S.LogoText>
            </S.LogoBg>
          </a>

          <S.Menu>
            <ul>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Works</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
            <Btn background="fff" color="#3730A3" href="">
              Hire me
            </Btn>
          </S.Menu>
          <MobileMenu></MobileMenu>
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
