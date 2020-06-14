import React, { useState } from "react";
import styled from "styled-components/macro";
import { Profile } from "./Profile";
import { useDispatch, useSelector } from "react-redux";
import { user, login, logout } from "../reducers/user";
import { Link } from "react-router-dom";
import { ConfirmationPage } from "components/ConfirmationPage";
import { Checkout } from "./Checkout";
import { OrderSummary } from "components/OrderSummary";
import { NavBar } from "components/Navbar";
import { Footer } from "components/Footer";
import headerPic from "../assets/Headerpic.jpeg";

const LOGIN_URL = "https://bouquetdb.herokuapp.com/sessions";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  background-image: url(${headerPic});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: pink;
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
  background-color: #fde7ea;
  padding: 20px;
  margin: 20px;
  width: 45%;
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const errorMessage = useSelector((store) => store.user.login.errorMessage);

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login(email, password));
  };

  if (!accessToken) {
    return (
      <>
        <NavBar />
        <Wrapper>
          {errorMessage && <h4>Error Message : {`${errorMessage}`}</h4>}
          <LoginContainer>
            <Form>
              <Header>Logga in</Header>
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

              <Button type="submit" onClick={handleLogin}>
                Logga in
              </Button>

              <Link
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
        <Footer />
      </>
    );
  } else {
    return <OrderSummary />;
  }
};
