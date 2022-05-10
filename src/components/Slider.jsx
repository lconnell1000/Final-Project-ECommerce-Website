import { ArrowLeftRounded, ArrowRightRounded } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "15px"};
    right: ${props=> props.direction === "right" && "15px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.75;
`
const Wrapper = styled.div`
    height: 100%;
`

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1
`
const Image = styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`

`
const Description = styled.p`

`
const Button = styled.button`

`
const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftRounded />
        </Arrow>
        <Wrapper>
        <Slide>
        <ImgContainer>
        <Image src="https://i.ibb.co/mck9rQK/milad-fakurian-K4-Fgcyy-FXC8-unsplash.jpg"/>
        </ImgContainer>
        <InfoContainer>
            <Title>WINTER SALE</Title>
            <Description>SPEND MORE THAN $150 AND GET FREE SHIPPING</Description>
            <Button>SHOP NOW</Button>
        </InfoContainer>
        </Slide>
        </Wrapper>
        <Arrow direction="right">
            <ArrowRightRounded />
        </Arrow>
    </Container>
  )
}

export default Slider