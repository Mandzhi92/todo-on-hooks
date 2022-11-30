import './TaskList.css';
import PropTypes from 'prop-types';

import Task from '../task';

function TaskList({ todoData, onDeleted, onToggleDone, onToggleEditing, onFormatLabel }) {
  const listItems = todoData.map(({ id, done, editing, label, getTime, time }) => {
    let className = '';
    if (done) {
      className = 'completed';
    }
    if (editing) {
      className = 'editing';
    }
    return (
      <li key={id} className={className}>
        <Task
          id={id}
          done={done}
          label={label}
          getTime={getTime}
          editing={editing}
          time={time}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleEditing={() => onToggleEditing(id)}
          onFormatLabel={onFormatLabel}
        />
      </li>
    );
  });

  return <ul className="todo-list">{listItems}</ul>;
}

TaskList.propTypes = {
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onToggleEditing: PropTypes.func.isRequired,
  onFormatLabel: PropTypes.func.isRequired,

  todoData: PropTypes.arrayOf(
    PropTypes.shape({
      done: PropTypes.bool,
      editing: PropTypes.bool,
      id: PropTypes.number,
      label: PropTypes.string,
      getTime: PropTypes.string,
    })
  ).isRequired,
};

export default TaskList;
