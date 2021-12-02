import React from 'react'
import './AboutLead.css'


function AboutCard({name, office, desc, avatar}) {
    return (
        <div style={{
            marginBottom:"20px"
        }}>
            <div className="AboutLead_Mobile" 
            style={{
                borderRadius: "8px",
                backgroundImage: `url(${avatar})`
            }}>
                <div style={{
                    opacity:"0.8",
                    width:"100%",
                    // height:"90px",
                    borderRadius: "8px",
                    backgroundColor: "darkgray",
                    color:"white",
                    fontWeight:"bold",
                    paddingLeft:"5px"
                }}>
                    <div>{name}</div>
                    <div style={{marginBottom:"5px"}}>{office}</div>
                    <div style={{fontWeight:"lighter"}}>{desc}</div>
                </div>
            </div>
        </div>
    )
}

export default AboutCard
