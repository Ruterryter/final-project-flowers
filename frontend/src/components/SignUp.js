import React, { useState } from "react";
import styled from "styled-components/macro";
import { useDispatch, useSelector } from "react-redux";
import { user, login, signup, signUp } from "../reducers/user";
import { useHistory } from "react-router-dom";
import { NavBar } from "components/Navbar";
import { Footer } from "components/Footer";
import headerPic from "../assets/Headerpic.jpeg";
import { Checkout } from "Pages/Checkout";

const SIGNUP_URL = "https://bouquetdb.herokuapp.com/users";

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
const StyledButton = styled.button`
  background-color: transparent;
  color: #ff7c98;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  outline: none;
  border: 2px solid #ff7c98;
  margin: 20px;
`;

const SignUpContainer = styled.div`
  background-color: #fde7ea;
  padding: 20px;
  margin: 20px;
  width: 45%;
  opacity: 95%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
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

    const userSignedUp = {
      email,
      password,
      firstName,
      lastName,
      address,
      city,
      zipCode,
      phoneNumber,
    };
    fetch(SIGNUP_URL, {
      method: "POST",
      body: JSON.stringify(userSignedUp),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log("parsing");
        if (!res.ok) {
          throw "Could not create account.  Try a different email address.";
        }
        return res.json();
      })
      .then((json) => {
        console.log("Detta är json respons i signup: ", json);
        // Save the login info
        console.log("successful reg");
        dispatch(
          user.actions.setAccessToken({
            accessToken: json.accessToken,
          })
        );
        dispatch(user.actions.setUserId({ userId: json.id }));

        dispatch(
          signUp(
            json.firstName,
            json.lastName,
            json.email,
            json.address,
            json.zipCode,
            json.city,
            json.phoneNumber
          )
        );

        // dispatch(
        //   userSignedUp(
        //     firstName,
        //     lastName,
        //     email,
        //     password,
        //     address,
        //     zipCode,
        //     city,
        //     phoneNumber
        //   )
        // );
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setAddress("");
        setZipCode("");
        setCity("");
        setPhoneNumber("");
      })

      .catch((err) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: err }));
      });
  };
  if (accessToken) {
    return <Checkout />;
  } else {
    return (
      <>
        <NavBar />
        <Wrapper>
          <SignUpContainer>
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

              <StyledButton type="submit" onClick={handleSignup}>
                Registrera dig
              </StyledButton>
            </Form>
          </SignUpContainer>
        </Wrapper>
        <Footer />
      </>
    );
  }
};
