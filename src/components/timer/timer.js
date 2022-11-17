import { useState } from 'react';
import './timer.css';

export default function Timer({ time }) {
  let saveTimer = 0;
  const [timeData, setTimeData] = useState([time, false]);

  const convertSeconds = (seconds) => {
    const sec = seconds % 60;
    return `${Math.floor(seconds / 60)}:${sec > 10 ? sec : `0${sec.toString()}`}`;
  };

  const onPause = () => {
    setTimeData((state) => [state[0], false]);
  };

  const onPlay = () => {
    if (timeData[1]) return;
    setTimeData((state) => [state[0], true]);
    saveTimer = new Date().getTime() + timeData[0] * 1000;

    const interval = setInterval(() => {
      setTimeData(([time, play]) => {
        if (!play || time <= 0) clearInterval(interval);
        const newTime = (saveTimer - new Date().getTime()) / 1000;
        return [Math.trunc(newTime), play];
      });
    }, 200);
  };

  return (
    <span className="description-timer">
      <button className="icon-play" onClick={onPlay} type="button" aria-label="button" />
      <button className="icon-pause" onClick={onPause} type="button" aria-label="button" />
      <span>{convertSeconds(timeData[0])}</span>
    </span>
  );
}
