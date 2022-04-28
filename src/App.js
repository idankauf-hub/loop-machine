import logo from "./logo.svg";
import "./App.css";
import tracks from "./tracks";
import Channel from "./Comps/channel/Channel";
import ControlButtons from "./Comps/controlButtons/ControlButtons";
import React, { useState, useEffect, useRef } from "react";
import { TrackingSlider } from "./Comps/trackingSlider/TrackingSlider";

function App() {
  const [isPlay, setIsPlay] = useState(false);
  const [stopSelected, setStopSelected] = useState(false);
  const [loopSelected, setLoopSelected] = useState(false);

  const isPlaying = (data) => {
    setIsPlay(data);
    // return data;
  };
  const isStoped = (data) => {
    setStopSelected(data);
  };
  const isLoop = (data) => {
    setLoopSelected(data);
  };

  return (
    <div className="App">
      <ControlButtons
        tracks={tracks}
        isPlaying={isPlaying}
        isStoped={isStoped}
        isLoop={isLoop}
      />
      {tracks?.map((track, index) => {
        return (
          <Channel
            key={index}
            track={track}
            isPlaying={isPlay}
            isStoped={stopSelected}
            isLoop={loopSelected}
          />
        );
      })}
    </div>
  );
}

export default App;
