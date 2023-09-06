import React from "react";
import { Btn } from "../../../components/Btn";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./MobileMenu_Styles";

export const MobileMenu: React.FC = () => {
  const [burgerIsOpened, setBurgerIsOpened] = React.useState(false);

  return (
    <S.MobileMenu>
      <S.BurgerButton
        onClick={() => setBurgerIsOpened(!burgerIsOpened)}
        isOpen={burgerIsOpened}
      >
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup isOpen={burgerIsOpened}>
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
