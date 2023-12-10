import { FriendItem, StatusFriend } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, status }) => {
  return (
    <FriendItem>
      <StatusFriend status={status} />
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendItem>
  );
};
