import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleArticle } from "../utils/API";

function FullArticleCard(props) {
    const {setIsLoading} = props
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
    }, [article_id, setIsLoading]);

   
  
    return (
    <main className="full-article-card">
        <h3>{singleArticle.title}</h3>
        <p>{singleArticle.body}</p>
    </main>
    )
}

export default FullArticleCard;