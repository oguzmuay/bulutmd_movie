import "./App.css";
import EntriesPage from "./Pages/EntriesPage/EntriesPage";
import HomePage from "./Pages/HomePage/HomePage";
import {
  Routes,
  Route,
} from "react-router-dom";
import data from "./sample.json";


function App() {
  const entryData = {
    movies: data.entries.filter((e) => {
      return e.programType === "movie";
    }),
    series: data.entries.filter((e) => {
      return e.programType === "series";
    }),
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage data={entryData}/>} />
        <Route path="entries">
          <Route path="movies" element={<EntriesPage type={"movies"} data={entryData}/>}/>
          <Route path="series" element={<EntriesPage type={"series"} data={entryData}/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
