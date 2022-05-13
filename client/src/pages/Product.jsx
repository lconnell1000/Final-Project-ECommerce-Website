import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons"
import { mobile } from "../responsive"

const Container = styled.div`

`
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`
const ImgContainer = styled.div`
  flex: 1;
`
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "55vh" })}
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 40px;
  flex-direction: column;
  ${mobile({ padding: "10px" })}
`
const Title = styled.h1`
  font-weight: 200;
`
const Description = styled.p`
  margin: 20px 0px;
`
const Price = styled.span`
  font-weight: 100;
  font-size: 35px;
`

const FilterContainer = styled.div`
  width: 50%;
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`
const Filter = styled.div`
  display: flex;
  align-item: center;
`
const FilterTitle = styled.span`
  font-size: 20px
  font-weight: 200;
`
const FilterSize = styled.select`
  margin-left: 15px;
  padding: 5px;
`
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`
const AmountConatiner = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`
const Button = styled.button`
  padding: 15px;
  border: 2.5px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 550;

  &:hover{
    background-color: teal;
  }
`
const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <ImgContainer>
          <Image src="https://i.ibb.co/mTKQbPQ/r-n-tyfq-OL1-FAQc-unsplash.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>Avocado Dyed Dress</Title>
            <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam nihil consectetur magnam possimus, aliquam voluptatum non expedita minima numquam nam quod laborum ullam eos libero sunt earum fuga cupiditate exercitationem.
            </Description>
            <Price>$ 60 </Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>M</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountConatiner>
                <Remove/>
                <Amount>1</Amount>
                <Add/>
              </AmountConatiner>
              <Button>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product