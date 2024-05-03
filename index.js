const express = require('express')
let ejs = require('ejs');

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('EJS and Request Parameters')
})

const USERS = [
  {
    username: 'vansh',
    firstName: 'Vansh',
    lastName: 'Gupta',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
    email: 'vansh@gmail.com'
  },
  {
    username: 'gunjan',
    firstName: 'Gunjan',
    lastName: 'Dahiwale',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
    email: 'gunjan@gmail.com'
  },
  {
    username: 'priya',
    firstName: 'Priya',
    lastName: 'Rai',
    avatar: 'https://reqres.in/img/faces/3-image.jpg',
    email: 'priya@gmail.com'
  }
]

app.get('/users/:username', (req, res) => {
  const { username } = req.params
  
  const userDetails = USERS.find(user => user.username === username)

  if(userDetails) {
    res.render('user', userDetails)
  } else {
    res.sendFile(__dirname + '/pages/not-found.html')
  }
})

app.listen(3000, () => {
  console.log('Server is up :)')
})

/*
  # View engine/Template engine
    - EJS: Embedded JavaScript templating.

    app.get('/resume/mohit', (req, res) => {
      res.render('resume', {
        firstName: 'Mohit',
        lastName: 'Gupta',
        title: 'Software Engineer Intern',
        isGraduated: false,
        hobbies: ['Swimming', 'Singing', 'Dancing']
      })
    })

    app.get('/resume/naveen', (req, res) => {
      res.render('resume', {
        firstName: 'Naveen',
        lastName: 'Kumar',
        title: 'Devops Engineer',
        isGraduated: true,
        hobbies: ['Coding']
      })
    })

  # Request Parameters: URL variables

  # Status Codes:
  - 404: Not Found
*/