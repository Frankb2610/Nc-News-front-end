import { useEffect, useState } from "react";
import { getArticles } from "../utils.js/API";
import ArticleCard from "./article-card";




function ArticleList() {

    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] =useState(true)
    
    useEffect(() => {
        setIsLoading(true);
        getArticles().then((articleData)=> {
            
          setArticles(articleData)
         
          setIsLoading(false)
        })
      }, []) 

      console.log(articles, "articles")
      
    return (
    <section className="article-list">
        <h3>articlessss</h3>
        <ul>
        <ArticleCard 
                articles={articles}
                />
        </ul>
    </section>
    )
}

export default ArticleList;