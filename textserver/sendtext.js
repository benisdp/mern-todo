const express = require('express')
const cors = require('cors')
const twilio = require('twilio')

//twilio requirements


const accountSid = 'ACcb1e99ee4228c6479168e1777d6e1e0e'
const authToken = 'a4eb4ba19d64d3502f6e19e7850fe15f'

const client = require('twilio')(accountSid, authToken);


const app = express() //alias

app.use(cors()) //blocks browser from restricting any data

//Welcome Page for server

app.get('/', (req, res) => {
    res.send('Welcome to the express server')
})


//must have nodemon installed, http://localhost:4000

app.listen(4000, ()=> console.log("listeningfor4000"))


app.get("/send-text", (req, res) =>{

    //_GET variables, passed via query string 
    const {recipient, textmessage} = req.query
//send text
client.messages.create({
    body: textmessage,
    to: "+1" + recipient, //Text this number
    from: '+12082146098' //From a valid Twilio number
    
}).then((message) => console.log(message.body))

})
