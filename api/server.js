const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const twilio = require('twilio')

const app = express();

app.use(express.json());
app.use(cors());

const accountSid = 'ACcb1e99ee4228c6479168e1777d6e1e0e'
const authToken = 'deaa48223e591fe9e75a57daa2fe4a0a'

const client = require('twilio')(accountSid, authToken);

mongoose.connect('mongodb://127.0.0.1:27017/react-todos', {
	useNewUrlParser: true, 
	useUnifiedTopology: true 
}).then(() => console.log("Connected to MongoDB")).catch(console.error);

// Models
const Todo = require('./models/Todo')
const User = require('./models/User');


app.get('/todos', async (req, res) => {
	const todos = await Todo.find();
	res.json(todos);
});
 
app.get('/users', async (req, res) => {
	const users = await User.find();
	res.json(users);
});



app.delete('/users/delete/:id', async (req, res) => {
	const result = await User.findByIdAndDelete(req.params.id);

	res.json({result});
});

app.put('/users/put/:id', (req, res) => {
	const { id } = req.params;
	// code to update an article...
	res.json(req.body);
  });


app.post('/todos/new', (req, res) => {
	const todo = new Todo({
		text: req.body.text
	})

	todo.save();

	res.json(todo);
});

app.post('/users/new', (req, res) => {
	const user = new User({
		name: req.body.name,
		guardId: req.body.guardId,
		phoneNumber: req.body.phoneNumber
	})
	
	res.json(user);d
});

app.delete('/todo/delete/:id', async (req, res) => {
	const result = await Todo.findByIdAndDelete(req.params.id);

	res.json({result});
});

app.get('/todo/complete/:id', async (req, res) => {
	const todo = await Todo.findById(req.params.id);

	todo.complete = !todo.complete;

	todo.save();

	res.json(todo);
})

// app.get('/users/complete/:id', async(req, res) => {
// 	const user = await 
// })

app.put('/users/update/:id', async (req, res) => {
	const user = await Todo.findById(req.params.id);
	user.textHistory.push("testage")
	user.save();
	res.json(user);
});


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


app.listen(3007, () => console.log("Connected on Port 3007"));


