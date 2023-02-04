import styled from "@emotion/styled";

export const TransactionsTable = styled.table`
  width: 600px;
  margin: 0 auto;
  margin-bottom: 50px;
  background-color: #fff;
  border-spacing: 0;
  outline: 1px solid white;
`

export const TableHeader = styled.th`
  height: 40px;
  background-color: rgb(16, 156, 238);
  color: white;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
`

export const TableRow = styled.tr`
  height: 40px;
  font-size: 18px;
  font-weight: 500;
  :nth-of-type(even) {
  background-color: rgb(167, 167, 167);
  color: #fff;
}
`

export const TableData = styled.td`
  text-align: center;
  ::first-letter {
    text-transform: uppercase;
  }
`