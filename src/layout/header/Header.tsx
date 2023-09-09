import React from "react";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Btn } from "../../components/Btn";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import { S } from "./Header_Styles";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

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

export const Header: React.FC = () => {
  return (
    <S.Header>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <a
            onClick={() => {
              scroll.scrollToTop();
            }}
          >
            <S.LogoBg>
              <S.LogoText>AP</S.LogoText>
            </S.LogoBg>
          </a>

          <S.Menu>
            {items.map((i) => (
              <ul>
                <li>
                  <Link to={i.href} smooth={true} offset={-60}>
                    {i.title}
                  </Link>
                </li>
              </ul>
            ))}

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
