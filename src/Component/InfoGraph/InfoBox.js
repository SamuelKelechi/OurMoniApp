import React from "react";
import styled from "styled-components";
const InfoBox = () => {
  return (
    <Container>
      <ContainerBox>
        <ContainerText1>Infographics</ContainerText1>
        <ContainerText2>
          The Pictorial Representation of Information
        </ContainerText2>
      </ContainerBox>
      <ContainerText3>Most Recent Updates</ContainerText3>
    </Container>
  );
};

export default InfoBox;

const ContainerText3 = styled.div`
  font-weight: bold;
  font-size: 15px;

  margin: 10px;
  margin-top: 30px;
  color: silver;
`;

const ContainerText2 = styled.div`
  font-weight: bold;
  font-size: 25px;

  @media screen and (max-width: 600px) {
    font-size: 15px;
    margin-top: 5px;
  }
`;
const ContainerText1 = styled.div`
  /* font-weight: bold; */
  font-size: 20px;

  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  flex-direction: column;
`;
const ContainerBox = styled.div`
  height: 200px;
  width: 100%;
  background: #212531;
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  flex-direction: column;
`;
