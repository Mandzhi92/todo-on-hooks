import './Task.css';
import PropTypes, { string } from 'prop-types';

import Timer from '../timer/timer';
import EditingTask from '../editing-task';

export default function Task(props) {
  const { label, onDeleted, onToggleDone, onToggleEditing, getTime, editing, onFormatLabel, done, time, id } = props;

  const task = (
    <div className="view">
      <input className="toggle" type="checkbox" checked={done} onChange={onToggleDone} />
      <label>
        <span className="description">{label}</span>
        <Timer time={time} />

        <span className="created">{getTime}</span>
      </label>
      <button aria-label="edit" type="button" className="icon icon-edit" onClick={onToggleEditing} />
      <button aria-label="destroy" type="button" className="icon icon-destroy" onClick={onDeleted} />
    </div>
  );

  return editing ? <EditingTask onFormatLabel={onFormatLabel} label={label} id={id} /> : task;
}

Task.defaultProps = {
  label: 'This will be string',
  getTime: 'created $ seconds ago',
};

Task.propTypes = {
  label: string,
  getTime: string,
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onToggleEditing: PropTypes.func.isRequired,
  onFormatLabel: PropTypes.func.isRequired,
};
