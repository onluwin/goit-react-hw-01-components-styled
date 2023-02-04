import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  width: 300px;
  margin: 50px auto;
  outline: 3px solid white;
  border-radius: 10px;
  background-color: white;
`

export const ProfileAvatar = styled.img`
  display: flex;
  width: 130px;
  margin: 0 auto;
  border-radius: 50%;
  padding-top: 40px;
  padding-bottom: 20px;
`;

export const UserName = styled.p`
  display: flex;
  justify-content: center;
  font-size: 26px;
  font-weight: 600;
  margin: 0 auto;
  margin-bottom: 10px;
`

export const UserTag = styled.p`
  color: gray;
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`
export const UserLocation = styled.p`
  color: gray;
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`

export const StatList = styled.ul`
  display: flex;
  border-top: 2px solid rgb(153, 153, 153);
  background-color: rgb(220, 220, 238);
  `

export const StatItem = styled.li`
  width: 98px;
  height: 98px;
  :not(:last-child) {
    border-right: 2px solid rgb(153, 153, 153);
}
`

export const ItemLabel = styled.span`
  display: flex;
  font-size: 18px;
  justify-content: center;
  margin-bottom: 5px;
  margin-top: 20px;
`

export const ItemQuantity = styled.span`
  display: flex;
  justify-content: center;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 15px;
`