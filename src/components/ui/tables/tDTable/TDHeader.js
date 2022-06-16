import React from 'react';
import '../../../../assets/scss/components/ui/tables/tDTable/tdHeader.scss'
import { FaAngleDown } from 'react-icons/fa';

function TDHeader(props) {
  const { cols } = props;

  return (
    <thead className="tDHeader">
      <tr>
        {cols.map((col, index) =>
          <th key={index} className={`${!index ? 'name' : ''}`}>
            <span>{col.name}</span>
            <span className="iconDown">
              <FaAngleDown />
            </span>
          </th>
        )}

        <th />
      </tr>
    </thead>
    )
}

export default TDHeader;