import React, { useState } from "react";
import "./controlButtons.css";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import StopIcon from "@mui/icons-material/Stop";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { Fab } from "@mui/material";

export default function ControlButtons() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}
        marginTop={2}
      >
        <Fab
          onClick={() => {
            if(clicked == false){
              setClicked(true);
            }
            else{
              setClicked(false);
            }
          }}
        >
          {clicked ? <PauseIcon /> : <PlayArrowIcon />}
        </Fab>

        <Fab>
          <StopIcon />
        </Fab>
      </Stack>
    </div>
  );
}
