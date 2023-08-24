import React from "react";
import photo from "../../assets/img/logo.png";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Btn } from "../../components/Btn";

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
              <li>
                <Btn background="fff" color="#3730A3" href="">
                  Hire me
                </Btn>
              </li>
            </ul>
          </Menu>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 30px 0;
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

const Img = styled.img`
  width: 60px;
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    gap: 80px;

    li {
      a {
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
`;
