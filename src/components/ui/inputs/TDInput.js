import React from 'react';
import '../../../assets/scss/components/ui/inputes/tDInpute.scss';

function TDInput({
  type,
  value,
  change,
  label,
  error
}) {
  const handleChange = (evt) => {
    change(evt.target.value);
  };

  return (
    <div className="tDInput">
      <div className="tDInput__wrapper">
        {label && <label> {label} </label>}

        <input
          type={type}
          value={value}
          onChange={handleChange}
        />
      </div>

      {error && <span>error</span>}
    </div>
  )
}

export default TDInput;