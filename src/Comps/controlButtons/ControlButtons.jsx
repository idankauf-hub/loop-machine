import React, { useState } from "react";
import "./controlButtons.css";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import StopIcon from "@mui/icons-material/Stop";
import Stack from "@mui/material/Stack";
import { Fab } from "@mui/material";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import { borderRadius } from "@mui/system";
import MuiToggleButton from "@mui/material/ToggleButton";
import { styled } from "@mui/material/styles";
import { TrackingSlider } from "../trackingSlider/TrackingSlider";

const ToggleButton = styled(MuiToggleButton)({
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "white",
    backgroundColor: "#E0E0E0",
  },
});

//Using Props to send all the data about the actions to his parent "App.js"
export default function ControlButtons(props) {
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = React.useState(false);

  return (
    <div>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Fab
          onClick={() => {
            if (clicked == false) {
              props.isPlaying(!clicked)
              setClicked(true);
              props.isStoped(false)
            } else {
              setClicked(false);
              props.isPlaying(!clicked)

            }
          }}
        >
          {clicked ? <PauseIcon /> : <PlayArrowIcon />}
        </Fab>

        <Fab
          onClick={() => {
            setClicked(false);
            setSelected(false);
            props.isPlaying(false)
            props.isStoped(true)

          }}
        >
          <StopIcon />
        </Fab>

        <ToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setClicked(false);
            setSelected(!selected);
            props.isLoop(!selected)

          }}
        >
          <AllInclusiveIcon style={{ fontSize: "2rem"}} />
        </ToggleButton>
      </Stack>
    </div>
  );
}
