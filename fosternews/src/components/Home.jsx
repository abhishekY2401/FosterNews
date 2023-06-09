import News from "./articles/News"
import Latest from "./articles/Latest";

const Home = () => {
  return (
    <>
      <Latest />
      <div className="flex flex-wrap justify-between items-start">
        <News />
      </div>
    </>
  )
}

export default Home;