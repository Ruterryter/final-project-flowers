import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { user, signUp } from "../reducers/user";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import headerPic from "../assets/Headerpic.jpeg";
import { Checkout } from "Pages/Checkout";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  background-image: url(${headerPic});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: pink;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const SignUpContainer = styled.div`
  background-color: #fde7ea;
  padding: 100px 50px;
  margin: 20px;
  width: 45%;
  opacity: 95%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;

const StyledLink = styled(Link)`
  margin-right: 10px;
  font-family: "Poppins";
  font-size: 14px;
  font-weight: 400;
  color: #ff7c98;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    text-decoration: none;
    color: orange;
  }

  @media (max-width: 768px) {
    color: #fff;
  }
`;

export const SignUp = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const errorMessage = useSelector((store) => store.user.login.errorMessage);

  // To sign up a user.
  const handleSignup = (event) => {
    event.preventDefault();
    dispatch(
      signUp(
        firstName,
        lastName,
        email,
        password,
        address,
        zipCode,
        city,
        phoneNumber
      )
    );
  };

  if (accessToken) {
    return <Checkout />;
  } else {
    return (
      <>
        <Wrapper>
          <SignUpContainer aria-label="registeringsformulär">
            <Form>
              {errorMessage && <h4>Error Message : {`${errorMessage}`}</h4>}
              <Header>Skapa användare</Header>
              <Label>Förnamn </Label>
              <Input
                type="Text"
                required
                placeholder="Förnamn"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />

              <Label>Efternamn</Label>
              <Input
                type="Text"
                required
                placeholder="Efternamn"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />

              <Label>Adress</Label>
              <Input
                type="Text"
                required
                placeholder="Din gata"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />

              <Label>Postnummer</Label>
              <Input
                type="Number"
                required
                placeholder="123 45"
                value={zipCode}
                onChange={(event) => setZipCode(event.target.value)}
              />

              <Label>Ort</Label>
              <Input
                type="Text"
                required
                placeholder="Malmö"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />

              <Label>Telefonnummer</Label>
              <Input
                type="Number"
                placeholder="0701-100 10 10"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
              />

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
                vale={password}
                onChange={(event) => setPassword(event.target.value)}
              />

              <Button type="submit" onClick={handleSignup}>
                Registrera dig
              </Button>
              <StyledLink to={"/login/"}> Logga in</StyledLink>
            </Form>
          </SignUpContainer>
        </Wrapper>
      </>
    );
  }
};
