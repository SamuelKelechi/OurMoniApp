import React from 'react'
import { Button } from 'antd'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { TwitterOutlined, FacebookOutlined, GoogleOutlined } from '@ant-design/icons';


function Login() {
  return (
    <LoginMainContainer>
      <LoginMainWrapper>
        <LogingHolder>
          <LogoHolder>LOGO</LogoHolder>
          <AllocateHolder>
            Estimated Allocations
            <AlloBorder></AlloBorder>
          </AllocateHolder>
          <SignText>Sign-In</SignText>
          <SignInLogos>
            <TwitterLogo><TwitterOutlined /></TwitterLogo>
            <FacebookLogo><FacebookOutlined /></FacebookLogo>
            <GoogleLogo><GoogleOutlined /></GoogleLogo>
          </SignInLogos>
          <TextContain>or use your Email Account</TextContain>
          <InputContainer>
            <input placeholder="Email" />
            <input placeholder="Password" />
            <ForgetText>Forget Password?</ForgetText>
          </InputContainer>
          <Button type="primary">Sign-In</Button>
          <TextContainer>
            <DontContain>Don't have an account?</DontContain>
            <Link to="/signup"><JoinContain>Join now</JoinContain></Link>
          </TextContainer>
          <ReveContentHolder>
            <AjeHolder>
              Ajegunle Revenue Generation
              <MargHolder1></MargHolder1>
            </AjeHolder>
            <AmouHolder>
              Amount Resource Distributed
              <MargHolder2></MargHolder2>
            </AmouHolder>
          </ReveContentHolder>
        </LogingHolder>
      </LoginMainWrapper>
    </LoginMainContainer>
  )
}

export default Login


const LoginMainContainer = styled.div`
display: flex;
justify-content: center;
width: 100vw;
height: 100vh;
`
const LoginMainWrapper = styled.div`
height: 100%;
width: 500px;
background: linear-gradient(to bottom right, #212531 180px, whitesmoke 20%, #212531 400px);
display: flex;
opacity: 0.9;
justify-content: center;
`
const LogingHolder = styled.div`
height: 100%;
width: 95%;
display: flex;
align-items: center;
flex-direction: column;
>button {
    width: 120px;
    height: 40px;
    border-radius: 8px;

    @media screen and (max-width: 380px){
        width: 110px;
        height: 35px;
      }
  }
`
const LogoHolder = styled.div`
height: 70px;
width: 70px;
border-radius: 100%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
font-weight: bolder;
`

const AllocateHolder = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
font-weight: bold;
flex-direction: column;
margin-top: 5px;
color: white;
`
const AlloBorder = styled.div`
width: 90px;
border-bottom: 3px solid lightgrey;
display: flex;
margin-left: 52px;
`
const SignText = styled.div`
margin-top: 80px;
font-weight: bolder;
font-size: 20px;
color: white;

@media screen and (max-width: 1024px){
    margin-top: 10px
 }
 @media screen and (max-width: 780px){
    margin-top: 10px;
    color: black;
 }
 @media screen and (max-width: 350px){
    font-size: 17px;
}
`
const SignInLogos = styled.div`
display: flex;
width: 50%;
height: 65px;
margin-top: 8px;
justify-content: space-between;
align-items: center;
@media screen and (max-width: 650px){
  width: 60%;
}
@media screen and (max-width: 350px){
    height: 50px;
  }
`
const TwitterLogo = styled.div`
height: 60px;
width: 60px;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
border: 1px solid grey;
cursor: pointer;
color: #1890FF;
font-size: 25px;

@media screen and (max-width: 650px){
  height: 50px;
  width: 50px;
  font-size: 18px;
}
@media screen and (max-width: 350px){
    height: 40px;
    width: 40px;
  }
`
const FacebookLogo = styled.div`
height: 60px;
width: 60px;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
border: 1px solid grey;
cursor: pointer;
color: #4267B2;
font-size: 25px;

@media screen and (max-width: 650px){
  height: 50px;
  width: 50px;
  font-size: 18px;
    }
@media screen and (max-width: 350px){
    height: 40px;
    width: 40px;
  }
`
const GoogleLogo = styled.div`
height: 60px;
width: 60px;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
border: 1px solid grey;
cursor: pointer;
color:  #EA4436 ;
font-size: 25px;

@media screen and (max-width: 650px){
  height: 50px;
  width: 50px;
  font-size: 18px;
}
@media screen and (max-width: 350px){
    height: 40px;
    width: 40px;
  }
`
const TextContain = styled.div`
font-weight: bold;
color: white;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 200px;
  width: 70%;
  margin-top: 15px;
 
  @media screen and (max-width: 650px){
    width: 80%;
    height: 150px;
  }

  >input{
    height: 50px;
    border-radius: 8px;
    border: 1px solid darkgrey;
    padding-left: 20px;
    @media screen and (max-width: 650px){
        height: 35px;
      }
`
const ForgetText = styled.div`
text-align: right;
color: white;
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
const TextContainer = styled.div`
display: flex;
height: 60px;
justify-content: space-between;
align-items: center;
width: 203px
`
const DontContain = styled.div`
color: white;
`
const JoinContain = styled.div`
color: rgb(27,146,255);
cursor: pointer;
`
const ReveContentHolder = styled.div`
width: 100%;
height: 150px;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
padding-bottom: 15px;

@media screen and (max-width: 1024px){
    height: 70px;
    padding-bottom: 0px;
}
@media screen and (max-width: 650px){
    height: 70px;
}
`
const AjeHolder = styled.div`
color: white;
font-weight: bold;
`

const AmouHolder = styled.div`
color: white;
font-weight: bold;
`
const MargHolder1 = styled.div`
width: 60px;
border-bottom: 3px solid lightgrey;
margin-left: 135px;
margin-bottom: 10px;
`
const MargHolder2 = styled.div`
width: 90px;
border-bottom: 3px solid lightgrey;
margin-left: 105px;
margin-bottom: 10px;
`