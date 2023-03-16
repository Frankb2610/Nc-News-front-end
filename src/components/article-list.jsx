import {useState, useEffect} from "react";
import { getArticles } from "../utils/API.js";

import ArticleCard from "./article-card";




function ArticleList(props) {

const {articles, setArticles} = props
const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        setIsLoading(true);
        getArticles().then((articleData)=> {
            
          setArticles(articleData)
          
         
          setIsLoading(false)
        })
      }, [setArticles, setIsLoading]) 

    
      
    return (
    <section >
        <h4>articles</h4>
       {
       isLoading ? (<p>isLoading...</p>) :  
       (<ul className="article-list">
        {articles.map((article) => {
          return (
           <ArticleCard 
           key = {article.article_id}
           article = {article}
           />
          );
			  })}
      </ul>) 
      }
        
    </section>
    )
}

export default ArticleList;