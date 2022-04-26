import React from "react";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import "./channel.css";
import { height } from "@mui/system";

export default function Channel({ track }) {
  console.log(track.title);
  return (
    <div style={{backgroundColor: track.color}} className="channel">
      <h3>{track.title}</h3>
      <Stack
        direction="row"
        spacing={0}
        alignItems="center"
        borderRadius={20}
      >
        <Switch />
        <strong style={{ paddingBottom: "4px" }}>mute</strong>
      </Stack>
    </div>
  );
}
