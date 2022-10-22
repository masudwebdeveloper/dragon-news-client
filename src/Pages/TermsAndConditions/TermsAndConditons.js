import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditons = () => {
   return (
      <div>
         <h3>Here is your terms and conditions</h3>
         <h3>Go Back to <Link to='/register'>Register</Link></h3>
      </div>
   );
};

export default TermsAndConditons;