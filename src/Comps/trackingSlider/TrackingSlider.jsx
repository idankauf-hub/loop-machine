import React, { useEffect, useState } from "react";
import "./trackingSlider.scss"

export default ({ audioRef }) => {
  const [currentTimePercent, setCurrentTimePercent] = useState(0);
  useEffect(() => {
    if (!audioRef) return;
    const current = audioRef.current;
    const onDuration = (e) => {
      const totalTime = current.duration;
      const currentTime = e.target.currentTime;
      const timePercent = Math.floor((currentTime / totalTime) * 100);
      setCurrentTimePercent(timePercent);
    };
    current.ontimeupdate = onDuration;
    //after finish reset the position
    return () => { 
      current.ontimeupdate = null;
    };
  }, [audioRef]);

  return (
    <div className="curser">
      <button style={{ left: currentTimePercent + "%" }}>
          <div className="candle"></div>
      </button>
    </div>
  );
};