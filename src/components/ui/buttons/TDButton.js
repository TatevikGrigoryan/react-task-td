import React from 'react';
import '../../../assets/scss/components/ui/buttons/tDButton.scss';

function TDButton({ text, type, icon, action, disabled }) {
  const handleButton = () => {
    return action ? action() : null;
  };

  return (
    <button
      className={`tDButton ${!disabled ? type : ''}`}
      onClick={handleButton}
      disabled={disabled}
    >
      { icon ?  <div className="buttonIcon"> {icon} </div> : null }
      <span> {text} </span>
    </button>
  )
}

export default TDButton;