import React from 'react'
import styled from "styled-components"
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'antd'

function Hero() {
  return (
    <Container>
      <>
        <Carousel fade prevLabel="" nextLabel="">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/slide1.jpg"
              alt="First slide"


              style={{
                height: "400px",
                objectFit: "cover"
              }}

            />
            <Carousel.Caption>
              <SliderBar>

                <Text1>
                Where This Money Dae Go Self?
                </Text1>
               <Text2>
               You na dae wonder wetin your commounity leader dae use your money do?
               </Text2>
              <Text3>
              <Button>
                    If You won know Click here
                    
                  </Button>

              </Text3>
              


              </SliderBar>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/slider2.jpg"
              alt="Second slide"

              style={{
                height: "400px",
                objectFit: "cover"
              }}

            />

            <Carousel.Caption>
            <SliderBar>

<Text1>
We Are The AuditingApp
</Text1>
<Text2>
Accountability Is Essential, Its Your Right To know
</Text2>
<Text3>
<Button>
If You won know Click here
    
  </Button>

</Text3>



</SliderBar>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/slider3.jpg"
              alt="Third slide"

              style={{
                height: "400px",
                objectFit: "cover"
              }}

            />

            <Carousel.Caption>
            <SliderBar>

<Text1>
  Don't Be Left out, Be Inform.
</Text1>
<Text2>
know What's Happening In Your commounity. E Get Why.
</Text2>
<Text3>
<Button>
    If You won know Click here
    
  </Button>

</Text3>



</SliderBar>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    </Container>
  )
}

export default Hero

const Text1 = styled.div`
font-size: 40px;
font-weight: bold;


@media screen and (max-width:600px){
  font-size: 30px;
font-weight: bold;
line-height: 40px;
}


`
const Text2 = styled.div`
font-size: 20px;
margin-top: -20px;

@media screen and (max-width:600px){
font-size: 15px;
font-weight: bold;
text-align: center;
margin-top: 10px;
margin-bottom: 10px ;
}


`
const Text3 = styled.div`



@media screen and (max-width:425px){
display: flex;
justify-content: center;
align-items: center;
margin-left: 45px;
margin-top: 30px;
}

@media screen and (max-width:375px){
display: flex;
justify-content: center;
align-items: center;
margin-left: 25px;
margin-top: 30px;
}

@media screen and (max-width:320px){
display: flex;
justify-content: center;
align-items: center;
margin-left: 15px;
margin-top: 30px;
}
`



const SliderBar = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 140px;
justify-content:space-between;
align-items: flex-start;
margin-top: -250px;
margin-left: -70px;


@media screen and (max-width:600px){
  margin-top: -300px;
  margin-left: 0px;
}




`

const Container = styled.div`

height: 400px;
background-color: #212531;
margin-top: 70px;
z-index: 800;



@media screen and (max-width:320px){
width: 320px;
}





`

