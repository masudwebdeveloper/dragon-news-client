import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaBookmark, FaEye, FaShareAlt, FaStar} from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
   const { _id, author, title, image_url, total_view, details, rating } = news;
   const { name, published_date, img } = author;
   return (
      <Card className="mb-5">
         <Card.Header className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
               <Image
                  src={img}
                  style={{ height: '60px' }}
                  className='me-3'
                  roundedCircle
               ></Image>
               <div>
                  <p className='m-0'>{ name}</p>
                  <p className='m-0'>{ published_date}</p>
               </div>
            </div>
            <div>
               <FaBookmark className='me-3'></FaBookmark>
               <FaShareAlt></FaShareAlt>
            </div>
         </Card.Header>
         <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Img variant="top" src={image_url} />
            <Card.Text>
               {
                  details.length > 200 ?
                     <p>
                        {details.slice(0, 250) + '...'}<Link to={`/news/${_id}`}>Read More</Link>
                     </p>
                     :
                     <p>
                        {details}
                     </p>
               }
            </Card.Text>
         </Card.Body>
         <Card.Footer className="d-flex justify-content-between align-items-center">
            <div>
               <FaStar className='text-warning me-2'></FaStar>
               <span>{ rating.number}</span>
            </div>
            <div>
               <FaEye className='me-2'></FaEye>
               <span>{ total_view}</span>
            </div>
         </Card.Footer>
      </Card>
   );
};

export default NewsSummaryCard;