import { useState } from 'react';
import './NewTaskForm.css';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

function NewTaskFrom({ addNewTask }) {
  const [taskLabel, setTaskLabel] = useState('');
  const [time, setTime] = useState({ min: '', sec: '' });

  const onChangeNumberInput = (event) => {
    const { name, value } = event.target;
    if (name === 'sec') setTime(({ min }) => ({ min, sec: value }));
    if (name === 'min') setTime(({ sec }) => ({ sec, min: value }));
  };

  const onChangeInput = (event) => {
    setTaskLabel(event.target.value);
  };

  const onKeyUpInput = (event) => {
    const timeSec = +time.min * 60 + +time.sec;
    const isTime = time.min || time.sec;

    if (event.key === 'Enter' && taskLabel && isTime) {
      addNewTask({
        done: false,
        editing: false,
        label: taskLabel,
        getTime: formatDistanceToNow(new Date(), { includeSeconds: true }),
        time: timeSec,
      });

      setTaskLabel('');
      setTime({ sec: '', min: '' });
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form className="new-todo-form">
        <input
          value={taskLabel}
          onKeyUp={onKeyUpInput}
          type="text"
          onChange={onChangeInput}
          className="new-todo"
          placeholder="Task"
        />
        <input
          onChange={onChangeNumberInput}
          value={time.min}
          name="min"
          max="60"
          min="0"
          type="number"
          className="new-todo-form__timer"
          placeholder="Min"
        />
        <input
          onChange={onChangeNumberInput}
          value={time.sec}
          name="sec"
          max="60"
          min="0"
          type="number"
          className="new-todo-form__timer"
          placeholder="Sec"
        />
      </form>
    </header>
  );
}

export default NewTaskFrom;
