import "./App.css"
import Hello from './component/Hello';
import Welcome from "./component/Welcome";
import StateTest from "./component/StateTest";
import PropsTesting from "./component/PropsTesting";

function App() {
  const name = "jason";
  const google = {
    name: "구글",
    url: "https://google.com"
  };
  return (
    <div className="App">
      <h1 style={{color: "black", backgroundColor: "green"}}>
        Hi, there {name}, <p>{1 + 5}</p>
      </h1>
      <a href={google.url}>{google.name}</a>

      <Hello />
      <Welcome />
      <StateTest />
      <PropsTesting age={24} />
    </div>
  )
}

export default App
