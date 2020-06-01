import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { LogIn } from "components/LogIn"
import { SignUp } from "components/SignUp"
import { Profile } from "components/Profile"
import { StartPage } from "StartPage"

export const App = () => {
  const [accessToken, setAccessToken] = useState()
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <StartPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}
