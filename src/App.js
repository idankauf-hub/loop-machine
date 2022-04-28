import logo from "./logo.svg";
import "./App.css";
import tracks from "./tracks";
import Channel from "./Comps/channel/Channel";
import ControlButtons from "./Comps/controlButtons/ControlButtons";
import React, { useState, useEffect, useRef } from "react";
import TrackingSlider from "./Comps/trackingSlider/TrackingSlider";
import { width } from "@mui/system";

function App() {
  const [isPlay, setIsPlay] = useState(false);
  const [stopSelected, setStopSelected] = useState(false);
  const [loopSelected, setLoopSelected] = useState(false);
  const [biggestSample, setBiggestSample] = useState(null);

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
      <div style={{ width: "690px",margin:"auto" ,padding:"5px"}}>
        <TrackingSlider audioRef={biggestSample} />
      </div>
      {tracks?.map((track, index) => {
        return (
          <Channel
            key={index}
            track={track}
            isPlaying={isPlay}
            isStoped={stopSelected}
            isLoop={loopSelected}
            setBiggestSample={setBiggestSample}
          />
        );
      })}
    </div>
  );
}

export default App;
