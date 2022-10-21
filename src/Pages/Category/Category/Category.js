import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../../Shared/NewsSummaryCard/NewsSummaryCard";

const Category = () => {
   const categoryNews = useLoaderData();
   return (
      <div>
         <h4>All the category has been: {categoryNews.length}</h4>
         {
            categoryNews.map(news => <NewsSummaryCard
               key={news._id}
               news={news}
            ></NewsSummaryCard>)
         }
      </div>
   );
};

export default Category;