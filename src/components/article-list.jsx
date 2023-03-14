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

    
      
    return (
    <section className="article-list">
        <h3>articles</h3>
       {isLoading ? (<p>isLoading...</p>) :  
       (<ul>
        <ArticleCard 
                articles={articles}
                />
        </ul>) }
        
    </section>
    )
}

export default ArticleList;