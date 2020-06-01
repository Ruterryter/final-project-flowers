import React, { useState } from "react"
import styled from "styled-components/macro"
import { useDispatch, useSelector } from 'react-redux';
import { user } from "../reducers/user";

const SIGNUP_URL = "https://signinprojecttechnigo.herokuapp.com/users"

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Header = styled.header`
font-family: "Poppins";
font-size: 24px;
font-weight: 700;
text-transform: uppercase;
text-align: center;
color: #FF7C98;
margin-bottom: 20px;
`

const Label = styled.label`
text-align: center;
color: #FF7C90;
`

const Input = styled.input`
margin: 10px 0;
padding: 5px 15px;
border: none;
font-family: "Poppins";
font-size: 8px;

::placeholder{
  color: #FF7C90;
}: 
`
const StyledButton = styled.button`
background-color: transparent;
color: #FF7C98;
font-family: 'Poppins', sans-serif;
font-weight: 700;
text-transform: uppercase; 
outline: none;
border: 2px solid #FF7C98;
margin: 20px;
`

const SignUpContainer = styled.div`
background-color: #FDE7EA;
padding: 20px;
margin-bottom: 20px;
width: 45%;`


export const SignUp = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  // To sign up a user.
  const handleSignup = (event) => {
    event.preventDefault();

    const userSignedUp = { email, password, firstName, lastName, address, city, zipCode }
    fetch(SIGNUP_URL, {
      method: 'POST',
      body: JSON.stringify(userSignedUp),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        console.log("parsing")
        if (!res.ok) {

          throw 'Could not create account.  Try a different username.';
        }
        return res.json();
      })
      .then((json) => {
        // Save the login info
        console.log("successful reg")
        dispatch(
          user.actions.setAccessToken({
            accessToken: json.accessToken,
          })
        );
        dispatch(user.actions.setUserId({ userId: json.userId }));
      })
      .catch((err) => {
        console.log("onsuccssful reg")
        dispatch(user.actions.setErrorMessage({ errorMessage: err }));
      });
  };
  if (!accessToken) {
    return (
      <>
        <SignUpContainer>
          <Form>
            <Header>Skapa användare</Header>
            <Label>Förnamn </Label>
            <Input type="Text" placeholder="Förnamn" value={firstName} onChange={(event) => setFirstName(event.target.value)} />

            <Label>Efternamn</Label>
            <Input type="Text" placeholder="Efternamn" value={lastName} onChange={(event) => setLastName(event.target.value)} />

            <Label>Adress</Label>
            <Input type="Text" placeholder="Din gata" value={address} onChange={(event) => setAddress(event.target.value)} />

            <Label>Postnummer</Label>
            <Input type="Number" placeholder="123 45" value={zipCode} onChange={(event) => setZipCode(event.target.value)} />

            <Label>Ort</Label>
            <Input type="Text" placeholder="Malmö" value={city} onChange={(event) => setCity(event.target.value)} />

            <Label>Email</Label>
            <Input type="text" required placeholder="dittnamn@gmail.com" value={email} onChange={(event) => setEmail(event.target.value)} />

            <Label>Password</Label>
            <Input type="password" required placeholder="********" vale={password} onChange={(event) => setPassword(event.target.value)} />

            <StyledButton type="submit" onClick={handleSignup}>Registrera dig</StyledButton>
          </Form>
        </SignUpContainer>
      </>

    )
  } else {
    return (
      <>
      </>
    )
  }
}
