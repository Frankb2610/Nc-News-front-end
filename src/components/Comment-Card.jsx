
function CommentCard(props) {
   const {comment} = props;
   

   

   
    return (
	
     	<li className="comment-card">
			
		<h4>{comment.author}</h4>
		<p>{comment.body}</p>
        <footer>
            <p>Posted: {comment.created_at}</p>
            <p>Votes: {comment.votes}</p>
        </footer>
		
	
		</li>
					
			
	)
    
}

export default CommentCard;