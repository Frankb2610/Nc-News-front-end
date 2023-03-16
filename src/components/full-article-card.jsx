import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleArticle } from "../utils/API";
import { Link } from "react-router-dom";

function FullArticleCard(props) {
    
    const {isLoading, setIsLoading} = props
    const { article_id } = useParams();
    console.log(article_id)
    const [singleArticle, setSingleArticle] = useState({});
    useEffect(() => {
      setIsLoading(true);
      fetchSingleArticle(article_id).then((article) => {
        console.log(article)
        setSingleArticle(article);
        setIsLoading(false);
      });
    }, []);

    console.log(singleArticle.article_img_url)
   
  
    const renderArticle= (singleArticle) => {
        return (
        <div>
            <main className="main-article-section">
        <h3 className = "article-title" >{singleArticle.title}</h3>
        <h5 className="topic"> {singleArticle.topic}</h5>
        <p className = "article-body"> {singleArticle.body}</p>
        <img className = "article-image" src={singleArticle.article_img_url} alt=""></img>
       </main>
       <section className= "article-info-section">
          <ul className="article-info">
            <li>By {singleArticle.author}</li>
            <li>Written {singleArticle.created_at}</li>
            <li>Number of Votes: {singleArticle.votes}</li>
          </ul>
       </section>
       <footer>
        <button> <Link to={'/comments'}>Read Comments</Link></button>
        
       </footer>
        </div>
      
     
        )
    
    }
   return isLoading ? (
    <h1> Loading...</h1>
  ) : (
    <section id="full-article-card">{renderArticle(singleArticle)}</section>
    
  );
}

export default FullArticleCard;