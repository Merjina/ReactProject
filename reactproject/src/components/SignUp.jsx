import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap';


function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  const navigate = useNavigate();
  return (
    <div className='d-flex justify-content-center align-item-center min-vh-100 shadow-lg' style={{ background: 'linear-gradient(360deg, #E907DA,#00d2ff )', border: 'none' }}>

      <Card className='mb-5 shadow-sm text-center mt-5' style={{ width: '30rem', height: '35rem' }}>
        <Card.Body>
          <Card.Title className='text-center'>Sign Up</Card.Title>
          
          <Card.Text>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>

                <label htmlFor="FirstName" className='d-flex mt-4'>First Name</label>
                <input
                  type="text"
                  className='d-flex form-control  shadow-lg rounded-0'
                  id="FirstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />

                <label htmlFor="LastName" className='d-flex mt-1'>Last Name</label>
                <input
                  type="text"
                  className='d-flex form-control shadow-lg rounded-0'
                  id="LastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />


                <label htmlFor="email" className='d-flex mt-1'>Email</label>
                <input
                  type="text"
                  className='d-flex form-control shadow-lg rounded-0'
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor='password' className='d-flex'>Password</label>
                <input
                  type='password'
                  className='d-flex  form-control shadow-lg rounded-0'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />


                <label htmlFor='cpassword' className='d-flex '>Confirm Password</label>
                <input type="password"
                  className='d-flex  form-control  shadow-lg rounded-0'
                  id='cpassword'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />



              </div>
              <button type='submit' className='btn btn-primary'>Register</button>
            </form>
          </Card.Text>
          <Card.Text>Create an account or <span><a href="/login">sign In</a></span></Card.Text>
        </Card.Body>
      </Card>

    </div>
  )
}

export default SignUp
