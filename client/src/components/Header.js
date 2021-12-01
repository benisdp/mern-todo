import React, {Component} from "react"
import { Button } from 'react-bootstrap';
import { useEffect, useState} from "react"
import TextForm from "./TextForm";



function Header(users, sendText){


    return(
        <div style={{display: 'flex', alignItems: 'center', alignItems:'stretch', alignContent:'center'}}>
        
            <div style={{
                display:'flex', 
                flexGrow: '1', 
                justifyContent:'center', 
                alignItems:'center' }}>
                    <a href="gord">
                    <button
                    style={{
                    display:'flex', 
                    flexGrow: '2', 
                    justifyContent:'center', 
                    alignItems:'center',
                    blockSize: 'auto',
                    height: '60px', 
                    backgroundColor: 'black', 
                    color: 'white', 
                    border: '2px solid #4CAF50',}
                    }>Create Text Message</button>
                    </a>
            </div>

            <div style={{display:'flex', flexGrow: '1', justifyContent:'center',alignContent:'center', alignItems:'center' }}>
                <img src="assets/logo.jpg" alt="security usa" />
            </div>
            
            <div style={{
                display:'flex', 
                flexGrow: '1', 
                justifyContent:'center', 
                alignItems:'center' }}>
                    <a href="gord">
                    <button
                    style={{
                    display:'flex', 
                    flexGrow: '2', 
                    justifyContent:'center', 
                    alignItems:'center',
                    blockSize: 'auto',
                    height: '60px', 
                    backgroundColor: 'black', 
                    color: 'white', 
                    border: '2px solid #4CAF50',}
                    }>Create Text Message</button>
                    </a>
            </div>

            <div style={{
                display:'flex', 
                flexGrow: '1', 
                justifyContent:'center', 
                alignItems:'center' }}>
                    <a href="gord">
                    <button
                    style={{
                    display:'flex', 
                    flexGrow: '2', 
                    justifyContent:'center', 
                    alignItems:'center',
                    blockSize: 'auto',
                    height: '60px', 
                    backgroundColor: 'black', 
                    color: 'white', 
                    border: '2px solid #4CAF50'}
                    }>Send Text to All</button>
                    </a>
            </div>

            
        </div>
//         <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
//     <h1> I am centered </h1>
// </div>
    )
}

export default Header