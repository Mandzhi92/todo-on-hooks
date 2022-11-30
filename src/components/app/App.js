import { useState } from 'react';
import './App.css';

import TaskList from '../task-list';
import NewTaskForm from '../new-task-form';
import Footer from '../footer';
import defaultValueTasks, { getId } from '../defaultValueTasks/defaultValueTasks';

export default function App() {
  const [tasks, setTasks] = useState(defaultValueTasks);
  const [filter, setFilter] = useState('all');

  const addNewTask = (task) => {
    setTasks((state) => [{ ...task, id: getId() }, ...state]);
  };

  const changeTodoData = (tasks, id, key) => tasks.map((el) => (el.id === id ? { ...el, [key]: !el[key] } : el));

  const onToggleEditing = (id) => {
    setTasks(() => changeTodoData(tasks, id, 'editing'));
  };

  const onToggleDone = (id) => {
    setTasks(() => changeTodoData(tasks, id, 'done'));
  };

  const onFormatLabel = (label, id) => {
    setTasks(tasks.map((el) => (el.id === id ? { ...el, label, editing: !el.editing } : el)));
  };

  const deleteTask = (id) => {
    setTasks((state) => state.filter((item) => item.id !== id));
  };

  const onFilterChange = (filterName) => {
    setFilter(filterName);
  };

  const onClearCompleted = () => {
    setTasks((state) => state.filter((item) => item.done !== true));
  };

  const currentTasks = () => {
    if (filter === 'all') return tasks;
    if (filter === 'active') {
      return tasks.filter((item) => item.done !== true);
    }
    return tasks.filter((item) => item.done === true);
  };

  const isCompletedTasksCount = tasks.filter((item) => !item.done).length.toString();

  return (
    <section className="todoapp">
      <NewTaskForm addNewTask={addNewTask} />
      <section className="main">
        <TaskList
          todoData={currentTasks()}
          onToggleDone={onToggleDone}
          onToggleEditing={onToggleEditing}
          onDeleted={deleteTask}
          onFormatLabel={onFormatLabel}
        />
        <Footer
          onFilterChange={onFilterChange}
          filterBtn={filter}
          onClearCompleted={onClearCompleted}
          isCompletedTasksCount={isCompletedTasksCount}
        />
      </section>
    </section>
  );
}
