import styled from "styled-components";

export const BtnProj = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 40px;
  left: 50%;
  margin-left: -248px;
  min-width: 496px;
  height: 95px;
  background-color: #fff;
  z-index: 1;
  cursor: pointer;
  padding: 23px 27px;
  opacity: 0;
  transition: all 0.3s linear;

  h3 {
    font-weight: 500;
    color: #1f2937;
    font-size: 18px;
    line-height: 28px;
  }

  span {
    font-weight: 500;
    font-size: 14px;
    color: #9ca3af;
  }
`;
