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

let persons = [
  {
      name: "Arto Hellas",
      number: "0312355390",
      id: 1
  },
  {
      name: "Ada Lovelace",
      number: "0234833950",
      id: 2
  },
  {
      name: "Alan Turing",
      number: "0403850394",
      id: 3
  },
  {
      name: "Charles Babbage",
      number: "0394023439",
      id: 4
  },
  {
      name: "John von Neumann", 
      number: "2438872390",
      id: 5
  }
]

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

app.get('/info', (req, res) => {
  const date = new Date().getTime()
  res.send(`<p>Phonebook has info for ${persons.length} people</p>
            <p>Date: ${new Date()}</p>`)
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)

  res.status(204).end()
})

app.post('/api/persons', (req, res) => {
  const person = req.body
  if (!person.name || !person.number) {
    return res.status(400).json({ 
      error: 'content missing' 
    })
  }
  if (persons.filter(p => p.name === person.name).length > 0) {
    return res.status(400).json({ 
      error: 'name must be unique' 
    })
  }
  person.id = Math.round(Math.random() * 1000)
  persons = persons.concat(person)
  res.json(persons)
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})