import React, { useState } from "react"
import styled from "styled-components/macro"
import { Profile } from "./Profile"
import { useDispatch, useSelector } from 'react-redux';
import { user, login, logout } from "../reducers/user";

const LOGIN_URL = "https://bouquetdb.herokuapp.com/sessions"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const Header = styled.header`
  font-family: "Poppins";
  font-size: 24px;
  font-weight: 700;
  ext-transform: uppercase;
  text-align: center;
  color: #FF7C98;
  margin-bottom: 20px;
`

const Button = styled.button`
  background-color: #FF7C98;
  color: #FFFF;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  text-transform: uppercase; 
  outline: none;
  border: none;
  margin: 20px;
`

const LoginContainer = styled.div`
  background-color: #FDE7EA;
  padding: 20px;
  margin-bottom: 20px;
  width: 45%;
`

export const LogIn = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  // To sign in a user.
  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login(email, password));
  };


  if (!accessToken) {
    return (
      <>
        <LoginContainer>
          <Form>
            <Header>Logga in</Header>
            <Label>Email</Label>
            <Input type="text" required placeholder="dittnamn@gmail.com" value={email} onChange={(event) => setEmail(event.target.value)} />
            <Label>Password</Label>
            <Input type="password" required placeholder="********" value={password} onChange={(event) => setPassword(event.target.value)} />
            <Button type="submit" onClick={handleLogin}>Logga in</Button>
          </Form>
        </LoginContainer>
      </>
    )
  } else {
    // If user is logged in, show profile
    return <Profile />;
  }
}

