import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login(props) {
  const navigate = useNavigate()
return(  
    <div className='text-container'>
    <form className='form'>
      <div className='mb-3'>
      <h1 className='display1'>Login</h1>
      </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
<button type="submit" className="form-button" onClick={()=>{
  navigate('/')
}} >Login</button>
</form>
</div>
)
}
