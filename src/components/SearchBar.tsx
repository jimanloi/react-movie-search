import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../store/searchSlice";
import type { RootState } from "../store/store";

const SearchBar = () => {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.search.query);
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="search"
        className="form-control"
        name="searchInput"
        id="searchInput"
        placeholder="Search"
        value={query}
        style={{ maxWidth: "80vw", justifySelf: "center" }}
        onChange={(e) => dispatch(setQuery(e.target.value))}
      />
    </form>
  );
};

export default SearchBar;
