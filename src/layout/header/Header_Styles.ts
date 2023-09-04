import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";

const Header = styled.header`
  padding: 40px 0;
  position: sticky;
  top: 0;
  z-index: 999;
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

export const S = {
  Header,
  LogoBg,
  LogoText,
  Menu,
};
