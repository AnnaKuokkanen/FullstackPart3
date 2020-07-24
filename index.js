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

app.get('/api/persons', (req, res, next) => {
  let persons = []
  Person.find({}).then(result => {
    result.forEach(person => {
        persons.push(person)
    })
    res.json(persons)
  })
  .catch(error => next(error))
})

app.get('/api/persons/:id', (req, res, next) => {
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

app.get('/info', (req, res, next) => {
  const date = new Date().getTime()
  let people = 0
  Person.find({})
  .then(result => {
    result.forEach(person => {
      people = people + 1
    })
    res.send(`<p>Phonebook has info for ${people} people</p>
            <p>Date: ${new Date()}</p>`)
  })
  .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
  .then(result => {
    res.status(204).end()
  })
  .catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
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
  .catch(error => next(error))
})

app.put(`/api/persons/:id`, (req, res, next) => {
  const person = req.body
  if (!person.name || !person.number) {
    return res.status(400).json({ 
      error: 'content missing' 
    })
  }
  Person.findByIdAndUpdate(req.params.id, { number: person.number })
  .then(result => {
    //console.log('LÖYTYI:', result)
    result.save().then(savedPerson => {
      //console.log('Päivitettiin', savedPerson)
      res.json(savedPerson)
    })
  })
  .catch(error => next(error))
})

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})