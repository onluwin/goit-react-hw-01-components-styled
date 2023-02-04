import styled from '@emotion/styled'

function setBgColorByFriendStatus({ friendStatus, theme }) {
  switch (friendStatus) {
    case true:
      return theme.green
    case false:
      return theme.red
    default:
      break;
  }
}

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 220px;
  background-color: #fff;
  height: 50px;
  box-shadow: 3px 3px 5px black;
  :not(:last-child) {
  margin-bottom: 15px;
}
`

export const ItemStatus = styled.span`
  display: flex;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  margin-left: 15px;
  background-color: ${setBgColorByFriendStatus};
`

export const FriendAvatar = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 7px;
`

export const FriendName = styled.p`
  margin-left: 7px;
  font-size: 22px;
  font-weight: 500;`