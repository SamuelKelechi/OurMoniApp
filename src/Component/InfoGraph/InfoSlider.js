import React from "react";
import styled from "styled-components";
import pic from "../InfoGraph/image/3.jpg";

function InfoSlider() {
  return (
    <Container>
      <Hero src={pic} />
    </Container>
  );
}

export default InfoSlider;

const Hero = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Container = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  background: rgba(0%, 0%, 0%, 0.2);
`;
