import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import crypto from 'crypto'
import bcrypt from 'bcrypt-nodejs'

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/authAPI"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise


const Bouquet = mongoose.model('Bouquet', {
  name: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
})

const User = mongoose.model('User', {
  firstName: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex')
  },
  address: {
    type: String,
    required: false
  },
  zipCode: {
    type: Number,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  phoneNumber: {
    type: Number,
    required: false
  }
})


// Defines the port the app will run on. Defaults to 8080, but can be 
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 8082
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(bodyParser.json())

const authenticateUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ accessToken: req.header('Authorization') })
    if (user) {
      req.user = user
      next()
    } else {
      res.status(401).json({ loggedOut: true, message: "Please try to login again" })
    }
  } catch (err) {
    res.status(403).json({ message: "Accesstoken is missing/wrong", error: err })
  }
}

// Start defining your routes here
app.get('/', (req, res) => {
  res.send('Hello world')
})


//sign upp
app.post('/users', async (req, res) => {
  try {
    const { firstName, lastName, email, password, address, zipCode, city, phoneNumber } = req.body;
    const user = new User({ firstName, lastName, email, address, zipCode, city, phoneNumber, password: bcrypt.hashSync(password) });
    const saved = await user.save();
    delete saved.password
    res.status(201).json({ id: user._id, accessToken: user.accessToken });
  } catch (err) {
    res.status(400).json({ message: 'Could not create user', errors: err.errors });
  }
});

//autenticate user 
app.get('/users/:id', authenticateUser)
app.get('/users/:id', (req, res) => {
  res.status(201).json({ email: req.user.email, userId: req.user._id })
})

//sign in 
app.post('/sessions', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(201).json({ userId: user._id, accessToken: user.accessToken });
    } else {
      res.status(404).json({ notFound: true });
    }
  } catch (err) {
    res.status(404).json({ notFound: true });
  }
})


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
