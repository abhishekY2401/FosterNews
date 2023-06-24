import { useLocation } from "react-router-dom";

const Article = () => {
  const location = useLocation();
  const {article} = location.state;

  const {title, content, img_url} = article;
  const heading = title.replace("'", " ");

  return (
    <div>
      <div className="h-72 flex justify-center items-center bg-black pr-72 pl-72">
        <p className="text-white font-playfair text-center text-5xl">{heading}</p>
      </div>
      <div className="pr-60 pl-60 flex flex-col justify-between gap-10">
        <div className="pt-10 flex items-center gap-2 text-black text-base font-quicksand">
          <p></p>
          <hr className="h-0.5 w-2 bg-black" />
          <p>{new Date().getFullYear()}</p>
        </div>
        
        <hr className="h-0.5 font-bold bg-gray-400"/>
        <div>
            <img src={img_url} alt="imgs" className="w-full filter contrast-150"/>
        </div>
        <div className="font-play text-xl font-normal">{content}</div>
      </div>
    </div>
  )
}

export default Article