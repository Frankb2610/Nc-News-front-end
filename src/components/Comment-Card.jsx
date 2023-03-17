

function CommentCard(props) {
   const {comment} = props;
   

   

   
    return (
	
     	<li className="comment-card">
			
		<h4>{comment.author}</h4>
		<p>{comment.body}</p>
        <p>Posted: {comment.created_at}</p>
        <footer>
         
             
            <p>Votes: {comment.votes}</p>
        </footer>
		
	
		</li>
					
			
	)
    
}

export default CommentCard;