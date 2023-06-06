const News = () => {
  const article = {
    image:
      "https://media.gq-magazine.co.uk/photos/5d13a4d5003d756ecdae71db/master/pass/lionel-messi-gq-14feb18_getty_b.jpg",
    author: "Carlos Garcia",
    date: "March 24, 2023",
    title: "The Life of a Sunday League Football Player",
  };
  return (
    <div className="flex flex-col w-96">
      <img
        src={article.image}
        className="w-96 h-68 rounded-lg"
        alt="football"
      />
      <div className="pt-10 pb-10">
        <div className="font-libre flex text-xs text-gray-500">
          <p>{article.author} </p>
          <p>&nbsp;&nbsp;-&nbsp; {article.date} &nbsp;&nbsp;&nbsp;</p>
        </div>
        <div className="font-lora text-2xl text-gray-700 mt-2">
          {article.title}
        </div>
      </div>
    </div>
  );
};

export default News;
