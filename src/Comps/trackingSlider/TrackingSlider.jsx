import React from 'react'
import Slider from '@mui/material/Slider';

export const TrackingSlider = () => {

  return (
    <Slider
    aria-label="time-indicator"
    size="small"
    // value={position}
    min={0}
    step={1}
    // max={duration}
    // onChange={(_, value) => setPosition(value)}
    sx={{
      height: 40,
      width:"20%",
      '& .MuiSlider-thumb': {
        width: 2,
        height: 0.5,
        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
        '&:before': {
          boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
        },
        '&:hover, &.Mui-focusVisible': {
          boxShadow: `0px 0px 0px 8px `,
        },
        '&.Mui-active': {
          width: 20,
          height: 20,
        },
      },
      '& .MuiSlider-rail': {
        opacity: 0.28,
      },
    }}
  />
  )
}
