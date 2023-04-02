import Content from "./components/content/content";
import Header from "./components/header/header";
import MainBar from "./components/toolbar/mainBar";
import "./styles/app.scss";
import "./styles/toolbar.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <Content />
        <MainBar />
      </div>
    </div>
  );
}

export default App;
