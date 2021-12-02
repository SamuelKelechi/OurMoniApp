import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { TwitterOutlined, FacebookOutlined, GoogleOutlined } from '@ant-design/icons';


function SignUp() {
  const [toggle, setToggle] = useState(false);
  const [fullName, setsetFullName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setpassWord] = useState("");


  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <SignUpContainer>
      <SignUpWrapper>
        <LeftCard>
          <LogoHolder>Logo</LogoHolder>
          <LeftContentHolder>
            <AjHolder>Ajegunle Revenue Generation</AjHolder>
            <EstiHolder>Estimated Allocations</EstiHolder>
            <AmountHolder>Amount Resource Distributed</AmountHolder>
          </LeftContentHolder>
          <emptyContainer></emptyContainer>
        </LeftCard>

        <RightCard>
          {
            toggle ? <div>
              <RightContentHolder>
                <SingUpText>Sign-UP</SingUpText>
                <SignUpLogos>
                  <TwitterLogo><TwitterOutlined /></TwitterLogo>
                  <FacebookLogo><FacebookOutlined /></FacebookLogo>
                  <GoogleLogo><GoogleOutlined /></GoogleLogo>
                </SignUpLogos>
                <TextContain>or use your Email Account</TextContain>
                <InputContainer>
                  <input
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => {
                      setsetFullName(e.target.value)
                    }}


                  />
                  <input placeholder="Email" />
                  <input placeholder="Password" />
                </InputContainer>

                <Button type="primary">Sign-Up</Button>
                <TextContainer>
                  <DontContain>Already have an account?</DontContain>
                  <JoinContain onClick={handleToggle}>Login</JoinContain>
                </TextContainer>
              </RightContentHolder>

            </div> : <div>

              <RightContentHolder>
                <SingUpText>Log-In</SingUpText>
                <SignUpLogos>
                  <TwitterLogo><TwitterOutlined /></TwitterLogo>
                  <FacebookLogo><FacebookOutlined /></FacebookLogo>
                  <GoogleLogo><GoogleOutlined /></GoogleLogo>
                </SignUpLogos>
                <TextContain>or use your Email Account</TextContain>
                <InputContainer>
                  <input placeholder="Email" />
                  <input placeholder="Password" />
                  <ForgetText>Forget Password?</ForgetText>
                </InputContainer>

                <Button type="primary">Log-In</Button>
                <TextContainer>
                  <DontContain>Don't have an account?</DontContain>
                  <JoinContain onClick={handleToggle}>Sign Up</JoinContain>
                </TextContainer>
              </RightContentHolder>
            </div>
          }



        </RightCard>
      </SignUpWrapper>
    </SignUpContainer>
  )
}

export default SignUp


const ForgetText = styled.div`
text-align: right;
color: black;
font-size: 13px;
margin-top: -30px;
@media screen and (max-width: 1024px){
    margin-top: -10px;
  }
@media screen and (max-width: 780px){
    margin-top: -10px;
  }
@media screen and (max-width: 650px){
    margin-top: -15px;
  }
`

const SignUpContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;

`
const SignUpWrapper = styled.div`
width: 80vw;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
margin-top:90px;
@media screen and (max-width: 1400px){
  justify-content: center;
}
@media screen and (max-width: 650px){
  width: 95vw;
}
`
const LeftCard = styled.div`
width: 500px;
background-color: #212531;
height: 550px;
display: flex;
flex-direction: column;
align-items: center;
color: white;
border-radius:8px;
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.19);
margin: 10px;
@media screen and (max-width: 650px){
 height: 500px
}
`
const RightCard = styled.div`
width: 420px;
display: flex;
height: 550px;
justify-content:center;
align-items: center;

border-radius:8px;
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.19);
margin: 10px;
@media screen and (max-width: 1025px){
  align-items: flex-start
}
@media screen and (max-width: 1025px){
  height: 550px
 }
`
const LogoHolder = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 40px;
height: 100px;

width: 100px;
border-radius: 100%;
background-color: White;
color: black;
font-size: 25px;
font-weight:  bolder;
 
  @media screen and (max-width: 650px){
    height: 80px;
    width: 80px;
  }
  @media screen and (max-width: 350px){
    height: 70px;
    width: 70px;
  }

`
const LeftContentHolder = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin-top: 100px;
height: 200px;

@media screen and (max-width: 450px){
  margin-top: 80px;
}
`
const emptyContainer = styled.div``

const AjHolder = styled.div`
font-weight: bold;
font-size: 20px;
height: 29px;

border-bottom: 3px solid grey;
@media screen and (max-width: 350px){
  width: 100%;
  font-size: 16px;
}
`
const EstiHolder = styled.div`
font-weight: bold;
font-size: 20px;
height: 29px;
border-bottom: 3px solid grey;
@media screen and (max-width: 350px){
  width: 100%;
  font-size: 16px;
}
`
const AmountHolder = styled.div`
font-weight: bold;
font-size: 20px;
height: 29px;
border-bottom: 3px solid grey;
@media screen and (max-width: 350px){
  width: 100%;
  font-size: 16px;
}
`
const RightContentHolder = styled.div`
height: 550px;
width: 350px;
display: flex;
flex-direction: column;
align-items: center;

@media screen and (max-width: 650px){
  width: 95%;
}
  >button {
    width: 120px;
    height: 40px;
    border-radius: 8px;
  }

`
const SingUpText = styled.div`
font-weight: bolder;
font-size: 30px;
margin-top:25px;
@media screen and (max-width: 650px){
  font-size: 25px;
}
`
const SignUpLogos = styled.div`
display: flex;
width: 60%;
height: 80px;
justify-content: space-between;
align-items: center;

@media screen and (max-width: 650px){
  width: 60%;
}
`
const TwitterLogo = styled.div`
height: 60px;
width: 60px;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid grey;
cursor: pointer;
color: #1890FF;
font-size: 25px;

@media screen and (max-width: 650px){
  height: 50px;
  width: 50px;
  font-size: 18px;
}
`
const FacebookLogo = styled.div`
height: 60px;
width: 60px;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid grey;
cursor: pointer;
color: #4267B2;
font-size: 25px;

@media screen and (max-width: 650px){
  height: 50px;
  width: 50px;
  font-size: 18px;
}
`
const GoogleLogo = styled.div`
height: 60px;
width: 60px;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid grey;
cursor: pointer;
color:  #EA4436 ;
font-size: 25px;

@media screen and (max-width: 650px){
  height: 50px;
  width: 50px;
  font-size: 18px;
}
`
const TextContain = styled.div`
font-weight: bold;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 200px;
  width: 90%;


  @media screen and (max-width: 1025px){
    width: 100%;
    height: 250px;
    align-items: center;
  }
  @media screen and (max-width: 650px){
    width: 100%;
    height: 200px;
    align-items: center;
  }

  >input{
    height: 50px;
    border-radius: 8px;
    border: 1px solid darkgrey;
    padding-left: 20px;
    width: 100%;

    @media screen and (max-width: 650px){
      width: 90%;
      height: 40px;
    }
`
const TextContainer = styled.div`
display: flex;
height: 60px;

justify-content: space-between;
align-items: center;
width: 196px
`
const DontContain = styled.div`
`
const JoinContain = styled.div`
color: rgb(27,146,255);
cursor: pointer;
`