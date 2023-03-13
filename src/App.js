import './App.css';
import Header from './components/header'
import Navbar from './components/navbar';
import ArticleList from './components/article-list'


function App() {
  return (
    <div className="App">
     <Header/>
     <Navbar/>
     <ArticleList/>
    </div>
  );
}

export default App;
