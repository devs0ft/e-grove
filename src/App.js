import "./App.css";
import Aside from "./components/SideBar/Aside";
import Home from "./components/Recommended/Home";

function App() {
  return (
    <div className="flex">
      <Aside />
      <Home />
    </div>
  );
}

export default App;
