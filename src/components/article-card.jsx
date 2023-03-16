import { Link } from "react-router-dom"
function ArticleCard(props) {
   const {article} = props;
   

   

   
    return (
	
     	<li className="article-card">
			<Link to={`articles/${article.article_id}`}>
		<h4>{article.title}</h4>
		<p>{article.topic}</p>
		
		</Link>
		</li>
					
			
	)
    
}

export default ArticleCard;