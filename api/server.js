const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/react-todos', {
	useNewUrlParser: true, 
	useUnifiedTopology: true 
}).then(() => console.log("Connected to MongoDB")).catch(console.error);

// Models
const Todo = require('./models/Todo')
const User = require('./models/User');
const Borgis = require('./models/Borgis');


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


app.post('/todo/new', (req, res) => {
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
	user.save();
	res.json(user);
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

app.put('/todo/update/:id', async (req, res) => {
	const todo = await Todo.findById(req.params.id);

	todo.text = req.body.text;

	todo.save();

	res.json(todo);
});

app.listen(3005, () => console.log("Connected on Port 3005"));


