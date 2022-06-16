import React, { useState } from 'react';
import TDHeader from './TDHeader';
import '../../../../assets/scss/components/ui/tables/tDTable/tDTable.scss';
import TDInput from '../../inputs/TDInput';
import { FaEllipsisV } from 'react-icons/fa';
import TDOptionMenu from './TDOptionMenu';

function TDTable({
  cols,
  items,
  itemsDescriptionList,
  deleteRow,
  editRow
}) {
  const [editableRowId, setEditableRowId] = useState(null);
  const [openedMenuRowIdx, setOpenedMenuRowIdx] = useState(null);

  const getRowValue = (item, column) => {
    let keys = itemsDescriptionList.filter(col => col.colName === column)[0].value;
    let keysArr = keys.split('.');
    let result = item;

    keysArr.forEach(key => result = result[key]);

    return result;
  };

  const setNewValue = (item, column, newValue) => {
    let keys = itemsDescriptionList.filter(col => col.colName === column)[0].value;
    let keysArr = keys.split('.');
    let result = JSON.parse(JSON.stringify(item));
    let rowData = result;

    for (let i = 0; i < keysArr.length; i++) {
      if (i === keysArr.length - 1) {
        result[keysArr[i]] = newValue;
        break;
      } else {
        result = result[keysArr[i]];
      }
    }

    return rowData;
  }

  const handleEditMode = (item) => {
    setOpenedMenuRowIdx(null);
    setEditableRowId(item.id);
  };

  const handleRowChange = (item, colName, value) => {
    editRow(setNewValue(item, colName, value));
  }

  const handleDelete = (item) => {
    setOpenedMenuRowIdx(null);
    deleteRow(item);
  }

  const isOpenedMenu = (index) => {
    return openedMenuRowIdx === index;
  };

  const isRowEditableMode = (rowId) => {
    return editableRowId === rowId;
  };

  const resetEditMode = (id) => {
    if (openedMenuRowIdx) return;

    if (editableRowId && editableRowId !== id) {
      setEditableRowId(null);
    }
  };

  const handleDotsClick = (event, id) => {
    setOpenedMenuRowIdx(id);

    event.stopPropagation();
    event.preventDefault();
  }

  const renderOption = (item) => {
    return (
      <TDOptionMenu
        item={item}
        deleteRow={handleDelete}
        editRow={handleEditMode}
        isEditMode={item.id === editableRowId}
        closeOptionMenu={() => setOpenedMenuRowIdx(null)}
      />
    )
  };

  const renderTableDefaultRow = (row) => {
    return (
      <tr
        key={row.id}
        onClick={() => resetEditMode(row.id)}
      >
        {
          cols.map((col, key) => {
            return (<td key={key}>{getRowValue(row, col.value)}</td>)
          })
        }

        <td className="option">
          <FaEllipsisV onClick={(event) => handleDotsClick(event, row.id)} />
          { isOpenedMenu(row.id) ? renderOption(row) : null }
        </td>
      </tr>
    )
  };

  const renderRowEditableMode = (row) => {
    return (
      <tr
        key={row.id}
        className="rowEditWrapper"
      >
        {
          cols.map((col, key) => {
            return (
              <td key={key}>
                {
                  col.isEditable
                    ? (
                      <TDInput
                        value={getRowValue(row, col.value)}
                        change={(value) => handleRowChange(row, col.value, value)}
                      />
                    )
                    : getRowValue(row, col.value)
                }
              </td>
            )
          })
        }

        <td className="option">
          <FaEllipsisV onClick={(event) => handleDotsClick(event, row.id)} />
          { isOpenedMenu(row.id) ? renderOption(row) : null }
        </td>
      </tr>
    )
  };

  const renderTableRows = () => {
    return items.map(row => (
      isRowEditableMode(row.id)
        ? renderRowEditableMode(row)
        : renderTableDefaultRow(row)
    ));
  };

  const renderNoData = () => {
    return (
      <tr className='no-data'>
        <td>No Data</td>
      </tr>
    )
  };
    
  return (
    <table className="tDTable">
      <TDHeader cols={cols} />
        <tbody>
          { items.length ? renderTableRows() : renderNoData()}
        </tbody>
      </table>
  )
}

export default TDTable;