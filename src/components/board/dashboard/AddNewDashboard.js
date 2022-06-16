import React, { useState } from 'react';
import '../../../assets/scss/components/board/dashboard/addOrEditDashboard.scss'
import TDButton from '../../ui/buttons/TDButton';
import TDInput from '../../ui/inputs/TDInput';

function AddNewDashboard ({ add, cancel }) {
  const [dashboardData, setDashboard] = useState({
    name: '',
    createdBy: '',
  });

  const handleDashboardData = (value, name) => {
    const newData = {...dashboardData};
    newData[name] = value;
    setDashboard(newData);
  }

  const handleAddDashboard = () => {
    setDashboard({
      name: '',
      createdBy: '',
    })
    add(dashboardData);
  };

  const handleCancel = () => {
    cancel();
    setDashboard({
      name: '',
      createdBy: '',
    })
  };

  const isDisableSave = () => {
    return !dashboardData.name || !dashboardData.createdBy;
  }

  return (
    <div className="addOrEditDashboard">
      <div className="addOrEditDashboard__inputsWrapper">
        <TDInput
          type='text'
          label='Dashboard Name:'
          change={(value) => handleDashboardData(value, 'name')}
          value={dashboardData.name}
        />

        <TDInput
          type='text'
          label='Created by:'
          change={(value) => handleDashboardData(value, 'createdBy')}
          value={dashboardData.createdBy}
        />
      </div>

      <div className="buttonsWrapper">
        <TDButton
          type='success'
          text='Save'
          action={ handleAddDashboard }
          disabled={isDisableSave()}
        />
        <TDButton
          type='default'
          text='Cancel'
          action={ handleCancel }
        />
      </div>
    </div>
  )
}

export default AddNewDashboard;