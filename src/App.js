import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";
import { Route,Link } from "react-router-dom";

function App() {
  return (
    <section>
      <h1>Danh sách công việc</h1>
      <div>
        <Link to="/todos">To do</Link>
        <Link to="/album">Album</Link>
      </div>
      <Route path="/todos" component={TodoFeature}></Route>
      <Route path="/album" component={AlbumFeature}></Route>
    </section>
  );
}

export default App;
