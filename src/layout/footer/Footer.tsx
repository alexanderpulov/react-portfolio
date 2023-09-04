import React from "react";
import { Container } from "../../components/Container";
import { Icon } from "../../components/Icon";
import { S } from "./Footer_Styles";

export const Footer: React.FC = () => {
  const socialData = [
    {
      iconId: "twitter",
    },
    {
      iconId: "dribbble",
    },
    {
      iconId: "facebook",
    },
    {
      iconId: "codepen",
    },
    {
      iconId: "mail",
    },
    {
      iconId: "instagram",
    },
  ];

  return (
    <S.Footer>
      <Container>
        <S.Title>Contact with me</S.Title>

        <p>
          I’m not currently taking on new client work but feel free to contact
          me for any other inquiries.
        </p>
        <S.Social>
          {socialData.map((i) => {
            return (
              <a href="">
                <Icon iconId={i.iconId} />
              </a>
            );
          })}
        </S.Social>
      </Container>
    </S.Footer>
  );
};
