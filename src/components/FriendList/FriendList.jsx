import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendsList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      <div>
        {' '}
        {friends.map(({ avatar, name, id, isOnline }) => {
          return (
            <FriendListItem
              key={id}
              avatar={avatar}
              name={name}
              status={isOnline.toString()}
            />
          );
        })}
      </div>
    </FriendsList>
  );
};
