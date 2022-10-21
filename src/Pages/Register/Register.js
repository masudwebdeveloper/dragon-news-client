import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../constexts/AuthProvider/AuthProvider';

const Register = () => {
   const { createUser } = useContext(AuthContext);

   const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photoUrl = form.photourl.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name, email, password);
      createUser(email, password)
         .then(result => {
            const user = result.user;
            console.log(user);
         })
      .catch(e=>console.error(e))
   }
   return (
      <Form onSubmit={handleSubmit}>
         <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control name='name' type="text" placeholder="Enter Your name" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicPhotoURL">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control name='photourl' type="text" placeholder="Enter your photo url" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name='email' type="email" placeholder="Enter email" required />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' type="password" placeholder="Password" required />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
         </Form.Group>
         <Button variant="primary" type="submit">
            Submit
         </Button>
      </Form>
   );
};

export default Register;