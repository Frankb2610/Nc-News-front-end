import axios from "axios";

const newsApi = axios.create({baseURL: 'https://franks-news.onrender.com/api'})

export const getArticles = () => {
    return newsApi.get('/articles')
    .then(({data}) => {
       
        return data.articles
    })
}