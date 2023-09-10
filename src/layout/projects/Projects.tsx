import React from "react";
import { Container } from "../../components/Container";
import { SectionTitle } from "../../components/SectionTitle";
import { Icon } from "../../components/Icon";
import { S } from "./Projects_Styles";
import { BtnProj } from "./project/BtnProj";
import { Fade } from "react-awesome-reveal";

export const Projects: React.FC = () => {
  return (
    <S.Projects id="projects">
      <Container>
        <Fade direction="up" duration={700}>
          <SectionTitle>
            It’s great to always give the customer the best feed.
          </SectionTitle>
        </Fade>

        <S.Box>
          <S.BoxItem>
            <BtnProj>
              <div>
                <h3>Project title here</h3>
                <span>Photograph</span>
              </div>
              <Icon
                iconId="arrow-black"
                width="30"
                height="30"
                viewBox="0 0 15 15"
              />
            </BtnProj>
          </S.BoxItem>
          <S.BoxItem>
            <BtnProj>
              <div>
                <h3>Project title here</h3>
                <span>Photograph</span>
              </div>
              <Icon
                iconId="arrow-black"
                width="30"
                height="30"
                viewBox="0 0 15 15"
              />
            </BtnProj>
          </S.BoxItem>
          <S.BoxItem>
            <BtnProj>
              <div>
                <h3>Project title here</h3>
                <span>Photograph</span>
              </div>
              <Icon
                iconId="arrow-black"
                width="30"
                height="30"
                viewBox="0 0 15 15"
              />
            </BtnProj>
          </S.BoxItem>
          <S.BoxItem>
            <BtnProj>
              <div>
                <h3>Project title here</h3>
                <span>Photograph</span>
              </div>
              <Icon
                iconId="arrow-black"
                width="30"
                height="30"
                viewBox="0 0 15 15"
              />
            </BtnProj>
          </S.BoxItem>
        </S.Box>
      </Container>
    </S.Projects>
  );
};
