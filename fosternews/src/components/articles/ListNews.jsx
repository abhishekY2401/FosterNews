import {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../assets/loader.json"
import animationError from "../../assets/error.json";

// const URL = "https://gnews.io/api/v4/search"
const URL = "http://127.0.0.1:5000/all_news"
// const API_KEY = import.meta.env.VITE_APP_NEWS_API_KEY


const ListNews = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const defaultOptionsErr = {
    loop: true,
    autoplay: true,
    animationData: animationError,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const [news, setNews] = useState([]);
  const [err, setErr] = useState(false);

 

  useEffect(function effect() {
      async function fetchArticles() {
        try {
          const res = await axios.get(URL,{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*"
          });
          console.log(res.data.articles);
          setNews(res.data);
          setErr(false);
          localStorage.setItem('news', JSON.stringify(res.data))
        } catch (err) {
          setErr(true)
        }
        
      }

    fetchArticles();
    console.log(news);
  }, [])

  useEffect(() => {
    const article = JSON.parse(localStorage.getItem('news'));
    if (article) 
      setNews(article)
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
    <> {err ? (<div className="m-auto"><Lottie 
        options={defaultOptionsErr}
        height={400}
        width={800}
      /></div>) : news.articles && news.articles.length ? (
      news.articles.map((live_news) => {
        return (
          live_news.map((articles, k) => {
            return (
              <div key={k} className="pt-32 flex flex-col w-96">
          <div className="font-kanit absolute flex items-center justify-center mt-5 ml-5 pl-8 pr-8 h-10 bg-white rounded-3xl">{live_news.category}</div>
          <Link to={`/${articles.title}`} state={{ "article": articles }}>
            <img
              src={articles.images}
              className="w-96 h-72 rounded-2xl object-fill"
              alt={articles.title}
            />
          </Link>
          <div className="pt-10 pb-10">
            <div className="font-libre flex text-xs text-gray-500">
              <p>{articles.author}&nbsp;&nbsp;-&nbsp; {new Date().getFullYear()} &nbsp;&nbsp;&nbsp;</p>
            </div>
            <div className="font-lora text-2xl text-gray-700 mt-2">
              {articles.title}
            </div>
            <div className="font-playfair text-base text-gray-600 mt-2"></div>
          </div>
          
        </div>
            )
          })
        
      )
       
      })
    ) : (
      <Lottie 
        options={defaultOptions}
        height={400}
        width={400}
      />
    )}
    </>
  );  
};

export default ListNews;
