import styled from "styled-components";

export const Heading = styled.h1`
  color: #0070c1;
  font-family: "sans";
  font-size: 65px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export const Container = styled.div`
  display: flex; 
  width:100%;
  justify-content: center;
  align-items: center;
  background-color: rgb(247, 240, 240);
  @media (max-width: 768px) {
    display: block;
    padding: 80px 0px 0px 60px;
  }
`;