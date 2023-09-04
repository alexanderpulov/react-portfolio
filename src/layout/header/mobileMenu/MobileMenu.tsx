import React from "react";
import { Btn } from "../../../components/Btn";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./MobileMenu_Styles";

export const MobileMenu: React.FC = () => {
  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={false}>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup isOpen={false}>
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
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
