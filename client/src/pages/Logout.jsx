
import styled from "styled-components";
import { mobile } from "../responsive";
import { logout } from "../redux/userRedux";
import { useDispatch, useSelector } from "react-redux";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.8)
    ),
    url(https://scontent.fadl5-1.fna.fbcdn.net/v/t39.30808-6/281795013_5862116663816154_7020159697593332901_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_ohc=FAZ83_yxX2EAX81yZss&tn=XdfBG56u3cRmIbXd&_nc_ht=scontent.fadl5-1.fna&oh=00_AT-IUgblq9mpjUpNYOH6RFQV6HPYyn3t861gLj3RKhvQmA&oe=628CB6EC),
    center;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 40px;
  background-color: transparent;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;



const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px 15px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

// const Link = styled.a`
//     margin: 5px 0px;
//     font-size: 12px;
//     text-decoration: underline;
//     cursor: pointer;
// `;



const Logout = () => {
  const dispatch = useDispatch();
 

  const logOut = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <Container>
      <Wrapper>
        <Title>Log Out</Title>

        <Button onClick={logOut}>
          Log out
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Logout;
