// const mongoose = require('mongoose')

// if (process.argv.length<3) {
//   console.log('give password as argument')
//   process.exit(1)
// }

// const password = process.argv[2]

// const url =
//   `mongodb+srv://fullstack:${password}@cluster0.a7y7q.mongodb.net/phonebook?retryWrites=true&w=majority`

// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

// const personSchema = new mongoose.Schema({
//   name: String,
//   number: String,
//   id: Number,
// })

// const Person = mongoose.model('Person', personSchema)

// const person = new Person({
//   name: process.argv[3],
//   number: process.argv[4],
//   id : process.argv[5],
// })

// if (person.name && person.number && person.id) {
//     person.save().then(response => {
//     console.log(`added ${response.name} number ${response.number} to phonebook`)
//     mongoose.connection.close()
//     })
// } else {
//     Person.find({}).then(result => {
//         result.forEach(person => {
//             console.log(person)
//         })
//         mongoose.connection.close()
//     })
// }