import React from 'react';
import '../../assets/scss/components/board/boaedHeader.scss';

function BoardHeader({ title, user }) {
  const firstLetter = () => {
    return user.name[0].toUpperCase() + user.surname[0].toUpperCase();
  };

  return (
    <div className="boardHeader">
      <h1>{title}</h1>
      <div className="avatar">
        { firstLetter() }
      </div>
    </div>
  )
}

export default BoardHeader;