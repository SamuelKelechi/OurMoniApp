import React from 'react'

function AboutImpactCard() {
    return (
        <div>
            <div style={{
                display:"flex",
                width:"250px",
                justifyContent:"space-between",
                margin:"8px",
            }}>
                <div style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    width:"30%",
                    height:"70px",
                    backgroundColor:"grey",
                    borderRadius:"100%",
                }}>Image</div>
                <div style={{
                    width:"65%"
                }}>
                    <div style={{fontWeight:"bolder", marginBottom:"5px"}}>Name</div>
                    <div style={{marginBottom:"5px"}}>Office</div>
                    <div>scrambled it to make a type specimen book.
                     It has survived not only five centuries, 
                     but also the leap into.</div>
                </div>
            </div>
        </div>
    )
}

export default AboutImpactCard
