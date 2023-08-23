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
            <Img src={photo} alt="" />
          </a>

          <Menu>
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Skills</a>
              </li>
              <li>
                <a href="">Projects</a>
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
