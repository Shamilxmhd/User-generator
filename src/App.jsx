import {  Card } from 'react-bootstrap'
import { useState, useEffect } from "react";
import './App.css'
import axios from 'axios'



function App() {
  const [user, setUser] = useState([]);

  const getuser = async () => {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    console.log(data);
    const usersArray = data.users;
    console.log(usersArray);
    setUser(usersArray[Math.floor(Math.random() * 30) + 1]);

  };
  
  return (
  < div style={{}} className='col d-flex justify-content-center align-items-center'>
      
      <div className='mt-5'>
      <h1 style={{marginLeft:'200px'}} className='mt-5 mb-5 fw-bolder' > Random User Generator</h1 >
        <div className='row d-flex justify-content-center'>
          <img className="" style={{ width: '380px', height: '380px' }} src={user.image} alt="user image" />
          <Card className='shadow rounded' style={{ width: '30rem',backgroundColor:'pink' }}>
            <Card.Body className='text-center'>
              <h2>   {user.firstName} {user.lastName} <span>({user.gender})</span></h2>
              <h4>Age :{user.age} </h4>
              <h4>Birth Date :{user.birthDate} </h4>
              <h4>Weight : {user.weight}kg</h4>
              <h4>Height : {user.height}cm</h4>
              <h4>Phone :  {user.phone}</h4>
              <h4>Address : {user.address ? user.address.address : "N/A"}</h4>
              
              <h4>Email :  {user.email}</h4>
              <button onClick={getuser} className='btn btn-success mt-2 ms-5  rounded-2 border-1'>Refresh</button>
             </Card.Body>
             
          </Card>
        </div>
      </div>


    </div >
  )
}

export default App
