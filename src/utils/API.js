import axios from "axios";

const newsApi = axios.create({baseURL: 'https://franks-news.onrender.com/api'})

export const getArticles = () => {
    return newsApi.get('/articles')
    .then(({data}) => {
       
        return data.articles
    })
    .catch((err) => {
        console.error(err);
      });
}

export const fetchSingleArticle = (article_id) => {
    return newsApi.get('/articles/' + article_id).then(({data})=>{
        return data
    })
      .catch((err) => {
        console.error(err);
      });
  };

  export const fetchCommentsById = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`).then(({data})=>{
     
      return data
    }).catch((err)=>{
      console.error(err)
    })
    }

   

    export const voteForArticle = (article_id, votes) => {
      return newsApi.patch(`/articles/${article_id}`, { inc_votes: votes }).then(({ data }) => {
         
        return data.article
      })
  }