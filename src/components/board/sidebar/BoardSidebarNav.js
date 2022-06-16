import React, { useState } from 'react';
import { sidebarConst } from './SidebarConstants';
import { Link } from 'react-router-dom';

import '../../../assets/scss/components/board/sidebar/boardSidebarNav.scss';

function BoardSidebarNav() {
  //todo used for open-close menu
  // const [closedIdx, setClosedIdx] = useState([]);
  const [activeTabIdx, setActiveTabIdx] = useState('');

  const renderSubMenu = (menu) => {
    return (
      <ul>
        {menu.map((item, index) =>
          <li key={item.route}>
            <div className="separator" />
            <Link
              to={item.route}
              className={`subMenuItem ${isActiveTabIndex(`subMenuItem${index}`) ? 'subMenuItem__active' : ''}`}
              onClick={() => setActiveTabIdx(`subMenuItem${index}`)}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </li>
        )}
      </ul>
    )
  };

  // const openCloseMenu = (index) => {
  //   let newIdx = [...closedIdx];
  //
  //   if (isOpened(index)) {
  //     newIdx.push(index);
  //   } else {
  //     newIdx = closedIdx.filter(idx => idx !== index);
  //   }
  //
  //   setClosedIdx(newIdx);
  // };

  // const isOpened = (index) => {
  //   return closedIdx.indexOf(index) === -1;
  // };

  const isActiveTabIndex = (value) => {
    return activeTabIdx === value;
  }

  return (
    <nav className='boardSidebarNav'>
      { sidebarConst.map((item, index) => {
        return (
          <div key={`menu_${index}`}>
            <Link
              className={`menuHeader ${isActiveTabIndex(`main${index}`) ? 'menuHeader__active' : ''}`}
              onClick={() => setActiveTabIdx(`main${index}`)}
              to={item.route}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>

            { item.subMenu.length ? renderSubMenu(item.subMenu) : null }
          </div>
        );
      })}
    </nav>
  )
}

export default BoardSidebarNav;