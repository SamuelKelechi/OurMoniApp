import React from 'react'

function AboutTeamCard({nam, pos, avat}) {
    return (
        <div>
            <div style={{
                height:"150px",
                margin:"10px",
                flex: "0 0 auto",
                width:"140px"
            }}>
                <div style={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    height:"105px",
                    width:"105px",
                    borderRadius:"100%",

                }}><img src={avat} alt="Team" style={{
                    height:"100%",
                    width:"100%",
                    borderRadius:"100%",
                    objectFit:"cover", 
                }}/></div>
                <div style={{fontWeight:"bolder"}}>{nam}</div>
                <div>{pos}</div>
                <div style={{
                    width:"14px",
                    border:"1px solid grey"
                }}></div>
            </div>
        </div>
    )
}

export default AboutTeamCard
