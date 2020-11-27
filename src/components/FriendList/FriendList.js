import React from 'react';

import Friends from './Friends'
import s from './FriendList.module.css'

export default function FriendListItem({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(item => (
        <Friends
          key={item.id}
          isOnline={item.isOnline}
          name={item.name}
          avatar={item.avatar}
        />
      ))}
    </ul>
  );
}
