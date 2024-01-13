const express = require('express')
const newcompany = require('./models/company');
const app = express();

app.use(express.json())
require('./database/dbcon');

app.get('/company', async (req, res) => {

    try{

        const companyData = await newcompany.find();
        res.status(200).send(companyData)

    }catch(error){
        

        res.status(400).send(error)
        console.log(error)

    }

})


app.listen(8000, () => {

    console.log(`server is running on http://localhost:8000`);

})