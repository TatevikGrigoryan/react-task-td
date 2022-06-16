import React, { useState } from 'react';
import '../../../assets/scss/pages/board/dashboards.scss';
import AddNewDashboard from '../../../components/board/dashboard/AddNewDashboard';
import TDTable from '../../../components/ui/tables/tDTable/TDTable';
import TDButton from '../../../components/ui/buttons/TDButton';
import { FaPlus } from 'react-icons/fa';
import DateHelper from '../../../helpers/DateHelper';
import { useDispatch, useSelector } from 'react-redux';
import {
  addDashboard,
  deleteDashboard,
  editDashboard
} from '../../../store/slice/board/dashboard/DashboardSlice';

function Dashboards() {
  const [isAddActive, setAddStatus] = useState(false);
  const dispatch = useDispatch();
  const dashboardList = useSelector(state => state.dashboardReducer.dashboardList);

  const getTableDescriptionList = () => {
    return [
      {
        colName: 'name',
        value: 'name',
      },
      {
        colName: 'createdBy',
        value: 'createdBy',
      },
      {
        colName: 'editedDate',
        value: 'editedDate',
      }
    ];
  };

  const getCols = () => {
    return [
      {
        name: 'Name',
        value: 'name',
        isEditable: true
      },
      {
        name: 'Created By',
        value: 'createdBy',
        isEditable: true
      },
      {
        name: 'Last Edited',
        value: 'editedDate',
        isEditable: false
      }
    ];
  };

  const addNewDashboard = (data) => {
    data.editedDate = DateHelper.getCurrentDateMathDayYear();
    data.id = dashboardList.length + 1;

    dispatch(addDashboard(data));
  };

  const deleteRow = (row) => {
    dispatch(deleteDashboard(row));
  };

  const cancelAdd = () => {
    setAddStatus(false);
  }

  const handleEditDashboard = (data) => {
    dispatch(editDashboard(data))
  }

  return (
    <div className="dashboards">
      <h1> Dashboards </h1>
      <div className="dashboards__addBoardWrapper">
        { isAddActive ? (
          <AddNewDashboard
            add={addNewDashboard}
            cancel={cancelAdd}
          />
        )
        : (
          <div>
            <TDButton
              type='success'
              text='Add new dashboard'
              icon={ <FaPlus /> }
              action={() => setAddStatus(true)}
            />
          </div>
        )}
      </div>

      <div className="dashboards__tableWrapper">
        <TDTable
          cols={getCols()}
          items={dashboardList}
          itemsDescriptionList={getTableDescriptionList()}
          deleteRow={deleteRow}
          editRow={handleEditDashboard}
        />
      </div>
    </div>
  )
}

export default Dashboards;