import { useSelector } from "react-redux";
import "./App.css";
import MovieCards from "./components/MovieCards";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";
import type { RootState } from "./store/store";

const App = () => {
  const searchQuery = useSelector((state: RootState) => state.search.query);
  return (
    <>
      <Title titleText="Movies" />
      <SearchBar />
      <MovieCards searchQuery={searchQuery} />
    </>
  );
};

export default App;
