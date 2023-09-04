import styled from "styled-components";

const Item = styled.div`
  max-width: 300px;
  margin: 0 30px 0 0;

  @media screen and (max-width: 1190px) {
    margin: 0 30px 60px 0;
  }
`;

const Title = styled.h3`
  font-weight: 600;
  color: #1f2937;
  font-size: 18px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  color: #6b7280;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 20px;
`;

const Link = styled.a`
  width: 90px;
  display: inline-block;
  display: flex;
  color: #3730a3;
  font-weight: 500;
  font-size: 12px;
  transition: margin 0.3s ease-in-out;

  span {
    margin-right: 5px;
  }

  &:hover {
    margin-left: 10px;
  }
`;

export const S = {
  Item,
  Title,
  Text,
  Link,
};
