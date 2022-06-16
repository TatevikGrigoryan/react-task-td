import React, { useState, useEffect, useRef } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

function TDOptionMenu({
  item,
  isEditMode,
  deleteRow,
  editRow,
  closeOptionMenu
}) {
  const optionMenuRef = useRef(null);
  const [isShow, setIsShow] = useState(true);

  const handleDelete = (item) => {
    deleteRow(item);
  };

  const handleEdit = (item) => {
    if (isEditMode) {
        return;
    }

    editRow(item);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionMenuRef.current && !optionMenuRef.current.contains(event.target)) {
        setIsShow(false);
        closeOptionMenu();
      }
    }

    document.addEventListener("mouseup", handleClickOutside);

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [])

  return (
    isShow ? (
      <div
        className="optionMenuWrapper"
        ref={optionMenuRef}
      >
        <div
          onClick={() => handleEdit(item)}
          className={isEditMode ? "disable" : ''}
        >
          <FaEdit />
          <span>Edit</span>
        </div>
        <div onClick={() => handleDelete(item)}>
          <FaTrashAlt />
          <span>Delete</span>
        </div>
      </div>
    )
    : null
  )
}

export default TDOptionMenu;