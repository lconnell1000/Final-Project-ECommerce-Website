import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.8)),
     url(https://scontent.fadl5-1.fna.fbcdn.net/v/t39.30808-6/280644516_5838181936209627_1176713398283326887_n.jpg?_nc_cat=101&ccb=1-6&_nc_sid=0debeb&_nc_ohc=lhZasV_toIIAX9vE6vP&_nc_ht=scontent.fadl5-1.fna&oh=00_AT92n8Ho7wCD-JYfaqFBS4iz8M8ZFEwy5Wi1kKNBgE2yuw&oe=6282395E),
     center;
     display: flex;
     align-items: flex-start;
     justify-content: center;
`

const Wrapper = styled.div`
    width: 25%;
    padding: 40px;
    background-color: transparent;
    ${mobile({ width: "75%" })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 5px;
`


const Button = styled.button`
    width: 40%;
    border: none;
    padding: 10px 15px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  return (
    
        <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <Form>
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
                <Button>Log In</Button>
                <Link>Forgot Password?</Link>
                <Link>Create a New Account</Link>
            </Form>
        </Wrapper>
    </Container>
    
  )
}

export default Login