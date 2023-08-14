import "./App.css";
import backgroundImage from "./assets/lol.jpeg";

function App() {
  // if undo my changes, remove code starting here
  const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    minHeight: "100vh",
  };
  // to here

  return <div className="App" style={appStyle}></div>; //dont forget to remove the style here as well
}

export default App;
