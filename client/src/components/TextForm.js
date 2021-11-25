import { style } from "dom-helpers";
import React, { useState } from "react";


const TextForm = ({user, statusChanger }) => {
  
  
  function sendText () {
    
    let phoneNumber = 1 + user.phoneNumber
    
    //pass text message GET variables via query string
    fetch(`http://localhost:4000/send-text?recipient=${phoneNumber}&textmessage=Dear ${user.fullName}, Your liscnese is set to expre on 9/21`)
    .catch(err => console.error(err))
    console.log(user.fullName)
    }
    
   
  return (
    <div>
    <button onClick={sendText}>Send Text</button>
    </div>
    
  );
};

export default TextForm;

