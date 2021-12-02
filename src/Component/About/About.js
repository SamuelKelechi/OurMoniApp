import React from 'react'
import styled from 'styled-components'
import Background from './Images/About_Top.jpg'
import AboutStoryCard from './AboutStoryCard/AboutStoryCard'
import AboutTeamCard from './AboutTeamCard/AboutTeamCard'
import AboutCard from './AboutLeadCard/AboutLeadCard'
import AboutImpactCard from './AboutImpactCard/AboutImpactCard'
import ubani from './Images/ubani.jpg'
import peter from './Images/peter.jpg'
import bukky from './Images/bukky.jpg'
import ndidi from './Images/ndidi.jpg'
import esther from './Images/esther.jpg'
import gideon from './Images/gideon.jpg'
import sam from './Images/sam.jpg'
import cynthia from './Images/cynthia.jpg'






function About() {
  return (
    <AboutContainer>
      <AboutTop>
        <h1>We are the AuditingApp</h1>
        <h4>Accountability is Essential</h4>
      </AboutTop>

      <OurStory>
        Our Story
      </OurStory>

      <StoryItems>
        <AboutStoryCard />
      </StoryItems>

      <OurMission>
        Our Mission
      </OurMission>

      <OurMissionContent>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
      Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
      unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, 
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
      </OurMissionContent>

      <OurLeadership>
          Our Leadership
      </OurLeadership>

      <OurLeadershipCards>
          <AboutCard 
          name="Ubani Friday"
          avatar={ubani}
          office="Admin"
          desc="Lorem Ipsum is that it has a more-or-less normal"
          />
          <AboutCard 
          name="Peter Oti"
          avatar={peter}
          office="Co-Founder"
          desc="Lorem Ipsum is that it has a more-or-less normal"
          />
          <AboutCard 
          name="Bukola Gbemi"
          avatar={bukky}
          office="Co-Founder"
          desc="Lorem Ipsum is that it has a more-or-less normal"
          />
      </OurLeadershipCards>

      <OurTeam>
        Our Team
      </OurTeam>

      <OurTeamContent>
        <AboutTeamCard
        nam="Anyamah Ndidi"
        pos="Developer"
        avat={ndidi}
        />
        <AboutTeamCard 
        nam="Cynthia Onyilimba"
        pos="UI/UX Designer"
        avat={cynthia} 
        />
        <AboutTeamCard 
        nam="Samuel Kelechi"
        pos="Project Coordinator" 
        avat={sam} 
        />
        <AboutTeamCard 
        nam="Adeniran Esther"
        pos="Content Creator"
        avat={esther} 
        />
        <AboutTeamCard 
        nam="Gideon Ekeke"
        pos="Developer" 
        avat={gideon} 
        />
      </OurTeamContent>

      <OurImpact>
        Impact Testimonies
      </OurImpact>

      <OurImpactContent>
        <AboutImpactCard />
        <AboutImpactCard />
      </OurImpactContent>

    </AboutContainer>
  )
}

export default About

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutTop = styled.div`
  width: 100%;
  padding-top: 80px;
  height: 500px;
  text-align: left;
  color: white;
  position: relative;
  background-image: url(${Background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  opacity: 0.8;
  background-color: black;
  

  h1{
    position: relative;
    margin-top:250px;
    margin-left: 60px;
    font-weight: heavier;
    font-size: bolder;
    color: white;
    opacity: 1.5;
  }
  h4{
    padding-left: 60px;
    color: white;
    opacity: 1.5;
  }

  @media screen and (max-width: 650px) {
    text-align: right;
    height: 300px;

    h1 {
      padding-right:20px;
      font-size: large;
      margin-top:110px;
      margin-left: 60px;
    }
    h4{
      padding-right: 20px;
      font-size: small;
    }
  }
`;

const OurStory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  font-size: 25px;
  width: 100%;
  margin-top: 25px;
  height: 60px;
  background: #212531;
  color: white;
`;

const StoryItems = styled.div`

`;

const OurMission = styled.div`
  font-weight: bolder;
  margin-bottom: 15px;
  font-size: bold;
  font-size: 20px;
`;

const OurMissionContent = styled.div`
  width: 65%;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;

    @media screen and (max-width: 650px){
      width: 90%
    }
`;

const OurLeadership = styled.div`
  font-weight: bolder;
  margin-bottom: 15px;
  margin-top: 20px;
  font-size: bold;
  font-size: 20px;
`;

const OurLeadershipCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;

    @media screen and (max-width: 650px){
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 80%;
    }
`;

const OurTeam = styled.div`
  font-weight: bolder;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: bold;
  font-size: 20px;
`;

const OurTeamContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80%;
  margin-top: 5px;
  margin-bottom: 10px;

    @media screen and (max-width: 780px){
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 80%;
      overflow-x: scroll;
    }
    @media screen and (max-width: 650px){
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      whitespace: none;
    }
`;

const OurImpact = styled.div`
  font-weight: bolder;
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: bold;
  font-size: 20px;
`

const OurImpactContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  margin-top: 25px;
  margin-bottom: 10px;

    @media screen and (max-width: 650px){
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 80%;
    }

    @media screen and (max-width: 780px){
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 80%;
    }
`