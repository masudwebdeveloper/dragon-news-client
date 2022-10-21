import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React, { useContext } from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaTwitch, FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../constexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
   const { providerLogin } = useContext(AuthContext);

   const googleProvider = new GoogleAuthProvider()

   const handleGoogleSignIn = () => {
      providerLogin(googleProvider)
         .then(result => {
            const user = result.user;
            console.log(user);
         })
      .catch(error => console.error(error))
   }

   return (
      <>
         <ButtonGroup vertical>
            <Button onClick={handleGoogleSignIn} variant="outline-primary mb-2"><FaGoogle></FaGoogle> Login with Google</Button>
            <Button variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
         </ButtonGroup>
         <div className='mb-3'>
            <p>Find us on</p>

            <Card>
               <ListGroup>
                  <ListGroup.Item className='mb-2'><FaFacebook/> Facebook</ListGroup.Item>
                  <ListGroup.Item className='mb-2'><FaTwitter/> Twitter</ListGroup.Item>
                  <ListGroup.Item className='mb-2'><FaWhatsapp/> Whatsapp</ListGroup.Item>
                  <ListGroup.Item className='mb-2'><FaTwitch/> Twitch</ListGroup.Item>
               </ListGroup>
            </Card>
         </div>
         <div>
            <BrandCarousel></BrandCarousel>
         </div>
      </>
   );
};

export default RightSideNav;