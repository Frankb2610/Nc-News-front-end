import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './components/header'
import Navbar from './components/navbar';
import ArticleList from './components/article-list'
import FullArticleCard from './components/full-article-card'



function App() {
  const [articles, setArticles] = useState([])



  
  return (
    <div className="App">
     <Header/>
     <Navbar/>
     <Routes>
      <Route path="/" element= {<ArticleList articles={articles} setArticles={setArticles} />}/>
      <Route path="/articles/:article_id" element = {<FullArticleCard />}/>
     </Routes>
    </div>
  );
}

export default App;
