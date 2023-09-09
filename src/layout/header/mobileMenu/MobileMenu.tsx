import React from "react";
import { Btn } from "../../../components/Btn";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./MobileMenu_Styles";
import { Link } from "react-scroll";

const items = [
  {
    title: "About",
    href: "about",
  },
  {
    title: "Skills",
    href: "skills",
  },
  {
    title: "Projects",
    href: "projects",
  },
];

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
          {items.map((i) => (
            <ul>
              <li>
                <Link to={i.href} smooth={true} offset={-60}>
                  {i.title}
                </Link>
              </li>
            </ul>
          ))}
          <Btn color="#fff" href="">
            Hire me
          </Btn>
        </FlexWrapper>
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
