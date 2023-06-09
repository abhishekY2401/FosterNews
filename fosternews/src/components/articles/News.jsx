import {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const URL = "https://gnews.io/api/v4/search"
const API_KEY = import.meta.env.VITE_APP_NEWS_API_KEY


const News = () => {
  const [news, setNews] = useState([]);

    useEffect(function effect() {
      async function fetchArticles() {
        const res = await axios.get(URL, {
          params: {
            q: "Sports",
            apikey: API_KEY,
            lang: "en",
            country: "us",
            max: 10,
          },
        });
        setNews(res.data.articles);
      }

    fetchArticles();
    console.log(news);
  }, []);

  return (
    <>
      {news && news.length && news.map((articles, key) => {
       return (
        <div key={key} className="pt-32 flex flex-col w-96">
        <Link to={`/${new Date(articles.publishedAt).getFullYear()}/${articles.title.replaceAll(",","-")}`} state={{ article: articles }}>
            <img
              src={articles.image}
              className="w-96 h-68 rounded-lg"
              alt="football"
            />
          </Link>
          <div className="pt-10 pb-10">
            <div className="font-libre flex text-xs text-gray-500">
              <p>{articles.source.name} </p>
              <p>&nbsp;&nbsp;-&nbsp; {new Date(articles.publishedAt).getFullYear()} &nbsp;&nbsp;&nbsp;</p>
            </div>
            <div className="font-lora text-2xl text-gray-700 mt-2">
              {articles.title}
            </div>
            <div className="font-playfair text-base text-gray-600 mt-2">{articles.description}</div>
          </div>
          
        </div>
        
      )})}
    </>
  );
};

export default News;
