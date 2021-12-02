import React from 'react'
import styled from "styled-components"
import AllBlog from './AllBlog/AllBlog'
import Blogpost from './StoriesUpdate/Blogpost'
import Story from "./StoriesUpdate/Story"
import HomeEsther from "../Home/EstherHome/HomeEsther"

function Blog() {
  return (
    <Container>
      <Story />
      <Blogpost title="Blog Post" bg="#212531" txtcolor="white" />
      <AllBlog />
      <Blogpost title="Other Stories" bg="white" txtcolor="black" />
      <HomeEsther />



    </Container>
  )
}

export default Blog



const Container = styled.div`
display: flex;
height: auto;
padding-top: 25px;
flex: 1;
flex-direction: column;
`


