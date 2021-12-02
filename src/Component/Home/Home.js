import React from 'react'
import styled from "styled-components"
import Content1 from './Content1/Content1'
import CounterCom from './CounterCom/CounterCom'
import HomeEsther from './EstherHome/HomeEsther'
import Hero from './Hero/Hero'

function Home() {
  return (
    <Container>
      <Hero />
      <Content1 />
      <HomeEsther />
      <CounterCom />


    </Container>
  )
}

export default Home

const Container = styled.div`
display: flex;
flex-direction: column;
height: auto;

`
