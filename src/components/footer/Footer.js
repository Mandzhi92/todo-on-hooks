import './Footer.css';
import PropTypes from 'prop-types';

import TasksFilter from '../tasks-filter';

function Footer({ onFilterChange, filterBtn, onClearCompleted, isCompletedTasksCount }) {
  return (
    <footer className="footer">
      <span className="todo-count">{`${isCompletedTasksCount} items left`}</span>
      <TasksFilter onFilterChange={onFilterChange} filterBtn={filterBtn} />
      <button type="button" className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

Footer.defaultProps = {
  isCompletedTasksCount: 'N',
  onFilterChange: 'All',
  filterBtn: 'All',
};
Footer.propTypes = {
  isCompletedTasksCount: PropTypes.string,
  onFilterChange: PropTypes.func,
  filterBtn: PropTypes.string,
};

export default Footer;
