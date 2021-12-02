import React from 'react'
import styled from "styled-components"
import pix from "../img/7.jpg"

function Story() {
  return (
    <Container>
      <ImgCon>
        <img src={pix} />
      </ImgCon>
      <TextCon>
        <h1>Stories/Updates</h1>
        <p>is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose</p>

      </TextCon>


    </Container>
  )
}

export default Story

const Container = styled.div`
margin-top: 60px;

height: auto;
width:100% ;
display: flex;
flex-wrap: wrap;
padding-left: 30px;

@media screen and (max-width:600px){

padding-left: 0px;
padding: 5px;
justify-content: center;
display: flex;
}


`

const ImgCon = styled.div`

width: 600px;
background-color: pink;
height: 380px;

img{
  width: 600px;
  height: 380px;
object-fit:cover;
}


@media screen and (max-width:600px){

width: 300px;
background-color: pink;
height: 380px;

img{
  width: 300px;
  height: 380px;
object-fit:cover;
}

}

`


const TextCon = styled.div`
width: 600px;
height: 380px;
display: flex;
flex-direction: column;
justify-content: center;
padding-left: 15px;

@media screen and (max-width:600px){
  text-align: center;
  padding-left: 0px;
}


`