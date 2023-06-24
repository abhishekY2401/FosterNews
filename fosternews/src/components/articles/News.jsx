import {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// const URL = "https://gnews.io/api/v4/search"
const URL = "http://127.0.0.1:5000/leadership"
// const API_KEY = import.meta.env.VITE_APP_NEWS_API_KEY


const News = () => {
  const [news, setNews] = useState([]);

  useEffect(function effect() {
      async function fetchArticles() {
        const res = await axios.get(URL,{
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*"
        });
        console.log(res.data);
        setNews(res.data);
      }

    fetchArticles();
    console.log(news);
  }, [])
  //   useEffect(function effect() {
  //     async function fetchArticles() {
  //       const res = await axios.get(URL, {
  //         params: {
  //           q: "Sports",
  //           apikey: API_KEY,
  //           lang: "en",
  //           country: "us",
  //           max: 10,
  //         },
  //       });
  //       setNews(res.data.articles);
  //     }

  //   fetchArticles();
  //   console.log(news);
  // }, []);

  return (
    <>
      {news.articles && news.articles.length && news.articles.map((article, key) => {
       return (
        <div key={key} className="pt-32 flex flex-col w-96">
        <Link to={`/${new Date().getFullYear()}/${article.title.replaceAll(",","-")}`} state={{ "article": article }}>
            <img
              src={article.img_url}
              className="w-96 h-68 rounded-lg"
              alt={article.title}
            />
          </Link>
          <div className="pt-10 pb-10">
            <div className="font-libre flex text-xs text-gray-500">
              <p>{} </p>
              <p>&nbsp;&nbsp;-&nbsp; {new Date().getFullYear()} &nbsp;&nbsp;&nbsp;</p>
            </div>
            <div className="font-lora text-2xl text-gray-700 mt-2">
              {article.title}
            </div>
            <div className="font-playfair text-base text-gray-600 mt-2"></div>
          </div>
          
        </div>
        
      )})}
    </>
  );
};

export default News;
