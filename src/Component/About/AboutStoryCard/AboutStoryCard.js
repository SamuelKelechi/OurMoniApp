import React from 'react'
import './AboutCard.css'
import StoryPic from '../Images/StoryPix.jpg'


function AboutStoryCard() {
    return (
        <div className="StoryMain_Container">
            <div className="About_Mobile">
                <img src={StoryPic} alt="Avatar" style={{
                    width:"100%",
                    height:"100%",
                    objectFit:"cover"
                }}/>
            </div>
            <div className="About_Mobile1">
                <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                <br/>
                <br/>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                </div>
            </div>
        </div>
    )
}

export default AboutStoryCard
