import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: {
    accessToken: null,
    userId: 0,
    email: null,
    firstName: null,
    lastName: null,
    address: null,
    phoneNumber: null,
    zipCode: null,
    city: null,
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

    setPhoneNumber: (state, action) => {
      const { phoneNumber } = action.payload;
      state.login.phoneNumber = phoneNumber;
    },

    setEmail: (state, action) => {
      const { email } = action.payload;
      state.login.email = email;
    },

    setAddress: (state, action) => {
      const { address } = action.payload;
      state.login.address = address;
    },

    setZipCode: (state, action) => {
      const { zipCode } = action.payload;
      state.login.zipCode = zipCode;
    },

    setCity: (state, action) => {
      const { city } = action.payload;
      state.login.city = city;
    },

    setErrorMessage: (state, action) => {
      const { errorMessage } = action.payload;
      state.login.errorMessage = errorMessage;
    },
  },
});

// Thunks
export const login = (
  email,
  password,
  firstName,
  lastName,
  phoneNumber,
  address,
  city,
  zipCode
) => {
  const LOGIN_URL = "https://bouquetdb.herokuapp.com/sessions";
  return (dispatch) => {
    fetch(LOGIN_URL, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
        address,
        city,
        zipCode,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.ok /* if 200, 201, 204 */) {
          return res.json();
        }

        // Not OK
        throw "Unable to sign in. Please check that your email and password are correct";
      })
      .then((json) => {
        // Save the login info?
        console.log(json);
        dispatch(
          user.actions.setAccessToken({ accessToken: json.accessToken })
        );
        dispatch(user.actions.setUserId({ userId: json.userId }));

        dispatch(user.actions.setFirstName({ firstName: json.firstName }));
        dispatch(user.actions.setLastName({ lastName: json.lastName }));
        dispatch(user.actions.setEmail({ email: json.email }));
        dispatch(user.actions.setAddress({ address: json.address }));
        dispatch(user.actions.setZipCode({ zipCode: json.zipCode }));
        dispatch(user.actions.setCity({ city: json.city }));
        dispatch(
          user.actions.setPhoneNumber({ phoneNumber: json.phoneNumber })
        );
      })

      .catch((err) => {
        dispatch(logout());
        dispatch(user.actions.setErrorMessage({ errorMessage: err }));
      });
  };
};

export const signUp = (
  firstName,
  lastName,
  email,
  address,
  zipCode,
  city,
  phoneNumber
) => {
  return (dispatch) => {
    dispatch(user.actions.setFirstName({ firstName: firstName }));
    dispatch(user.actions.setLastName({ lastName: lastName }));
    dispatch(user.actions.setEmail({ email: email }));
    dispatch(user.actions.setAddress({ address: address }));
    dispatch(user.actions.setZipCode({ zipCode: zipCode }));
    dispatch(user.actions.setCity({ city: city }));
    dispatch(user.actions.setPhoneNumber({ phoneNumber: phoneNumber }));
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(user.actions.setErrorMessage({ errorMessage: null }));
    dispatch(user.actions.setAccessToken({ accessToken: null }));
    dispatch(user.actions.setUserId({ userId: 0 }));
    dispatch(user.actions.setFirstName({ firstName: null }));
    dispatch(user.actions.setLastName({ lastName: null }));
    dispatch(user.actions.setEmail({ email: null }));
    dispatch(user.actions.setAddress({ address: null }));
    dispatch(user.actions.setZipCode({ zipCode: 0 }));
    dispatch(user.actions.setCity({ city: null }));
    dispatch(user.actions.setPhoneNumber({ phoneNumber: null }));
  };
};
