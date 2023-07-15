import { Link } from "react-router-dom";


const Footer = () => {
  const categories = ["AI", "Tech", "Sports", "Billionaries", "Innovation", "Leadership", "Money", "Lifestyle"]
  return (
    <div className="text-white mt-12 pr-0 pl-0 bg-slate-800 w-full h-64">
      <div className="pt-10 pl-12 flex items-end justify-start">
        <Link to="/">
          <h1 className="text-2xl font-black font-playfair text-center">
            Foster News
          </h1>
        </Link>
        <div className="flex pl-16 gap-10 cursor-pointer">{categories.map((category, i) => {
          return (<div key={i} className="font-merri">{category}</div>)
        })}</div>
      </div>
      
    </div>
  )
}

export default Footer