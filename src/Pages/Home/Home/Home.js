import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
   const allNews = useLoaderData();
   return (
      <div>
         <h4>All news Home page: {allNews.length}</h4>
         {
            allNews.map(news => <NewsSummaryCard
               key={news._id}
               news={news}
            ></NewsSummaryCard>)
         }
      </div>
   );
};

export default Home;