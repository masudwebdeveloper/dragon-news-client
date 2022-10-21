import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../constexts/AuthProvider/AuthProvider';

const Login = () => {
   const { userLogin } = useContext(AuthContext);
   const [checkbox, setCheckbox] = useState(true)
   const navigate = useNavigate();
   const handleSubmit = (event) => {
      event.preventDefault()
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      userLogin(email, password)
         .then(result => {
            const user = result.user;
            console.log(user);
            navigate('/');
         })
      .catch(e=>console.error(e))
   }

   const handleChekMark = () => {
      setCheckbox(!checkbox)
   }
   return (
      <Form onSubmit={handleSubmit}>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name='email' type="email" placeholder="Enter email" required/>
            
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' type="password" placeholder="Password" required/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onClick={handleChekMark} type="checkbox" label="Check me out" />
         </Form.Group>
         <Button variant="primary" type="submit" disabled={checkbox}>
            Submit
         </Button>
      </Form>
   );
};

export default Login;