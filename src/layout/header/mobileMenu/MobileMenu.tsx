import React from "react";
import styled, { css } from "styled-components";
import { Btn } from "../../../components/Btn";
import { theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const MobileMenu = () => {
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={false}>
        <span></span>
      </BurgerButton>

      <MobileMenuPopup isOpen={false}>
        <FlexWrapper direction="column">
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
          <Btn color="#fff" href="">
            Hire me
          </Btn>
        </FlexWrapper>
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  display: flex;
  align-items: center;
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(31, 31, 32, 0.9);
  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding-top: 250px;
    `}

  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;

    li {
      a {
        font-size: 24px;
        font-weight: 500;

        color: #fff;
      }
    }
  }

  ${Btn} {
    display: block;

    border-color: #fff;
    font-size: 24px;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 22px;
  right: 22px;
  width: 100px;
  height: 100px;
  z-index: 2;
  background-color: transparent;
  border: none;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: #000;

    position: absolute;
    left: 40px;
    bottom: 50px;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: #000;

      position: absolute;
      transform: translateY(-10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
          background-color: #fff;
          width: 36px;
        `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: #000;

      position: absolute;
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          background-color: #fff;
          width: 36px;
        `}
    }
  }
`;
