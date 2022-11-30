import './TasksFilter.css';
import PropTypes from 'prop-types';

function TasksFilter({ onFilterChange, filterBtn }) {
  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ];

  const btnItems = buttons.map(({ name, label }) => {
    let className = '';
    if (filterBtn === name) {
      className = 'selected';
    }
    return (
      <li key={name}>
        <button className={className} onClick={() => onFilterChange(name)} type="button">
          {label}
        </button>
      </li>
    );
  });

  return <ul className="filters">{btnItems}</ul>;
}

TasksFilter.defaultProps = {
  filterBtn: 'all',
};
TasksFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filterBtn: PropTypes.string,
};

export default TasksFilter;
