import { useState, useEffect } from "react";
import axios from "axios";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const URLForTopNews = "https://gnews.io/api/v4/top-headlines";
const API_KEY = import.meta.env.VITE_APP_NEWS_API_KEY

const Latest = () => {
  const [topArticles, setTopArticles] = useState([]);

  useEffect(function effectFunction() {
    async function fetchTopArticles() {
      const res = await axios.get(URLForTopNews, {
        params: {
          category: "Business",
          apikey: API_KEY,
          lang: "en",
          country: "us",
          max: 20,
        },
      });
      setTopArticles(res.data.articles);
    }

    fetchTopArticles();
    console.log(topArticles);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? topArticles.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === topArticles.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (newsIndex) => {
    setCurrentIndex(newsIndex);
  };

  return (
    <>
      {topArticles && topArticles.length && (
        <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
          <Link
            to={`/${new Date(
              topArticles[currentIndex].publishedAt
            ).getFullYear()}/${topArticles[currentIndex].title.replaceAll(
              ",",
              "-"
            )}`}
            state={{ article: topArticles[currentIndex] }}
          >
            <img 
              src={`${topArticles[currentIndex].image}`} alt="img"
              className="w-full h-full rounded-2xl bg-cover duration-500"
            />
          </Link>

          <div className="hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y-[50%] left-10 rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          <div className="hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y-[50%] right-10 rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="absolute top-28 left-16 bg-white p-2 w-32 text-center font-kanit rounded-3xl">
            Sports
          </div>
          <div className="absolute p-12 top-2/3 left-28 right-28 bg-white">
            <div className="flex font-libre text-xs text-gray-400 pb-6">
              <div>{topArticles[currentIndex].source.name}</div>
              &nbsp; &nbsp;
              <span>
                <hr className="h-0.5 w-4 mt-2 bg-gray-300" />
              </span>
              &nbsp; &nbsp;
              <div>
                {new Date(topArticles[currentIndex].publishedAt).getUTCFullYear()}
              </div>
            </div>
            <div className="font-lora">
              <div className="text-5xl text-gray-800">
                {topArticles[currentIndex].title}
              </div>
              <div className="text-sm text-gray-400 mt-5">
                {topArticles[currentIndex].description}
              </div>
            </div>
          </div>

          <div className="flex top-4 justify-center py-2">
            {topArticles.map((news, newsIndex) => {
              <div
                key={newsIndex}
                onClick={() => goToSlide(newsIndex)}
                className="text-2xl cursor-pointer"
              ></div>;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Latest;
