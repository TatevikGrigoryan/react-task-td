import React from 'react';
import '../../../assets/scss/components/board/sidebar/boardSidebar.scss';
import BoardSidebarNav from './BoardSidebarNav';
import TDButton from '../../ui/buttons/TDButton';

function BoardSidebar() {
  return (
    <div className="boardSidebar">
      <BoardSidebarNav />

      <div className="sidebarFooter">
        <TDButton
          text='Guides'
          type='attention'
        />
      </div>
    </div>
  )
}

export default BoardSidebar;