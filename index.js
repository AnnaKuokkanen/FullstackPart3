var morgan = require('morgan')
const cors = require('cors')
const express = require('express')
const app = express()
require('dotenv').config()
const Person = require('./models/person')

app.use(express.json())
app.use(express.static('build'))
app.use(cors())
morgan.token('persondata', function (req, res) { return JSON.stringify(req.body) })
app.use(morgan(':method :url :status :req[content-length] - :response-time ms :persondata'))

app.get('/api/persons', (req, res) => {
  let persons = []
  Person.find({}).then(result => {
    result.forEach(person => {
        persons.push(person)
    })
    res.json(persons)
  })
  .catch(error => {
    console.log('ERROR', error.message)
  });
})

app.get('/api/persons/:id', (req, res) => {
  Person.findById(req.params.id)
  .then(person => {
    if (person) {
      console.log('Löytyi henkilö', person)
      res.json(person)
    } else {
      res.status(404).end()
    }
  })
  .catch(error => next(error))
})

app.get('/info', (req, res) => {
  const date = new Date().getTime()
  let people = 0
  Person.find({}).then(result => {
    result.forEach(person => {
      //console.log('lisätään')
      people = people + 1
      //console.log('arvo:', people)
    })
    res.send(`<p>Phonebook has info for ${people} people</p>
            <p>Date: ${new Date()}</p>`)
  })
})

app.delete('/api/persons/:id', (req, res) => {
  Person.findByIdAndRemove(req.params.id)
  .then(result => {
    response.status(204).end()
  })
  .catch(error => next(error))
})

app.post('/api/persons', (req, res) => {
  const person = req.body
  if (!person.name || !person.number) {
    return res.status(400).json({ 
      error: 'content missing' 
    })
  }
  const id = Math.round(Math.random() * 1000)
  const p = new Person({
    name: person.name,
    number: person.number,
    id: id,
  })
  p.save().then(savedPerson => {
    res.json(savedPerson)
  })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})