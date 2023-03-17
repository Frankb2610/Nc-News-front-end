import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleArticle } from "../utils/API";
import CommentList from "./comment-list";
import { voteForArticle } from "../utils/API";


function FullArticleCard() {
    
  const [isLoading, setIsLoading] = useState(true)
  const [singleArticle, setSingleArticle] = useState({});
  const [userVote, setUserVote] = useState(0)
  const [isVotingError, setIsVotingError] = useState(false)
  

  const { article_id } = useParams();
   
   
    
    useEffect(() => {
      setIsVotingError(false)
      setIsLoading(true);
      fetchSingleArticle(article_id).then((article) => {
        
        setSingleArticle(article);
        setIsLoading(false);
      });
    }, [article_id]);

    const handleClick = (event) => {
      setUserVote(1)
      voteForArticle(article_id, 1).catch((error) => {
        console.log(error)
        setUserVote(0)
        setIsVotingError(true)
      })
  
        
      }
  


  
 
  
   
  
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
            <li>Number of Votes: {singleArticle.votes + userVote}</li>
            <button onClick={handleClick} disabled={userVote !== 0}>Like</button>

          </ul>
          <h6>Comments</h6>
        <CommentList/>
                 
       </section>
      
       

     
    
    
     
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