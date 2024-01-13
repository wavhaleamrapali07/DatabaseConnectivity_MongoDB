const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://wavhaleamrapali3:FPA9YFimsXAshN4q@cluster0.5m93vic.mongodb.net/?retryWrites=true&w=majority')
.then(() => {

    console.log('connected')

})
.catch((error) => {

    console.log('Error', error)
})