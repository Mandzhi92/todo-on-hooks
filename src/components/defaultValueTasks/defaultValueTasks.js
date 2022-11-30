import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export const getId = () => Math.floor(Math.random() * 10 ** 10);

const defaultValueTasks = [
  {
    done: false,
    editing: false,
    id: getId(),
    label: 'fw1',
    getTime: formatDistanceToNow(new Date(), [true]),
    time: '540',
  },
  {
    done: false,
    editing: false,
    id: getId(),
    label: 'fw2',
    getTime: formatDistanceToNow(new Date(), [true]),
    time: '260',
  },
  {
    done: false,
    editing: false,
    id: getId(),
    label: 'fw3',
    getTime: formatDistanceToNow(new Date(), [true]),
    time: '480',
  },
];

export default defaultValueTasks;
