import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <Container>
      <Wrapper>
        <Cardcontainer>
          <Picture>
            <img src="/images/3.jpg" />
            <a>
              <img src="/images/2.jpg" />
            </a>
          </Picture>
          <Writeup>
            <span>Head</span>
            <p>
              The rate of poverty in nigeria has increased sporadically due to
              the effect of the covid 19 in the country. The rate of poverty in
              nigeria has increased sporadically .
            </p>
          </Writeup>
        </Cardcontainer>
        <Cardcontainer>
          <Picture>
            <img src="/images/1.jpg" />
            <a>
              <img src="/images/7.jpg" />
            </a>
          </Picture>
          <Writeup>
            <span>Head</span>
            <p>
              The rate of poverty in nigeria has increased sporadically due to
              the effect of the covid 19 in the country. The rate of poverty in
              nigeria has increased sporadically .
            </p>
          </Writeup>
        </Cardcontainer>
        <Cardcontainer>
          <Picture>
            <img src="/images/6.jpg" />
            <a>
              <img src="/images/5.jpg" />
            </a>
          </Picture>
          <Writeup>
            <span>Head</span>
            <p>
              The rate of poverty in nigeria has increased sporadically due to
              the effect of the covid 19 in the country. The rate of poverty in
              nigeria has increased sporadically .
            </p>
          </Writeup>
        </Cardcontainer>
        <Cardcontainer>
          <Picture>
            <img src="/images/4.jpg" />
            <a>
              <img src="/images/6.jpg" />
            </a>
          </Picture>
          <Writeup>
            <span>Head</span>
            <p>
              The rate of poverty in nigeria has increased sporadically due to
              the effect of the covid 19 in the country. The rate of poverty in
              nigeria has increased sporadically .
            </p>
          </Writeup>
        </Cardcontainer>
      </Wrapper>
    </Container>
  );
};

export default Card;

const Wrapper = styled.div`
  display: flex;

  @media screen and (max-width: 600px) {
    width: 100%;
    overflow-x: scroll;
    margin-top: 20px;
  }
`;
const Image = styled.img``;
const Writeup = styled.div`
  // display: flex;
  margin-left: 5px;
  margin-top: 13px;
  padding: 5px;
  span {
    font-size: 15px;
  }
  p {
    font-size: 13px;
    text-align: left;
  }
`;
const Picture = styled.div`
  position: relative;
  height: 240px;
  width: 285px;
  object-fit: contain;

  a {
    img {
      position: absolute;
      // object-fit: contain;
      height: 240px;
  width: 285px;
      left: 0;
      top: 0;
      // z-index: -1;
      opacity: 0;
      border-radius: 5px 5px 0 0;
    }
  }
  img {
    height: 240px;
  width: 285px;
    border-radius: 5px 5px 0 0;
    opacity: 1;
  }

  &:hover {
    cursor: pointer;

    img {
      opacity: 0;
    }

    a {
      img {
        opacity: 1;
      }
    }
  }

  @media screen and (max-width: 600px) {
    position: relative;
  height: 225px;
  width: 240px;
  object-fit: contain;
 
  a {
    img {
      position: absolute;
      // object-fit: contain;
      height: 225px;
  width: 240px;
      left: 0;
      top: 0;
      // z-index: -1;
      opacity: 0;
      border-radius: 5px 5px 0 0;
    }
  }
  img {
    height: 225px;
  width: 240px;
    border-radius: 5px 5px 0 0;
    opacity: 1;
   
  }

  &:hover {
    cursor: pointer;

    img {
      opacity: 0;
    }

    a {
      img {
        opacity: 1;
      }
    }
  }

  }
`;
const Cardcontainer = styled.div`
  height: 400px;
  width: 285px;
  // background-color: blue;
  border-radius: 5px;
  // margin: 20px;
  border: 1px solid lightgrey;
  margin: 10px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.19);

  @media screen and (max-width: 600px) {
    box-shadow: none;
    width: 240px;

  }
`;
const Container = styled.div`
  // height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  // justify-content: space-around;
  @media screen and (max-width: 600px) {
    justify-content: center;
    align-items: center;
  }
`;
