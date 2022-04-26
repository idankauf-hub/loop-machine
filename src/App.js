import logo from "./logo.svg";
import "./App.css";
import tracks from "./tracks";
import Channel from "./Comps/channel/Channel";
import ControlButtons from "./Comps/controlButtons/ControlButtons";
function App() {
  return (
    <div className="App">
      <ControlButtons />

      {tracks?.map((track, index) => {
        return <Channel track={track} />;
      })}
    </div>
  );
}

export default App;
