import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
}
`;

export const StatusFriend = styled.span`
  display: block;
  background-color: ${props => (props.status === 'true' ? 'green' : 'red')};
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
`;
