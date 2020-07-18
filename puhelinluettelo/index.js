const http = require('http')

let notes = [
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
    }
  ]
  const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(notes))
  })

const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)