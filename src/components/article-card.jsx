function ArticleCard(props) {
   const {articles} = props;
    return (
        <div className="article_card">
			{articles.map((article) => {
				return (
					
						<li key={article.article_id}>
							<h4>{article.title}</h4>
							<p>{article.topic}</p>
							
						</li>
					
				);
				
			})}
        </div>
		)
		
    
}

export default ArticleCard;