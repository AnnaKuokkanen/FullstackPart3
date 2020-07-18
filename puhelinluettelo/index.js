const express = require('express')
const app = express()

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
  }
]

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)