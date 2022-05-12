import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.8)),
     url(https://scontent.fadl5-1.fna.fbcdn.net/v/t39.30808-6/280219323_5838214939539660_9020665931602085856_n.jpg?_nc_cat=111&ccb=1-6&_nc_sid=0debeb&_nc_ohc=iGgdNORzrOAAX_ylvrj&_nc_ht=scontent.fadl5-1.fna&oh=00_AT-E3KegrxB70ZpT_fMp25P84lVxSyCWHTCztAqowI8WCA&oe=62814364),
     center;
     display: flex;
     align-items: flex-start;
     justify-content: center;
`

const Wrapper = styled.div`
    width: 40%;
    padding: 40px;
    background-color: transparent;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 25px 10px 0px 0px;
    padding: 5px;
`

const Agreement = styled.span`
    font-Size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 10px 15px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create An Account</Title>
            <Form>
                <Input placeholder="First Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Username"/>
                <Input placeholder="Eamil"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>
                    By creating an account, I consent to the processing
                    of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>Create Account</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register