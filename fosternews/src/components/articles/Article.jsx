import { useLocation } from "react-router-dom";
import bookmark from "../../assets/bookmark.svg";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";


const Article = () => {
  const location = useLocation();
  const { article } = location.state;

  const { title, source, author, content, images } = article;
  const description = content[0]
    .replace("[", " ")
    .replace("'", " ")
    .replace(")", " ")
    .replace("(", " ")
    .replace(",", " ")
    .replace("]", " ")
    .replace('"', " ")
    .replace("'", " ")
    .replace('"', " ")
    .replace('"', " ")
    .replace("“", " ")
    .replace("”", " ");

  const heading = title.replace("'", " ");

  return (
    <div>
      <div className="h-72 flex justify-center items-center bg-black pr-72 pl-72">
        <p className="text-white font-playfair text-center text-5xl">
          {heading}
        </p>
      </div>
      <div className="flex">
        <div className="pl-24 flex flex-col items-center font-kanit pt-24">
          <div className="text-xl">Share</div>
          <div className="pt-5 flex flex-col gap-4">
            <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full">
             <img src={facebook} className="w-20 h-5" alt="bookmark" />
            </div>
            <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full">
             <img src={twitter} className="w-20 h-5" alt="bookmark" />
            </div>
            <div className="flex items-center justify-center w-10 h-10 border-2 text-center border-gray-300 rounded-full">
             <img src={linkedin} className="w-20 h-5" alt="bookmark" />
            </div>
            <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full">
             <img src={bookmark} className="w-20 h-5" alt="bookmark" />
            </div>
          </div>
        </div>
        <div className="pr-60 pl-60 flex flex-col justify-between gap-10">
          <div className="pt-10 flex items-center justify-between gap-2 text-black text-base font-quicksand">
            <p>{author}&nbsp; <span>-</span> &nbsp;{new Date().getFullYear()}</p>
            <div className="font-quicksand">
              Source: {source}
            </div>
          </div>

          <hr className="h-0.5 font-bold bg-gray-400" />
          <div>
            <img
              src={images}
              alt="imgs"
              className="w-full filter contrast-150"
            />
          </div>
          <div className=" text-base font-merri tracking-wider">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
