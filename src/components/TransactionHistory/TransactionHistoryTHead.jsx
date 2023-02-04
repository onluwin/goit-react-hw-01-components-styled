// STYLED
import { TableHeader } from './TransactionHistory.styled';

export const TransactionHistoryTHead = () => {
  return (
    <thead>
      <tr>
        <TableHeader>Type</TableHeader>
        <TableHeader>Amount</TableHeader>
        <TableHeader>Currency</TableHeader>
      </tr>
    </thead>
  );
};
