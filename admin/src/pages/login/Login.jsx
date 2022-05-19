 import { useState } from "react";
 import styled from "styled-components"
 import { useDispatch } from "react-redux";
 import { login } from "../../redux/apiCalls";
 import { useHistory } from "react-router";

 const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.8)),
     url(https://scontent.fadl5-1.fna.fbcdn.net/v/t39.30808-6/280644516_5838181936209627_1176713398283326887_n.jpg?_nc_cat=101&ccb=1-6&_nc_sid=0debeb&_nc_ohc=OozsEEp7W8YAX_Ej3m5&_nc_ht=scontent.fadl5-1.fna&oh=00_AT_bxKQDUU4JszgThapyvtutbe8-tjDWCst8XuUC0IzTYg&oe=628A225E),
     center;
     display: flex;
     align-items: flex-start;
     justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 40px;
    background-color: transparent;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 5px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 10px 15px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`;

 
 const Login = () => {
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
     const dispatch = useDispatch();
     const history = useHistory();


    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
        history.push("/");
    };


   return (
     <Container>
         <Wrapper>
         <Title>Sign In</Title>
         <Form>
         <Input type="text" placeholder= "username" 
         onChange={e=>setUsername(e.target.value)}/>
         <Input type="password" placeholder = "password" 
         onChange={e=>setPassword(e.target.value)}/>
         <Button onClick={handleClick}>Log in</Button>
         </Form>
         </Wrapper>
     </Container>
   )
 }
 
 export default Login