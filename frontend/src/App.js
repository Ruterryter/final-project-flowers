import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { LogIn } from "components/LogIn"
import { SignUp } from "components/SignUp"
import { Profile } from "components/Profile"
import { StartPage } from "StartPage"
import { ProductPage } from "components/ProductPage"

export const App = () => {
  const [accessToken, setAccessToken] = useState()
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <StartPage />
          </Route>
          <Route path="/bouquets/:id">
            <ProductPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}
