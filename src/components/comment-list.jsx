import { useEffect} from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsById } from "../utils/API";
import CommentCard from "./Comment-Card";


function CommentList({comments, setComments}) {

    const { article_id } = useParams();
   
   
  

        
        useEffect(() => {
         
            fetchCommentsById(article_id).then((commentData)=> {
              
              setComments(commentData)
            
            })
          }, [article_id, setComments]) 
    
        
        if (!comments.length) {
          <p>No Comments</p>

        } else {
          return (
            <section >
              
               <ul className="comment-list">
                {comments.map((comment) => {
                  return (
                   <CommentCard 
                   key = {comment.comment_id}
                   comment = {comment}
                   />
                  );
                      })}
              </ul>
              
                
            </section>
            )
        }
      
    }
    
    export default CommentList;