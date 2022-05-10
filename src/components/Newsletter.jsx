import { Send } from "@material-ui/icons"
import styledComponents from "styled-components"

const Container = styled.div`

`
const Title = styled.h1`

`
const Decription = styled.div`

`
const InputContainer = styled.div`

`
const Input = styled.input`

`
const Button = styled.button`

`
const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Decription>Register to get updates about your favourite products</Decription>
        <InputContainer>
        <Input placeholder="your email"/>
        <Button>
            <Send/>
        </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter