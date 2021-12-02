import React from 'react'
import styled from "styled-components"



function CounterCom() {
  return (
    <Container>
      <Title>
        Impact Analysis
      </Title>

      <Counter>
        <Counter1>
          <ConNum>
            56
          </ConNum>
          <ConCon>
            Ajengule Community Center
          </ConCon>

        </Counter1>
        <Counter2>
          <ConNum>
            56
          </ConNum>
          <ConCon>
            Estimated Budget Allocation
          </ConCon>

        </Counter2>
        <Counter3>
          <ConNum>
            56
          </ConNum>
          <ConCon>
            Ajengule Income And Revenue
          </ConCon>

        </Counter3>

      </Counter>
    </Container>
  )
}

export default CounterCom


const ConCon = styled.div`
font-size:20px ;
text-align: center;


@media screen and (max-width:320px){
font-size:14px ;
text-align: center;
}


`

const ConNum = styled.div`
font-weight: 800px;
font-size: 20px;
text-align: center;

@media screen and (max-width:320px){
font-size:20px ;
}
`

const Counter1 = styled.div`
/* width: 300px; */

color: white;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
`

const Counter2 = styled.div`
/* width: 300px; */

color: white;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;

`

const Counter3 = styled.div`
/* width: 300px; */

color: white;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;

`

const Title = styled.div`
color: white;
width: 1080px;
justify-content: center;
display: flex;
align-items: center;
font-weight: bold;
margin-bottom: 20px;

@media screen and (max-width:768px){
width: 750px;
justify-content: center;
display: flex;
align-items: center;

}

@media screen and (max-width:425px){
width: 415px;
justify-content: center;
display: flex;
align-items: center;

}

@media screen and (max-width:375px){
width: 350px;
justify-content: center;
display: flex;
align-items: center;

}

@media screen and (max-width:320px){
width: 310px;
justify-content: center;
display: flex;
align-items: center;
}
`

const Counter = styled.div`
display: grid;

width: 100%;
display:flex;
justify-content: space-between;
padding:20px;




@media screen and (max-width:320px){
width: 310px;
}



`

const Container = styled.div`
height: 250px;
background-color: #212531;
margin-top: 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 50px;

`
