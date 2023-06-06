import Latest from "./articles/Latest"
import News from "./articles/News"

const Home = () => {
  return (
    <>
      <Latest />
      <div className="flex flex-wrap justify-between items-center">
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
      </div>
      
    </>
  )
}

export default Home