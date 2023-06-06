
const Article = () => {

    const news = {
        title: "Malaysia's 50 Richest 2023: Five Newcomers Add A Fresh Dimension To The Ranks",
        author: [
            "Naazneen Karmali", 
            "Jane Ho"
        ],
        datetime: "May 31, 2023, 05:01pm EDT",
        image: "https://imageio.forbes.com/specials-images/imageserve/64758e69f5be5860d55a26a2//1960x0.jpg?format=jpg&width=960",
        content: "After rising 8.7% in 2022 on the back of a rebound in domestic consumer spending, Malaysia's economy is expected to grow at a more moderate pace this year. Despite the country's post-pandemic revival, the stock market fell 8% since we last measured fortunes and the ringgit was also down nearly 2%. This had no impact, however, on the collective wealth of Malaysia's 50 richest, which edged up to $81.6 billion. The pecking order at the top remained unchanged from 2022. Business titan Robert Kuok, who will be a centenarian in October, is Malaysia’s richest person, a position he’s held for more than a quarter of a century. Kuok, the biggest gainer in dollar terms this year, is one of only two persons on the list with a double-digit fortune ($11.8 billion). The other is Quek Leng Chan, executive chairman of the Malaysian arm of the privately held Hong Leong Group, who's at No. 2 though his net worth rose only a tad to $10.2 billion. "
    };

  return (
    <div>
      <div className="h-72 flex justify-center items-center bg-black pr-72 pl-72">
        <p className="text-white font-playfair text-center text-5xl">{news.title}</p>
      </div>
      <div className="pr-60 pl-60 flex flex-col justify-between gap-10">
        <div className="flex flex-col text-black">
          {news.author.map((author, key) => {
            <p key={key}>{author}</p>
          })}
        </div>
        <p className="font-quicksand text-sm text-gray-600">{news.datetime}</p>
        <hr className="h-0.5 font-bold bg-gray-400"/>
        <div>
            <img src={news.image} alt="imgs" />
        </div>
        <div className="font-play text-xl font-normal">{news.content}</div>
      </div>
    </div>
  )
}

export default Article