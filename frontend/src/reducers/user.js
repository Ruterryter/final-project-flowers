import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: {
    accessToken: null,
    userId: 0,
    secretMessage: null,
    errorMessage: null,
  },
};

export const user = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload;
      state.login.accessToken = accessToken;
    },

    setUserId: (state, action) => {
      const { userId } = action.payload;
      state.login.userId = userId;
    },

    setFirstName: (state, action) => {
      const { firstName } = action.payload;
      state.login.firstName = firstName;
    },

    setLastName: (state, action) => {
      const { lastName } = action.payload;
      state.login.lastName = lastName;
    },

    setSecretMessage: (state, action) => {
      const { secretMessage } = action.payload;
      state.login.secretMessage = secretMessage;
    },

    setErrorMessage: (state, action) => {
      const { errorMessage } = action.payload;
      state.login.errorMessage = errorMessage;
    }
  },
});

// Thunks
export const login = (email, password) => {
  const LOGIN_URL = 'https://bouquetdb.herokuapp.com/sessions';
  return (dispatch) => {
    fetch(LOGIN_URL, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (res.ok /* if 200, 201, 204 */) {
          return res.json();
        }

        // Not OK
        throw 'Unable to sign in. Please check that your email and password are correct';
      })
      .then((json) => {
        // Save the login info
        dispatch(
          user.actions.setAccessToken({
            accessToken: json.accessToken,
          })
        );
        dispatch(user.actions.setUserId({ userId: json.userId }));
      })
      .catch((err) => {
        dispatch(logout());
        dispatch(user.actions.setErrorMessage({ errorMessage: err }));
      });
  };
};

export const getSecretMessage = () => {
  const USERS_URL = 'https://bouquetdb.herokuapp.com/users';
  return (dispatch, getState) => {
    const accessToken = getState().user.login.accessToken;
    const userId = getState().user.login.userId;
    const firstName = getState().user.login.firstName;
    const lastName = getState().user.login.lastName;
    // Include userId in the path
    fetch(`${USERS_URL}/${userId}/users`, {
      method: 'GET',
      // Include the accessToken to get the protected endpoint
      headers: { Authorization: accessToken },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw 'Could not get information. Make sure you are logged in and try again.';
      })
      // SUCCESS: Do something with the information we got back
      .then((json) => {
        dispatch(
          user.actions.setSecretMessage({ secretMessage: JSON.stringify(json) }),
        );
      })
      .catch((err) => {

        dispatch(user.actions.setErrorMessage({ errorMessage: err }));
      }); //401
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(user.actions.setSecretMessage({ secretMessage: null }));
    dispatch(user.actions.setErrorMessage({ errorMessage: null }));
    dispatch(user.actions.setAccessToken({ accessToken: null }));
    dispatch(user.actions.setUserId({ userId: 0 }));
  };
};