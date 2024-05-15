import ListNews from "./articles/ListNews"
import Latest from "./articles/Latest";
import Categories from "./articles/Categories";

const Home = () => {
  return (
    <>
      <Categories />
      <div className="flex flex-wrap justify-between items-start pl-32 pr-32">
        <ListNews />
      </div>
    </>
  )
}

export default Home;