const Latest = () => {
  const news = {
    category: "Sports",
    image:
      "https://e1.365dm.com/15/10/768x432/sanzar-rugby-on-sky-rugby-union_3366258.jpg?20151020121945",
    author: "Anna Mercury",
    date: "January 11, 2022",
    title: "Herschel Walker leads Hawks celebration as Bulldogs beat Spartans",
    description:
      "Herschel Walker was the star freshman running back on Hawks when he led the bull dogs to their last national championship in 1980.",
  };

  return (
    <div className="relative mt-20">
      <img src={news.image} className="w-screen rounded-xl" alt="rugby" />
      <div className="absolute top-10 left-10 bg-white p-2 w-32 text-center font-kanit rounded-3xl">
        {news.category}
      </div>
      <div className="absolute p-20 top-96 left-28 right-28 bg-white ">
        <div className="flex font-libre text-xs text-gray-400 pb-6">
          <div>{news.author} </div>
          &nbsp; &nbsp; <span> <hr className="h-0.5 w-4 mt-2 bg-gray-300"/></span> &nbsp; &nbsp;
          <div>{news.date}</div>
        </div>
        <div className="font-lora">
          <div className="text-5xl text-gray-800 ">{news.title}</div>
          <div className="text-sm text-gray-400 mt-5">{news.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
