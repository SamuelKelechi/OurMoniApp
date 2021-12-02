import React from 'react'
import styled from 'styled-components'
import img from "../img/6.png"

function Content1() {
  return (
    <Container>
      <Title>
        Most Recent Update
      </Title>
      <Container1>

        <Info1>
          <img src={img} />

        </Info1>
        <Info2>
          <Info22>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          </Info22>
          < Info23>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            
          </Info23>

        </Info2>

      </Container1>
    </Container>
  )
}

export default Content1

const Info23 = styled.div`
height: 500px;
font-size: 13px;

@media screen and (max-width:768px){

height: 350px;
margin-top: 10px;
}

@media screen and (max-width:425px){

height: 350px;
margin-top: 10px;
}

@media screen and (max-width:375px){

height: 350px;
margin-top: 10px;
}

@media screen and (max-width:320px){

height: 350px;
margin-top: 10px;
}
`

const Info22 = styled.div`
height: 200px;
font-size: 13px;


@media screen and (max-width:768px){

height: 350px;
margin-top: 10px;
}

@media screen and (max-width:425px){

height: 350px;
margin-top: 10px;
}

@media screen and (max-width:375px){

height: 350px;
margin-top: 10px;
}

@media screen and (max-width:320px){

height: 350px;
margin-top: 10px;
}
`

const Info2 = styled.div`
width: 600px;
height: 400px;




@media screen and (max-width:768px){
width: 750px;
height: auto;
}

@media screen and (max-width:425px){
width: 415px;
height: auto;
}

@media screen and (max-width:375px){
width: 350px;
height: auto;
}

@media screen and (max-width:320px){
width: 310px;
height: auto;
padding: 5px;
}
`

const Info1 = styled.div`
width: 450px;
height: 400px;
justify-content: center;
display: flex;
align-items: center;



img{
  width: 550px;
height: 400px;
object-fit: cover;
}


@media screen and (max-width:768px){
width: 750px;
height: 400px;

img{
width: 750px;
height: 400px;
object-fit: cover;
}
}

@media screen and (max-width:425px){
width: 415px;
height: 400px;

img{
width: 415px;
height: 400px;
object-fit: cover;
}
}

@media screen and (max-width:375px){
width: 350px;
height: 400px;

img{
width: 350px;
height: 400px;
object-fit: cover;
}

}


@media screen and (max-width:320px){
width: 310px;
height: 400px;



img{
width: 310px;
height: 400px;
object-fit: cover;
}
}

`

const Container1 = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: space-between;
width: 1115px;





@media screen and (max-width:768px){
width: 750px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;

}

@media screen and (max-width:425px){
width: 415px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;

}

@media screen and (max-width:375px){
width: 350px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
}


@media screen and (max-width:320px){

  width: 310px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;

}


`

const Title = styled.div`
width: 1200px;


@media screen and (max-width:768px){
width: 750px;

}

@media screen and (max-width:425px){
width: 415px;

}

@media screen and (max-width:375px){
width: 350px;

}


@media screen and (max-width:320px){
width: 310px;
}



`

const Container = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 20px;
height: auto;

`
