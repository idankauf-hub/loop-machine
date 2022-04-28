import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import "./channel.scss";
import React, { useState, useEffect, useRef } from "react";

export default function Channel({ track, isPlaying, isLoop, isStoped,setBiggestSample }) {
  const audioRef = useRef(new Audio(track.audio));
  const [clicked, setClicked] = useState(false);

  const isMute = () => {
    audioRef.current.muted = !audioRef.current.muted;
    setClicked(audioRef.current.muted);
  };

  useEffect(() => {
    setBiggestSample((biggest)=>{
        const duration = audioRef.current.duration;
        const biggestDuration = biggest
          ? biggest.current.currentTime
          : 0;
        biggest = duration > biggestDuration ? audioRef : biggest;
        return biggest;
    })

    if (isLoop) {
      audioRef.current.loop = true;
      audioRef.current.play();
    } else {
      audioRef.current.loop = false;
    }
    if (isPlaying) {
      audioRef.current.play();
    } else if (isStoped) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, isLoop, isStoped]);
  return (
    <div style={{ backgroundColor: track.color }} className="channel">
      <h3>{track.title}</h3>
      <Stack direction="row" spacing={0} alignItems="center" borderRadius={20}>
        <Switch onClick={isMute} onChange={(e) => setClicked(!clicked)} />
        <strong className={`mute ${clicked ? "white" : "black"}`}>Mute</strong>
      </Stack>
    </div>
  );
}
