import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducers/user";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { OrderSummary } from "components/OrderSummary";
import headerPic from "../assets/Headerpic.jpeg";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
 /*  background-image: url(${headerPic});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  background-color: #fffa;
`;

const Form = styled.form`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  text-align: center;
  color: #ff7c90;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 5px 15px;
  border: none;
  background-color: #fde7ea;
  font-family: "Poppins";
  font-size: 8px;
  ::placeholder {
    color: #ff7c90;
  }
`;

const Header = styled.header`
  font-family: "Poppins";
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #ff7c98;
  margin-bottom: 20px;
`;

const LoginContainer = styled.div`
  height: 100%;
  padding: 20px;
  margin: 20px;
  opacity: 95%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button`
  background-color: #ff7c98;
  color: #ffff;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  outline: none;
  border: none;
  margin: 20px;
`;

export const LogIn = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const errorMessage = useSelector((store) => store.user.login.errorMessage);

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login(email, password));
  };

  if (!accessToken) {
    return (
      <>
        <Wrapper>
          {errorMessage && <h4>Error Message : {`${errorMessage}`}</h4>}
          <LoginContainer>
            <Form>
              <Header aria-label="formulär för inloggning">Logga in</Header>
              <Label>Email</Label>
              <Input
                type="text"
                required
                placeholder="dittnamn@gmail.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Label>Password</Label>
              <Input
                type="password"
                required
                placeholder="********"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />

              <Button
                aria-label="logga in knapp"
                type="submit"
                onClick={handleLogin}
              >
                Logga in
              </Button>

              <Link
                aria-label="länk till registrering"
                to={"/signup/"}
                style={{
                  fontFamily: "Poppins",
                  fontSize: "12px",
                  color: "#ff7c98",
                  textDecoration: "none",
                }}
              >
                Registrera dig
              </Link>
            </Form>
          </LoginContainer>
        </Wrapper>
      </>
    );
  } else {
    return <OrderSummary />;
  }
};
