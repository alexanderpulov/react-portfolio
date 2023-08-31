import React from "react";
import photo from "../../assets/img/logo.png";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Btn } from "../../components/Btn";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import { theme } from "../../styles/Theme";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <a href="">
            <LogoBg>
              <LogoText>
                {/* <Img src={photo} alt="" /> */}
                AP
              </LogoText>
            </LogoBg>
          </a>

          <Menu>
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
          </Menu>
          <MobileMenu></MobileMenu>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 40px 0;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.9);

  ${FlexWrapper} {
    position: relative;
  }
`;

const LogoBg = styled.div`
  position: relative;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background-color: #eeebff;
`;

const LogoText = styled.span`
  position: absolute;
  top: 16px;
  left: 15px;
  font-weight: 600;
  font-size: 24px;
  color: #7b61ff;
  transform: rotate(30deg);
  user-select: none;
`;

// const Img = styled.img`
//   width: 60px;
// `;

const Menu = styled.nav`
  display: flex;
  align-items: center;

  @media ${theme.media.tablet} {
    display: none;
  }

  ul {
    display: flex;

    @media ${theme.media.tablet} {
      display: none;
    }

    li {
      margin-right: 80px;

      a {
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
`;
