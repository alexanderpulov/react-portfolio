import React from "react";
import photo from "../../assets/img/logo.png";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between">
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
                <a href="">Hire me</a>
              </li>
            </ul>
          </Menu>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 40px 0;
`;

const Img = styled.img`
  width: 60px;
`;

const Menu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    list-style: none;

    li {
      a {
        color: #6b7280;
        text-decoration: none;
        font-size: 18px;
      }
    }
  }
`;
