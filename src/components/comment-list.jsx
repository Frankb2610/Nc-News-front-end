import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsById } from "../utils/API";
import CommentCard from "./Comment-Card";


function CommentList() {

    const { article_id } = useParams();
   
    const [comments, setComments] = useState([])
  

        
        useEffect(() => {
         
            fetchCommentsById(article_id).then((commentData)=> {
              
              setComments(commentData)
            
            })
          }, [article_id]) 
    
        
        if(!comments.length) {
          return (
            <section>
              <h6>comments</h6>
              <p>no comments</p>
            </section>

          )
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