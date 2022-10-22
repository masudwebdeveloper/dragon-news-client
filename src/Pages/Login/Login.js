import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../constexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast'

const Login = () => {
   const [error, setError] = useState('');
   const { userLogin,setLoading } = useContext(AuthContext);
   const [checkbox, setCheckbox] = useState(true)
   const navigate = useNavigate();
   const location = useLocation();

   const from = location.state?.from?.pathname || '/';
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
            form.reset();
            setError('')
            if (user.emailVerified) {
               navigate(from, {replace: true})
            }
            else {
               toast.error('Your email not a verified')
            }
         })
         .catch(e => {
            setError(e.message)
         })
         .finnaly(() => {
         setLoading(false)
      })
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
         <br />
         <Form.Text className='text-danger'>
            {error}
         </Form.Text>
      </Form>
   );
};

export default Login;