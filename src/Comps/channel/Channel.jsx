import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import "./channel.scss";
import React, { useState, useEffect, useRef } from "react";

export default function Channel({ track, isPlaying, isLoop, isStoped }) {
  const audioRef = useRef(new Audio(track.audio));
  const [clicked, setClicked] = useState(false);

  const isMute = () => {
    audioRef.current.muted = !audioRef.current.muted;
    setClicked(audioRef.current.muted);
  };

//   const startTimer = () => {
//     // Clear any timers already running
//     clearInterval(intervalRef.current);

//     intervalRef.current = setInterval(() => {
//       if (audioRef.current.ended) {
//         toNextTrack();
//       } else {
//         setTrackProgress(audioRef.current.currentTime);
//       }
//     }, [1000]);
//   }

//   useEffect(() => {
//     //Pause and clean up on unmount
//     return () => {
//       audioRef.current.pause();
//       clearInterval(intervalRef.current);
//     }
//   }, []);

  useEffect(() => {
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
