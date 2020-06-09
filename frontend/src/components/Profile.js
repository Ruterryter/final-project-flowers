import React, { useState } from "react"
import styled from "styled-components/macro"
import { logout } from "../reducers/user"
import { useDispatch, useSelector } from 'react-redux'


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

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-top: solid 20px #ff7c98;
`;

const ImgCard = styled.div`
  margin: 0;
  width: 50%;
  height: 500px;
  background-color: grey;
  background-image: url("https://dl.dropboxusercontent.com/s/70x6q4wfmhe9qp2/burkinsta.jpg?dl=0");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: pink;
  
  @media (max-width: 768px) {
    height: 350px;
  }
`;

const TextCard = styled.div`
  margin: 0;
  width: 50%;
  height: 500px;
  background-color: #fde7ea;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: center;
  align-items: center;
  @media (max-width: 768px) {
    height: 350px;
  }
`;

const Title = styled.h2`
  margin: auto;
  font-family: "Poppins";
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #ff7c98;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const InfoText = styled.h5`
  margin: auto 20px;
  font-family: "Poppins";
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #ff7c98;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

export const Profile = ({ accsessToken }) => {
  const dispatch = useDispatch();


  return (
    <ProfileWrapper>
      <h1>Inloggad</h1>
      <h4> Välkommen att beställa blommor </h4>

      <Button type="submit" onClick={(e) => dispatch(logout())} value="Logga ut">Logga ut</Button>
    </ProfileWrapper>
  )
}