import './styles/App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Navbar} from './components/Navbar/Navbar';
import { Article } from './components/Articles/Article';

interface NewsItem{
  id:string;
  title:string;
  newsSite:string;
  summary:string;
  imageUrl:string;
}

export const App: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  useEffect(()=>{
    async function loadNews() {
      try{
        const response = await axios.get<NewsItem[]>('https://api.spaceflightnewsapi.net/v3/articles');
        const newsData=response.data;
        console.log(newsData);
        setNews(newsData);
      }catch(error){
        console.error('Error fetching news:', error);
      }
    }
    loadNews();
  }, []);
  return(
    <> 
    <Navbar/>
    <section id='articles'>
      {news.map((article)=>{
        return(
          <Article
            key={article.id}
            title={article.title}
            provider={article.newsSite} 
            description={article.summary}
            thumbnail={article.imageUrl}
          />
        );  
      })}
    </section>
    </>
  );
}
export default App;
