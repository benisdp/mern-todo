import React from "react"
import { useEffect, useState} from "react"
import TextForm from "./TextForm";
const api_base = 'http://localhost:3005';

function Table () {
	const [users, setUsers] = useState([]);
	const [newUser, setNewUser] = useState('');
	const [newUserNumber, setNewUserNumber] = useState('');
	const [newUserGuardId, setNewUserGuardId] = useState('');

	useEffect(() => {
		GetUsers();
	}, []);

	const GetUsers = () => {
		fetch(api_base + '/users')
			.then(res => res.json())
			.then(data => setUsers(data))
			.catch((err) => console.error("Error: ", err));
			console.log(users)
	}

	const deleteUser = async id => {
		const data = await fetch(api_base + '/users/delete/' + id, { method: "DELETE" }).then(res => res.json());
		setUsers(users => users.filter(todo => todo._id !== data.result._id));
	}

	const addUser = async () => {
		const data = await fetch(api_base + "/users/new", {
			method: "POST",
			headers: {
				"Content-Type": "application/json" 
			},
			body: JSON.stringify({
				name: newUser,
				phoneNumber: newUserNumber,
				guardId: newUserGuardId
			})
		}).then(res => res.json());

		setUsers([...users, data]);
		setNewUser("");
		setNewUserNumber("")
		setNewUserGuardId("")
	}

	//NEED TO ADD THIS TO GIVE USER PARAMETERS
	// const handleAddFormSubmit = (event) => {
	// 	event.preventDefault();
	
	// 	const newContact = {
	// 	  id: nanoid(),
	// 	  fullName: addFormData.fullName,
	// 	  guardNumber: addFormData.guardNumber,
	// 	  phoneNumber: addFormData.phoneNumber,
	// 	  email: addFormData.email,
	// 	};
	
	// 	const newContacts = [...contacts, newContact];
	// 	setContacts(newContacts);
	//   };

    return(
        <div className="table">
			<div className="todos">
				<table className="table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Guard ID Number</th>
							<th>Phone Number</th>
                    		<th>Text</th>
							<th>Text History</th>
						</tr>
					</thead>
					{users.map(user => (
						<tbody>
							<td>{user.name}</td>
							<td>{user.guardId}</td>
							<td>{user.phoneNumber}</td>					
							<td>
								<button>
								<TextForm user={user}/>
								</button>
							</td>
							<td>
								{user.timestamp}
							</td>	
							<div onClick={() => deleteUser(user._id)}>x</div>
    		    	</tbody>
					))}
				</table>
				
			</div>	
			<div className="adduser">
				<tr>
					<td>
						<input placeholder="Input Full Name" type="text" onChange={e => setNewUser(e.target.value)} value={newUser}/>
					</td>
					<td>
						<input placeholder="Input Guard Number" type="text" onChange={e => setNewUserGuardId(e.target.value)} value={newUserGuardId}/>
					</td>
					<td>
						<input placeholder="Input Phone Number" type="text" onChange={e => setNewUserNumber(e.target.value)} value={newUserNumber}/>	
					</td>
					<td>
						<div className="button" onClick={addUser}>Add User</div>
					</td>
				</tr>
			</div>
		</div>
    )
}
export default Table