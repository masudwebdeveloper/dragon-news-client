import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../constexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast'

const Register = () => {
   const [error, setError] = useState();
   const [accepted, setAccepted] = useState(false);
   const { createUser, updateUserPorife, verifyEmail } = useContext(AuthContext);

   const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photoURL = form.photourl.value;
      const email = form.email.value;
      const password = form.password.value;
      // console.log(name, email, password);
      createUser(email, password)
         .then(result => {
            const user = result.user;
            form.reset();
            setError('');
            handleUpdateUserProfile(name, photoURL)
            handleEmailVerification();
            toast.success('please verify your email')
            console.log(user);
         })
         .catch(e => {
            setError(e.message)
         })
   }

   const handleUpdateUserProfile = (name, photoURL) => {
      const profile = {
         displayName: name,
         photoURL: photoURL
      }
      updateUserPorife(profile)
         .then(() => { })
         .catch(error => console.error(error))
   }

   const handleEmailVerification = () => {
      verifyEmail()
         .then(() => {})
         .catch(error => console.error(error))
   }

   const handleSelected = (event) => {
      setAccepted(event.target.checked)
      console.log(event.target.checked);
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
            <Form.Check onClick={handleSelected} type="checkbox" label={<>Accept <Link to='/terms'>terms and conditions</Link></>} />
         </Form.Group>
         <Button variant="primary" type="submit" disabled={!accepted}>
            Submit
         </Button>
         <br />
         <Form.Text className='text-danger'>
            {error}
         </Form.Text>
      </Form>
   );
};

export default Register;