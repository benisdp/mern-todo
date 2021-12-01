import React, {useState} from "react";

const TextForm = ({user, users, statusChanger }) => {

  const [textSentNumber, setTextSentNumber] = useState(1)
  
  function sendTextToAll(){
    // console.log(users);
    users.map(element => {
      sendText1(element); 
      // console.log(element);     
    });
  }

  function sendText1 (user) {
    const timeValue = () => {
      let date = new Date().toLocaleString()
      return date
    }
    let phoneNumber = 1 + user.phoneNumber
    //pass text message GET variables via query string
    fetch(`http://localhost:3007/send-text?recipient=${phoneNumber}&textmessage=Dear${user.fullName}, Your liscnese is set to expre on 9/21`)
    .catch(err => console.error(err))
    console.log(user.name)
    setTextSentNumber(timeValue)
   }

  function sendText () {
    const timeValue = (stamp) => {
      let date = new Date().toLocaleString()
      return date
    }
    let phoneNumber = 1 + user.phoneNumber
    //pass text message GET variables via query string
    fetch(`http://localhost:3007/send-text?recipient=${phoneNumber}&textmessage=Dear${user.fullName}, Your liscnese is set to expre on 9/21`)
    .catch(err => console.error(err))
    console.log(user.fullName)
    setTextSentNumber(timeValue)
   }

   function arrayData() {
		const gord = "testo"
    user.textHistory.push(gord);
	}

    
   
  return (
    <div>
        <button onClick={sendText}>Send Text</button>
        <button onClick={sendTextToAll}>Send to all</button>
        <h1>{textSentNumber}</h1>
        <button onClick={arrayData}>add to date</button>
    </div>
    
  );
};

export default TextForm;

