import { useState } from 'react';
import './EditingTask.css';
import PropTypes from 'prop-types';

export default function EditingTask({ onFormatLabel, label, id }) {
  const [value, setValue] = useState(label);

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const inputKeyUp = (event) => {
    if (event.key === 'Enter' && value) {
      onFormatLabel(value, id);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormatLabel(value, id);
  };

  const blur = () => {
    onFormatLabel(value, id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="edit" value={value} onChange={handleChange} onBlur={blur} onKeyUp={inputKeyUp} />
    </form>
  );
}

EditingTask.defaultProps = {
  label: 'Editing task',
};

EditingTask.propTypes = {
  onFormatLabel: PropTypes.func.isRequired,
  label: PropTypes.string,
};
