
function CommentCard(props) {
   const {comment} = props;
   
   const handleClick = (event) => {
        console.log(`voted for article ${comment.comment_id}`)
    }
   

   
    return (
	
     	<li className="comment-card">
			
		<h4>{comment.author}</h4>
		<p>{comment.body}</p>
        <p>Posted: {comment.created_at}</p>
        <footer>
         
             <button onClick ={handleClick} >vote</button>
            <p>Votes: {comment.votes}</p>
        </footer>
		
	
		</li>
					
			
	)
    
}

export default CommentCard;