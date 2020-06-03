import React, { useState } from "react"
import styled from "styled-components/macro"
import { user, userId, logout, setErrorMessage } from "../reducers/user"
import { useDispatch, useSelector } from 'react-redux'


const URL = "https://signinprojecttechnigo.herokuapp.com/users/"

const ProfileWrapper = styled.div`
  background-color: #FDE7EA;
  padding: 20px;
  margin-bottom: 20px;
  width: 45%;
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

export const Profile = ({ accsessToken }) => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const userId = useSelector((store) => store.user.login.userId);
  const secretMessage = useSelector((store) => store.user.login.secretMessage);
  const errorMessage = useSelector((store) => store.user.login.errorMessage);

  return (
    <ProfileWrapper>

      {secretMessage && <h4>Secret Message : {`${secretMessage}`}</h4>}
      <h1>Inloggad</h1>
      <h4> Välkommen att beställa blommor </h4>
      <Button type="submit" onClick={(e) => dispatch(logout())} value="Logga ut">Logga ut</Button>
    </ProfileWrapper>
  )
}